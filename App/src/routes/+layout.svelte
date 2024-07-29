<script>
	import GlobalHeader from '$lib/components/GlobalHeader.svelte';
	import '$lib/styles/styles.scss';
	import Meta from '$lib/components/Meta.svelte';
	import { config } from '$lib/stores/index';
	import { fly } from 'svelte/transition';
	import { onNavigate, afterNavigate } from '$app/navigation';

	export let data;

	let navigation = $config.navigation.map((route, index) => ({ ...route, index }));
	let title = $config.site.title;
	let currentTitle;
	let currentRoute;
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
		updateTitle(targetRoute);
	});
</script>

<svelte:head>
	<title>{currentTitle} | {title}</title>
</svelte:head>

<Meta site={$config.site}></Meta>
<GlobalHeader></GlobalHeader>
{#key data.currentRoute}
	<main in:fly={enterTransition} out:fly={exitTransition}>
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
