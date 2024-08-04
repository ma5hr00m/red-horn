<script>
	import Navigation from './Navigation.svelte';
	import { config } from '$lib/stores/index';
	const routes = $config.navigation.map((route, index) => ({ ...route, index }));
</script>

<header>
	<div></div>
	<Navigation {routes} />
	<div></div>
</header>

<style lang="scss">
	header {
		z-index: 100;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		padding: 1.5rem 9rem;
		display: flex;
		flex-wrap: wrap;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		background-color: transparent;
	}
</style>
