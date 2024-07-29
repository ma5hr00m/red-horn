import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

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
            @use 'src/lib/styles/variables'as vr;
          `
			}
		}),
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/post.svelte'
			},
			remarkPlugins: [remarkSlug, remarkAutolinkHeadings]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter()
	}
};

export default config;
