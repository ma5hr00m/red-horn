import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const currentDate = new Date().toISOString().split('T')[0];

	const sortedPosts = allPosts
		.map((post) => {
			if (!post.meta.date) {
				post.meta.date = currentDate;
			}
			return post;
		})
		.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

	return json(sortedPosts);
};
