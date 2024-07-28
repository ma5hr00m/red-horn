import { fetchConfig } from '$lib/utils/fetchConfig';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const config = await fetchConfig();
		return json(config);
	} catch (error) {
		return json({ message: '读取环境配置文件失败', error: error.message }, { status: 500 });
	}
};
