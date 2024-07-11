<script>
	import Navigation from './Navigation.svelte';
  export let routes = [
		{
			title: '主页',
			href: '/',
			icon: 'hugeicons:home-01'
		},
		{
			title: '文章',
			href: '/blog',
			icon: 'hugeicons:sticky-note-02'
		},
		{
			title: '关于',
			href: '/about',
			icon: 'hugeicons:telegram'
		},
		{
			title: '友链',
			href: '/friends',
			icon: 'hugeicons:clapping-02'
		},
		{
			title: '项目',
			href: '/projects',
			icon: 'hugeicons:codesandbox'
		}
	];
</script>

<header>
	<div></div>
  <Navigation {routes} />
	<div></div>
</header>

<style lang="scss">
	header {
		padding: 1.5rem 9rem;
		display: flex;
		flex-wrap: wrap;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
</style>