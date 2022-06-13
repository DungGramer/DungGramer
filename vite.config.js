import { defineConfig } from 'vite';
import path from 'path';
import babel from '@rollup/plugin-babel';
// import legacyPlugin from 'vite-plugin-legacy';
import legacy from '@vitejs/plugin-legacy';
import domJsx from 'vite-plugin-vue-jsx';

export default defineConfig({
  plugins: [
    // legacyPlugin({
    //   targets: ['> 0.5%', 'IE 11', 'last 2 versions', 'Firefox ESR', 'not dead'],
    //   ignoreBrowserslistConfig: false,
    //   corejs: 3,
    // }),
    babel({
      exclude: ['node_modules/@babel/**'],
      presets: [
        [
          '@babel/preset-env',
          {
            //   corejs: 3,
            // targets: ['> 0.25%', 'IE 11', 'not dead'],
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-react-jsx',
          {
            // pragma: 'createElement',
            // runtime: 'automatic',
            // importSource: path.resolve(__dirname, 'src/runtime/jsx-runtime.js'),
          },
        ],
      ],
    }),
    legacy({
      targets: ['IE 11'],
    }),
  ],
  root: path.resolve(__dirname, './src'),
  base: './',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,
  },

  server: {
    open: true,
  },
});
