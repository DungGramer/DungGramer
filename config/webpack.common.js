const { paths, postCSS } = require('./utils');

module.exports = {
  entry: paths.indexJS,
  target: ['es5', 'web'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: paths.nodeModule,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: paths.nodeModule,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: paths.babel,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
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
        use: ['style-loader', 'css-loader', postCSS],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      '~': paths.root,
    },
  },
};
