const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { paths, postCSS } = require('./utils');

module.exports = merge(common, {
  mode: 'production',
  target: ['es5', 'web'],

  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    clean: true,
    pathinfo: false,
    path: paths.dist,
  },

  devtool: false,

  // Stop compilation early in production
  bail: false,

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              api: 'modern',
              sassOptions: {
                // Modern Sass options
                silenceDeprecations: ['legacy-js-api'],
              },
            },
          },
          postCSS,
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', postCSS],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.indexHTML,
      filename: 'index.html',

      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDocTypeTags: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:8].css',
      chunkFilename: 'assets/css/[name].[hash:8].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // Target ES5 for IE6+ compatibility
          ecma: 5,
          compress: {
            // Keep console for debugging on legacy browsers
            drop_console: false,
            // IE6-safe optimizations
            dead_code: true,
            drop_debugger: true,
            // Don't transform typeof undefined to void 0 (IE6 issue)
            typeofs: false,
            // Preserve IE6-compatible code
            ie8: true,
          },
          mangle: {
            // Safe property mangling for IE6
            safari10: true,
            ie8: true,
          },
          format: {
            // Keep comments for IE conditional compilation
            comments: /^\**!|@preserve|@license|@cc_on/i,
            // IE6-safe formatting
            safari10: true,
            ie8: true,
          },
        },
      }),
    ],
  },
});
