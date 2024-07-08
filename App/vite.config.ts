import {
  sveltekit
}
from '@sveltejs/kit/vite';
import {
  defineConfig
}
from 'vite';
import path from 'path';

export
default defineConfig({
    plugins:
    [sveltekit()],
    resolve: {
      alias: {
        '$lib': path.resolve(__dirname, './src/lib'),
        '$components': path.resolve(__dirname, './src/lib/components'),
        '$scss': path.resolve(__dirname, './src/lib/scss'),
        '$stores': path.resolve(__dirname, './src/lib/stores'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use './src/lib/scss/variables'as vr;
            @use './src/lib/scss/mixins'as mx;
            @use './src/lib/scss/functions'as fc;
            @use './src/lib/scss/keyframes'as kf;
            `
        }
      }
    },
  })