<script>
	import GlobalHeader from '$lib/components/GlobalHeader.svelte';
	import '$lib/styles/styles.scss';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<GlobalHeader></GlobalHeader>
{#key data.currentRoute}
	<main in:fly={{ x: -10, opacity: 0, duration: 150, delay: 150 }} out:fly={{ x: 10, opacity: 0, duration: 250 }}>
		<slot />
	</main>
{/key}

<style lang="scss">
	:global(body) {
		background: #f5f5f5;
		font-family: 'Noto Sans SC', sans-serif;
	}

	:global(.root) {
		position: relative;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		padding: 0 6rem 2.5rem;
		width: 100%;
		flex: 1;
		display: flex;
		justify-content: center;
	}
</style>
