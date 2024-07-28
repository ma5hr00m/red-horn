<script>
	import '$lib/styles/markdown/github-markdown-light.scss';
	export let data;
	const { title, content } = data;
</script>

<article class="markdown-body">
	<h1 class="postTitle">{title}</h1>
	<svelte:component this={content} />
</article>

<style>
	.markdown-body {
		min-width: 720px;
		max-width: 980px;
		height: fit-content;
		margin: 0 auto;
		padding: 2rem;
		background: #fff;
		color: #4f4a4a;
		border-radius: 0.5rem;
		border: solid 1px #ddd;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
