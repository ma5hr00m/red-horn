import { config } from '$lib/context/index.ts';

export const load = async ({ fetch, url }) => {
	try {
		const response = await fetch('/api/config');
		const data = await response.json();
		const { site, ...rest } = data;
		config.set(data);

		return {};
	} catch (error) {
		console.error('Failed to fetch config:', error);
		return {};
	}
};
