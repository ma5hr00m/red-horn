<script>
	import NoticeCard from '$lib/components/card/NoticeCard.svelte';
	import { config } from '$lib/stores/index';
	import ArticleCard from '$lib/components/card/ArticleCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>文章 | {$config.site.title}</title>
</svelte:head>

<div class="wrapper">
	<NoticeCard maxWidth="56rem">
		📦 文章尚未全部搬运到此站点，详情可见原博客站点：<a href="https://ma5hr00m.github.io"
			>ma5hr00m.github.io</a
		>
	</NoticeCard>
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
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		.articleList {
			@include mx.card(100%, fit-content);
			max-width: 56rem;
			display: flex;
			flex-direction: column;
			list-style: none;
			overflow: hidden;
		}
	}

	a {
		color: vr.$primary-color;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
