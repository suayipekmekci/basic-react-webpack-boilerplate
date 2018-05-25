const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
var bootstrapPath = __dirname + '/node_modules/bootstrap/dist/css';
var fontAwesomePath = __dirname + '/node_modules/font-awesome/css';

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
    inline: true
  },
  mode: "development"
});
