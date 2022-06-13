import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  root: path.resolve(__dirname, './src'),
  base: './',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,
    publicPath: 'https://dunggramer.github.io/DungGramer/',
  },

  server: {
    open: true
  }
  
});

