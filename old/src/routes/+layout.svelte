<script>
	import Header from '$lib/components/GlobalHeader.svelte';
	import '$lib/scss/styles.scss';
</script>

<Header />
<main>
	<slot />
</main>

<footer>Hello, I'm the footer.</footer>