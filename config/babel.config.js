module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'runtime',
      },
    ],
  ],
  comments: false,
};
