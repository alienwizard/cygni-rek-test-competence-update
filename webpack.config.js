const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, 'src');
const extractSass = new ExtractTextPlugin({
  filename: "css/styles.css",
  disable: false,
  allChunks: true
});

module.exports = (env) => {
  console.log('WEBPACK ENV', env);
  return {
    context: rootPath,
    entry: {
      'polyfills': './polyfills.ts',
      'vendor': './vendor.ts',
      'app': './main.ts'
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.join(__dirname, './www'),
      publicPath: "/",      
    },
    module: {
      rules: [
          {
            test: /\.ts$/,
            use: [
              { 
                loader: 'awesome-typescript-loader',
                options: {
                  errorsAsWarnings: true
                }
              },
              'angular2-template-loader' 
            ]
          },
          {
            test: /\.ts$/,
            loader: 'webpack-replace',
            query: {
                search: 'moduleId: module.id,',
                replace: ''
            }
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true,
        
              // angular 2 templates break if these are omitted
              removeAttributeQuotes: false,
              keepClosingSlash: true,
              caseSensitive: true,
              conservativeCollapse: true,
            }
          },
          {
            test: /\.css$/, 
            loaders: ['to-string-loader', 'css-loader']
          },
          {
            test: /\.scss$/,
            exclude: '/styles/main.scss',
            loaders: ['raw-loader', 'sass-loader']
          },
          {
            test: /\.scss$/,
            include: [path.resolve(__dirname, '/')],
            exclude: ['/node_modules/'],
            use: extractSass.extract({
              fallback: 'style-loader',
              use: [{
                  loader: 'css-loader',
                  options: {
                    minimize: false
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    config: {
                      path: './postcss.config.js'
                    }
                  }
                },
                {
                  loader: 'sass-loader'
                }
              ]
            })
          }
      ]
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: [' ', '.ts', '.tsx', '.js', '.jsx', '.scss', '.css']      
    },
    devtool: env === 'development' ? "source-map" : 'none',
    performance: {
      hints: "warning", // enum
      maxAssetSize: 25000000, // int (in bytes),
      maxEntrypointSize: 3500000, // int (in bytes)
      assetFilter: function(assetFilename) { 
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
    },
    devServer: {
      host: "0.0.0.0",
      contentBase: path.join(__dirname, "www"), 
      publicPath: '/',
      compress: false, 
      https: false, 
      noInfo: false, 
    },
    plugins: [
      extractSass,
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        rootPath,
        {} // a map of your routes
      ),
      new webpack.DefinePlugin({
        PRODUCTION: env === 'production',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      showErrors: true,      
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
  ],
  node: {
      fs: 'empty',
      net: 'empty'
  }
  }
}