<script>
	import FriendCard from '$lib/components/card/FriendCard.svelte';
	import { config } from '$lib/stores/index';

	const friendsList = $config.friendsList;
</script>

<div class="container">
	<div class="friends">
		{#each friendsList as friend}
			<FriendCard {friend}></FriendCard>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		width: fit-content;
		height: fit-content;
		margin: 0 auto;
		padding: 2rem;
		background: #fff;
		color: #4f4a4a;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 0.5rem;
		border: solid 1px #ddd;
	}
	section {
		margin-bottom: 2rem;
	}
	.friends {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem 2rem;
		justify-content: start;
	}
</style>
