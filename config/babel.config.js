module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '6',
        },
        // Use 'usage' to only include polyfills that are actually used
        // This significantly reduces bundle size for modern browsers
        useBuiltIns: 'usage',
        corejs: {
          version: '3.22',
          proposals: true,
        },
        // Enable module transformation for better tree-shaking
        modules: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'jsx-mini',
      },
    ],
  ],
  comments: false,
  // Ensure modern browsers get optimized code
  env: {
    modern: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
            useBuiltIns: false,
            modules: false,
          },
        ],
      ],
    },
  },
};
