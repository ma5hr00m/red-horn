<script>
	import Icon from '@iconify/svelte';
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

<div class="container">
	<div class="card">
		<div class="metadata">
			<h1 class="postTitle">{data.title}</h1>
			<p class="postMeta">
				<span class="data author">
					<Icon icon="material-symbols:account-box" />
					{data.author}
				</span>
				<span class="data date">
					<Icon icon="material-symbols:clarify" />
					{data.date}
				</span>
				<span class="data category">
					<Icon icon="material-symbols:book-2-rounded" />
					{data.categories}
				</span>
			</p>
			<div class="coverContainer">
				<img class="cover" src={data.cover} alt={data.title} />
			</div>
		</div>
		<article class="markdown-body">
			<svelte:component this={data.content} />
		</article>
	</div>
	<TableOfContents {headings} />
</div>

<style lang="scss">
	.container {
		display: flex;
	}
	.card {
		width: 54rem;
		height: fit-content;
		margin: 0 1rem 0 0;
		padding: 2rem;
		background: #fff;
		color: vr.$text;
		border-radius: .25rem;
		border: solid 1px vr.$card-border;

		.metadata {

			.postMeta {
				margin: 1rem 0 0 0;
				display: flex;
				column-gap: 1rem;
				color: vr.$primary-color;
				font-weight: 600;

				.data {
					display: flex;
					align-items: center;
					column-gap: .25rem;
				}
			}
			
			.coverContainer {
				margin: 1rem 0 0 0;
				width: 50rem;
				height: 30rem;
				border: solid 1px #ddd;
				border-radius: .25rem;
				overflow: hidden;
				background-color: vr.$image-background;

				.cover {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		.markdown-body {
			margin: 2rem 0 0 0 ;
		}
	}
</style>
