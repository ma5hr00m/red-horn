import logger from '$lib/logger/logger';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const { method, url } = event.request;
	const start = Date.now();

	logger.info(`Incoming request: ${method} ${url}`);

	const response = await resolve(event);

	const duration = Date.now() - start;
	logger.info(`Response: ${method} ${url} - ${response.status} (${duration}ms)`);

	return response;
}
