<script>
	import '$lib/styles/markdown/github-markdown-light.scss';
	import { config } from '$lib/stores/index';
	import '$lib/styles/markdown/kinoko-markdown-dark.scss';

	export let data;
	const { title, content } = data;
</script>

<svelte:head>
	<title>关于 | {$config.site.title}</title>
</svelte:head>

<div class="wrapper">
	<article class="markdown-body">
		<h1 class="postTitle">{title}</h1>
		<svelte:component this={content} />
	</article>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		width: 100%;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		.markdown-body {
			max-width: 50rem;
			height: fit-content;
			padding: 2rem;
			background: vr.$card;
			color: vr.$text;
			border-radius: vr.$card-radius;
			border: solid 1px vr.$card-border;
		}
	}
</style>
