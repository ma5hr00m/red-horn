<script>
	import BackButton from '$lib/components/button/BackButton.svelte';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	export let routes;

	let iconElement;
	let iconWidth = 0;

	onMount(() => {
		iconWidth = iconElement.offsetWidth;
	});
</script>

<nav>
	<div class="routes">
		<BackButton></BackButton>
		{#each routes as route}
			<a href={route.href} aria-current={$page.url.pathname === route.href ? 'page' : null}>
				<div class="iconsContainer" style="--icon-width: {iconWidth}px;">
					<span class="icons" bind:this={iconElement}>
						<Icon icon={route.icon} />
					</span>
				</div>
				{route.title}
			</a>
		{/each}
	</div>
</nav>

<style lang="scss">
	nav {
		@include mx.flex-center();
		@include mx.card();
		height: fit-content;
		border-radius: 0.25rem;
		gap: 1.5rem;
		transition: width 0.3s;
	}
	.routes {
		padding: 0.4rem 0.6rem;
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 0.75rem;
	}
	a {
		display: flex;
		text-decoration: none;
		color: inherit;
		padding: 0.4rem 0.8rem;
		border-radius: 0.25rem;
		font-size: 1rem;
		transition: all 0.3s;
		white-space: nowrap;

		&:hover {
			background: vr.$navigation-hover;
			color: #fff;
		}

		&:hover > .iconsContainer {
			opacity: 1;
			width: var(--icon-width);
			color: #fff;
			transition: all 0.3s;
		}
	}
	.iconsContainer {
		font-size: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
		overflow-x: hidden;
		opacity: 0;
		transition: all 0.3s;
	}
	.icons {
		display: flex;
		padding-right: 0.25rem;
	}

	a[aria-current='page'] {
		background: vr.$primary-color;
		color: #fff;

		& > .iconsContainer {
			opacity: 1;
			width: var(--icon-width);
			transition: width 0.3s;
		}
	}
</style>
