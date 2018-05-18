const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
  /*  new webpack.DllPlugin({
      name: '[name]',
      path: './build/library/[name].json'
   }),*/
  //  new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
    // publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.css$/, use: [ 'style-loader', 'css-loader']},
      {test: /\.less$/, use: 'style!css!less'},
      {test: /\.(png|jpeg|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader?importLoaders=1&limit=100000'},
      {test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader"]},
      {test: /\.(csv|tsv)$/, use: [ 'csv-loader']},
      {test: /\.xml$/, use: [ 'xml-loader']},
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json'}
    ]
  },
  performance: { hints: false }
};
