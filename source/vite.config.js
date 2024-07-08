import { sveltekit } from '@sveltejs/kit/vite';
import { sveltePreprocess } from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [
		sveltekit(),
		sveltePreprocess({
			scss: {
				prependData: `@import './src/scss/styles.scss';`,
				includePaths: ['./src/styles']
			}
		})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	}
};
