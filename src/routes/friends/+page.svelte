<script lang="ts">
	import { config } from '$lib/context/index';
	import FriendCard from '$lib/components/card/FriendCard.svelte';

	const projectConfig: any = $config;
</script>

<svelte:head>
	<title>友链 | {projectConfig.site.title}</title>
</svelte:head>

<div class="wrapper">
	<div class="friendsList">
		{#each projectConfig.friendsList as friend}
			<FriendCard {friend}></FriendCard>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		width: 100%;
		padding: 1rem 1rem 0;
		display: flex;
		justify-content: center;

		.friendsList {
			max-width: 60rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 1.5rem;
		}
		// .placeholder {
		// 	height: 14rem;
		// 	width: 14rem;
		// }
	}
</style>
