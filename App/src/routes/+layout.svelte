<script>
	import { fly } from 'svelte/transition';
	import { onNavigate } from '$app/navigation';

	import '$lib/styles/styles.scss';
	import Navigation from '$lib/components/Navigation.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { updateTransitions } from '$lib/utils/utils';

	export let data;

	let routes = data.routes;
	let site = data.siteMeta;
	let enterTransition, exitTransition;

	onNavigate(({ to, from }) => {
		const currentRouteIndex = routes.find(route => route.href === from.route.id)?.index;
		const targetRouteIndex = routes.find(route => route.href === to.route.id)?.index;
		({ enterTransition, exitTransition } = updateTransitions(currentRouteIndex, targetRouteIndex));
	});
</script>


<Meta {site} />
<header>
	<Navigation {routes} />
</header>
{#key data.currentRoute}
	<div class="main-wrapper" in:fly={enterTransition} out:fly={exitTransition}>
		<slot />
	</div>
{/key}


<style lang="scss">
	header {
		width: 100%;
		display: grid;
		justify-content: center;
		padding: 1rem 0 1rem 0;
		height: fit-content;
		width: 100%;
	}
	.main-wrapper {
		width: 100%;
		justify-content: center;
		flex-grow: 1;
	}
</style>
