const webpackMerge = require('webpack-merge');
import commonConfig from './webpack.common';

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports= webpackMerge(commonConfig, {

})
