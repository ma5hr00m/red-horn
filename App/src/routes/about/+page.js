export async function load({ params }) {
	const post = await import(`./index.md`);
	const { title } = post.metadata;
	const content = post.default;

	return {
		content,
		title
	};
}
