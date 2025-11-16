const autoprefixer = require('autoprefixer');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const postcssNormalize = require('postcss-normalize');

module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: [
    autoprefixer({
      grid: 'autoplace',
      // Support extremely old browsers including IE6
      overrideBrowserslist: [
        'ie >= 6',
        'last 5 versions',
        '> 0.01%',
      ],
      // Add all vendor prefixes for maximum compatibility
      cascade: true,
      // Support old flexbox syntax
      flexbox: 'no-2009',
    }),
    flexBugsFixes(),
    postcssNormalize({
      // Use browserslist config from package.json
      forceImport: false,
    }),
  ],
};
