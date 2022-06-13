import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  root: './src',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: '../dist',
    emptyOutDir: true,

  },

  server: {
    open: true
  }
  
});

