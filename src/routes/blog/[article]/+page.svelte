<script lang="ts">
	import Icon from '@iconify/svelte';
	import { config } from '$lib/context/index';
	import { onMount } from 'svelte';
	import '$lib/styles/markdown/kinoko-markdown-dark.scss';

	export let data;

	let headings = [];
  const projectConfig: any = $config;
</script>

<svelte:head>
	<title>{data.title} | {projectConfig.site.title}</title>
</svelte:head>

<div class="wrapper">
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
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		width: 100%;
		padding: 1rem 1rem 0;
		display: flex;
		justify-content: center;
	}
	.card {
		width: 100%;
		max-width: 56rem;
		height: fit-content;
		padding: 2.5rem;
		@include mx.card();

		.metadata {
			.postMeta {
				margin: 1rem 0 0 0;
				display: flex;
				column-gap: 1rem;
				color: vr.$theme-color;
				font-weight: 600;

				.data {
					display: flex;
					align-items: center;
					column-gap: 0.25rem;
				}
			}

			.coverContainer {
				margin: 1rem 0 0 0;
				width: 100%;
				height: 20rem;
				border: solid 1px vr.$card-border;
				border-radius: vr.$card-radius;
				overflow: hidden;

				.cover {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		.markdown-body {
			margin: 2rem 0 0 0;
		}
	}
</style>
