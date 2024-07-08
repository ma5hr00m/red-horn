import adapter from '@sveltejs/adapter-auto';
import {
  vitePreprocess
}
from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

const config = {
  /**
   * Your svelte project should be in the vscode workspace root refer to this issue, otherwise, it will result in a path error:
   * https://github.com/sveltejs/language-tools/issues/1409
   * 
   * The official recommendation is to use viteProcess(), because it has better performance.
   * But Sevlte's official vscode plugin still has some issues, which can be found in vite.config.js.
   */
  preprocess: [
    preprocess({
      scss: {
        prependData: `
            @use 'src/lib/scss/variables'as vr;
          `
        }
      }),
    vitePreprocess()
  ],

  kit: {
    adapter: adapter()
  }
};

export
default config;