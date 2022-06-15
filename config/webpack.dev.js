const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { paths } = require('./utils');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    filename: '[name].[contenthash:8].js',
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,

    static: {
      directory: paths.public,
      watch: {
        ignored: /node_modules/,
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.indexHTML,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
