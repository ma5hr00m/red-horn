export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, author, categories, cover } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		author,
		categories,
		cover
	};
}
