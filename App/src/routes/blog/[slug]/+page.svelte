<script>
	import '$lib/styles/markdown/github-markdown-light.scss';
	import { config } from '$lib/stores/index';
	import TableOfContents from '$lib/components/TOC.svelte';
	import { onMount } from 'svelte';

	export let data;

	let headings = [];

	onMount(() => {
		headings = Array.from(
			document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3')
		).map((heading) => ({
			id: heading.id,
			text: heading.innerText,
			level: parseInt(heading.tagName[1])
		}));
	});
</script>

<svelte:head>
	<title>{data.title} | {$config.site.title}</title>
</svelte:head>

<TableOfContents {headings} />

<article class="markdown-body">
	<h1 class="postTitle">{data.title}</h1>
	<p class="postMeta">
		<span class="author">{data.author}</span>
		<span class="date">{data.date}</span>
		<span class="categories">{data.categories}</span>
	</p>
	<div>
		<img src={data.cover} alt={data.title} />
	</div>
	<svelte:component this={data.content} />
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
