import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

export async function fetchConfig() {
	try {
		const filePath = path.join(process.cwd(), 'config.yaml');
		const file = fs.readFileSync(filePath, 'utf8');
		const config = YAML.parse(file);
		return config;
	} catch (error) {
		throw new Error('读取环境配置文件失败: ' + error.message);
	}
}
