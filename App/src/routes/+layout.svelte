<script>
	import { page } from '$app/stores';
	import GlobalHeader from '$lib/components/GlobalHeader.svelte';
	import GlobalFooter from '$lib/components/GlobalFooter.svelte';
	import '$lib/styles/styles.scss';
	import Meta from '$lib/components/Meta.svelte';
	import { config } from '$lib/stores/index';
	import { fly } from 'svelte/transition';
	import { onNavigate, afterNavigate } from '$app/navigation';
	import Navigation from '$lib/components/Navigation.svelte';
	const routes = $config.navigation.map((route, index) => ({ ...route, index }));

	export let data;

	let navigation = $config.navigation.map((route, index) => ({ ...route, index }));
	let title = $config.site.title;
	let currentTitle;
	let currentRoute = $page.url.pathname;;
	let targetRoute;
	let currentRouteIndex;
	let targetRouteIndex;
	let enterTransition;
	let exitTransition;

	function updateTitle(pathname) {
		const route = navigation.find((route) => route.href === pathname);
		currentTitle = route ? route.title : null;
	}

	function updateTransitions() {
		const isUndefined = currentRouteIndex === undefined || targetRouteIndex === undefined;
		const isForward = currentRouteIndex < targetRouteIndex;

		exitTransition = { x: isUndefined || isForward ? -100 : 100, duration: 300 };
		enterTransition = { x: isUndefined || isForward ? 100 : -100, duration: 500, delay: 300 };
	}

	onNavigate(({ to, from }) => {
		currentRoute = from.route.id;
		targetRoute = to.route.id;

		currentRouteIndex = navigation.find((route) => route.href === currentRoute)?.index;
		targetRouteIndex = navigation.find((route) => route.href === targetRoute)?.index;

		updateTransitions();
	});

	afterNavigate(() => {
		currentRoute = $page.url.pathname;
		updateTitle(currentRoute);
	});
</script>

<!-- {#key data.currentRoute}{/key} -->

<svelte:head>
	<title>{currentTitle} | {title}</title>
</svelte:head>

<Meta site={$config.site}></Meta>

<header>
	<Navigation {routes}></Navigation>
</header>
{#key data.currentRoute}
	<main in:fly={enterTransition} out:fly={exitTransition}>
		<slot />
	</main>
{/key}

<style lang="scss">
	:global(.root) {
		width: 100%;
		height: fit-content;
		min-height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		background-color: vr.$background;
		// background-image: linear-gradient(90deg, #d0d0d0 2%, #ffffff00 5%), linear-gradient(#d0d0d0 2%, #fafafa 5%);
		// background-size: 1rem 1rem;
		// background-repeat: repeat;
	}

	header {
		display: grid;
		justify-content: center;
		padding: 1rem 0 1rem;
		height: fit-content;
		width: 100%;
	}
	main {
		display: grid;
		justify-content: center;
		flex-grow: 1;
	}
</style>
