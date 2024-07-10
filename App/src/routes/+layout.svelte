<script>
	import GlobalHeader from '$lib/components/GlobalHeader.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/styles.scss';
  import { fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Home - Kinoko Monogatari</title>
	<meta property="og:title" content="Kinoko Monogatari" />
</svelte:head>
<GlobalHeader></GlobalHeader>
{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}