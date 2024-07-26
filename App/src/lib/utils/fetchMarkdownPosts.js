import fs from 'fs/promises';
import path from 'path';

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([filePath, resolver]) => {
			const { metadata } = await resolver();
			const postPath = filePath.slice(11, -3);

			const absolutePath = path.resolve(`.${filePath}`);
			const content = await fs.readFile(absolutePath, 'utf-8');

			const contentWithoutFrontMatter = content.replace(/---[\s\S]*?---/, '').trim();
			const snippet = contentWithoutFrontMatter.slice(0, 120);

			return {
				meta: metadata,
				path: postPath,
				snippet: snippet
			};
		})
	);

	return allPosts;
};
