<script lang="ts">
	import Helmet from '$lib/components/Helmet.svelte';
</script>

<Helmet></Helmet>

<h1>Hello</h1>
<main>
	<slot />
</main>

<style lang="scss">
h1 {
	color: vr.$primary-color;
}
</style>