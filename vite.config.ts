/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src');
const rest = resolve(root, '*');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  resolve: {
    alias: {
      '@src': root,
      '@src/*': rest,
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: outDir,
    rollupOptions: {
      input: {
        popup: './index.html',
      },
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [react()],
});
