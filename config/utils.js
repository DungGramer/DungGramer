const path = require('path');

const resolvePath = (dir) => path.join(__dirname, '../', dir);
const formatFileName = '[name].[hash:8].[ext]';

const paths = {
  root: resolvePath(''),
  src: resolvePath('src'),
  public: resolvePath('public/'),
  dist: resolvePath('dist/'),
  indexHTML: resolvePath('public/index.html'),
  indexJS: resolvePath('src/index.jsx'),
  assets: resolvePath('public/assets'),
  nodeModule: resolvePath('node_modules'),
  babel: resolvePath('config/babel.config.js'),
};

const postCSS = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      config: resolvePath('config/postcss.config.js'),
    },
  },
};

module.exports = {
  resolvePath,
  formatFileName,
  paths,
  postCSS,
};
