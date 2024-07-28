import { config } from '$lib/stores/index';

export const load = async ({ fetch, url }) => {
	const currentRoute = url.pathname;

	async function fetchConfig() {
		try {
			const response = await fetch('/api/config');
			const data = await response.json();
			config.set(data);
		} catch (error) {
			console.error('Failed to fetch config:', error);
		}
	}

	await fetchConfig();

	return {
		currentRoute
	};
};
