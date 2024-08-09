<script>
	import { config } from '$lib/stores/index';
	import ArticleCard from '$lib/components/card/ArticleCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>文章 | {$config.site.title}</title>
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
		padding: 0 1rem;
		display: flex;
		justify-content: center;

		.articleList {
			@include mx.card(100%, fit-content);
			max-width: 56rem;
			display: flex;
			flex-direction: column;
			list-style: none;
			overflow: hidden;
		}
	}
</style>
