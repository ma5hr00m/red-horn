<script>
	import { config } from '$lib/stores/index';
	import BannerCard from '$lib/components/card/BannerCard.svelte';
	import NoticeCard from '../lib/components/card/NoticeCard.svelte';
</script>

<svelte:head>
	<title>主页 | {$config.site.title}</title>
</svelte:head>

<div class="wrapper">
	<BannerCard site={$config.site}></BannerCard>
	<NoticeCard maxWidth="64rem">
		{$config.notice.content}
	</NoticeCard>
</div>

<!--
<svg width="100" height="100">
    <line x1="0" y1="0" x2="0" y2="0" style="stroke:rgb(255,0,0);stroke-width:2">
        <animate attributeName="x2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
        <animate attributeName="y2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
    </line>
  </svg>
-->

<style lang="scss">
	.wrapper {
		position: relative;
		width: 100%;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
