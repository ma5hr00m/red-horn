<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let config;

	onMount(async () => {
		const response = await fetch('/api/config');
		if (response.ok) {
			config = await response.json();
			console.log(config);
		} else {
			console.error('Failed to fetch config');
		}
	});
</script>

<main>
	<Icon icon="hugeicons:account-setting-03" />
	<h1>配置数据</h1>
	{#if config}
		<pre>{JSON.stringify(config, null, 2)}</pre>
	{:else}
		<p>加载中...</p>
	{/if}
</main>
