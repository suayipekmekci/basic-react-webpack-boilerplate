const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'React-Webpack',
      favicon: 'src/common/images/favicon.ico',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        description: 'React 16 + Webpack 4 + Fontawesome + Bootstrap + Hotreolad'
      },
      minify: true,
    })
  ],
  devServer:{
      port: 8080,
      historyApiFallback: true,
      compress: true
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: {loader: 'babel-loader'}},
      {test: /\.css$/, use: [ 'style-loader', 'css-loader']},
      {test: /\.less$/, use: 'style!css!less'},
      {test: /\.(png|jpeg|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader?importLoaders=1&limit=100000'},
      {test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader"]},
      {test: /\.(csv|tsv)$/, use: [ 'csv-loader']},
      {test: /\.xml$/, use: [ 'xml-loader']},
      {test: /\.json$/, loader: 'json'}
    ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx']
  },
  performance: { hints: false }
};
