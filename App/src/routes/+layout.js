import { config } from '$lib/stores/index';
import { getRoutesWithIndex } from '$lib/utils/utils';

export const load = async ({ fetch, url }) => {
	const currentRoute = url.pathname;

	try {
		const response = await fetch('/api/config');
		const data = await response.json();

		const { site, ...rest } = data;
		const routes = getRoutesWithIndex(rest);

		config.set(data);

		return {
			currentRoute,
			routes,
			siteMeta: site
		};
	} catch (error) {
		console.error('Failed to fetch config:', error);
		return {
			currentRoute,
			routes: [],
			siteMeta: {}
		};
	}
};
