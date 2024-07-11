<script>
	import GlobalHeader from '$lib/components/GlobalHeader.svelte';
	import GlobalFooter from '$lib/components/GlobalFooter.svelte';
	import '$lib/styles/styles.scss';
  import { fade } from 'svelte/transition';

	export let data;
</script>

<GlobalHeader></GlobalHeader>
{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
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
		padding: 1rem 6rem 2.5rem;
		width: 100%;
		flex: 1;
		display: flex;
		justify-content: center;
	}
</style>