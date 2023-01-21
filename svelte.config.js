import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build', // This tells in which folder to build the static files to
			assets: 'build', // This tells in which folder to build the static files to
			fallback: null
		}),
		paths: {
			base: '/portofolio' // The github repository name
		}
	}
};

export default config;
