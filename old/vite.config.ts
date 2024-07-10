import {
  sveltekit
}
from '@sveltejs/kit/vite';
import {
  defineConfig
}
from 'vite';

export
default defineConfig({
    plugins:
    [sveltekit()]
  })

/**
 * The following configuration will cause VSCode to fail to parse variables in SCSS files, resulting in errors.
 * 
 * ```javascript
 * export default defineConfig({
 *   plugins:
 *     [sveltekit()],
 *     css: {
 *       preprocessorOptions: {
 *       scss: {
 *         additionalData: `@use '$lib/scss/variables'as * ;@use '$lib/scss/mixins'as * ;`,
 *       },
 *     },
 *   }
 * });
 * ```
 * 
 * This issue stems from a lack of support in the official Svelte VSCode extension. 
 * The official team has not yet released a fix for this problem.
 * 
 * A similar issue is discussed in this Stack Overflow question: 
 * [https://stackoverflow.com/questions/76021948/vscode-cant-find-scss-import-in-svelte-component-if-path-contains-lib-alias](https://stackoverflow.com/questions/76021948/vscode-cant-find-scss-import-in-svelte-component-if-path-contains-lib-alias)
 */