const autoprefixer = require('autoprefixer');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const postcssNormalize = require('postcss-normalize');

module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: [
    autoprefixer({ grid: 'autoplace' }),
    flexBugsFixes(),
    postcssNormalize(),
  ],
};
