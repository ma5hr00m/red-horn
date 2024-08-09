<script>
	import { config } from '$lib/stores/index';
	import FriendCard from '$lib/components/card/FriendCard.svelte';

	const friendsList = $config.friendsList;
</script>

<svelte:head>
	<title>友链 | {$config.site.title}</title>
</svelte:head>

<div class="wrapper">
	<div class="friendsList">
		{#each friendsList as friend}
			<FriendCard {friend}></FriendCard>
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

		.friendsList {
			max-width: 60rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 0.75rem;
		}
	}
</style>
