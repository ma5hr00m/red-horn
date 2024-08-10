import logger from '$lib/logger/logger';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const { method, url } = event.request;
    const start = Date.now();

    // 记录请求信息
    logger.info(`Incoming request: ${method} ${url}`);

    const response = await resolve(event);

    const duration = Date.now() - start;
    // 记录响应信息
    logger.info(`Response: ${method} ${url} - ${response.status} (${duration}ms)`);

    return response;
}
