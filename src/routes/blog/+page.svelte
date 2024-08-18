<script lang="ts">
	import { config } from '$lib/context/index';
	import ArticleCard from '$lib/components/card/ArticleCard.svelte';

	export let data;
	const projectConfig: any = $config;
</script>

<svelte:head>
	<title>文章 | {projectConfig.site.title}</title>
</svelte:head>

<div class="wrapper">
	<div class="articleList">
		{#each data.posts as post}
			<ArticleCard {post}></ArticleCard>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		width: 100%;
		padding: 1rem 1rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		.articleList {
			max-width: 56rem;
			display: flex;
			flex-direction: column;
			list-style: none;
			overflow: hidden;
			row-gap: 1rem;
		}
	}
</style>
