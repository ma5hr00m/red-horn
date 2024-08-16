import { fetchPosts } from '$lib/utils/fetchPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchPosts();
	const currentDate = new Date().toISOString().split('T')[0];

	const sortedPosts = allPosts
		.map((post) => {
			if (!post.meta) {
				post.meta = {};
			}
			if (!post.meta.date) {
				post.meta.date = currentDate;
			}
			return post;
		})
		.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

	return json(sortedPosts);
};
