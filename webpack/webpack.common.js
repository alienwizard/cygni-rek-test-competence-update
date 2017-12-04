const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rootPath = path.join(__dirname, 'src');

const commonConfig = {
    context: rootPath,
    entry: './app/main.ts',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.join(__dirname, '../www'),
      publicPath: "/",      
    },
    module: {
      rules: [
          {
            test: /\.ts$/,
            use: [
              { 
                loader: 'ts-loader',
                options: {  
                  configFile: path.join(__dirname, '../../tsconfig.json'),
                  compilerOptions: {
                      target: 'es2017'
                  }
                } 
              } 
            ]
          }, 
          {
            test: /\.scss$/,
            use: extractSass.extract({
              fallback: 'style-loader',
              use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  config: {
                    path: './internals/postcss.config.js'
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
    plugins: [
      extractSass
    ]
}

export default commonConfig;