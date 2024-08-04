<script>
	import '$lib/styles/markdown/github-markdown-light.scss';
	export let data;
	const { title, content } = data;
</script>

<article class="markdown-body">
	<h1 class="postTitle">{title}</h1>
	<svelte:component this={content} />
</article>

<style lang="scss">
	.markdown-body {
		width: 54rem;
		height: fit-content;
		margin: 0 1rem 0 0;
		padding: 2rem;
		background: vr.$card;
		color: vr.$text;
		border-radius: .25rem;
		border: solid 1px vr.$card-border;
	}
</style>
