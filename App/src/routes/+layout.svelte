<!--
想象力将会成为人类愈加宝贵的财富 :)
当AI逐渐接管生活中的琐事，人们终会抬头仰望最初的那片星空，思想将会从繁琐的日常中挣脱出来，亦如洞穴中的智人在解决温饱问题后盯着火苗发起的沉思。
-->
<script>
	import GlobalHeader from '$lib/components/GlobalHeader.svelte';
	import '$lib/styles/styles.scss';
	export let data;
</script>

<GlobalHeader></GlobalHeader>
{#key data.currentRoute}
	<main>
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
