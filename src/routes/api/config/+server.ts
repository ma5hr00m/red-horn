import { fetchConfig } from '$lib/utils/fetchConfig';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const config = await fetchConfig();
		return json(config);
	} catch (error) {
		return json({ message: 'Failed to load config file: ', error: error.message }, { status: 500 });
	}
};
