<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let canGoBack = false;

	onMount(() => {
		canGoBack = window.history.length > 1;
	});

	function goBack() {
		if (canGoBack) {
			window.history.back();
		} else {
			window.location.href = '/';
		}
	}
</script>

<button on:click={goBack} disabled={!canGoBack}>
	<span>
		<Icon icon="hugeicons:link-backward" />
	</span>
</button>

<style lang="scss">
	button {
    width: 2.25rem;
		background-color: transparent;
    color: #95d146;
		border: none;
		border-radius: 4px;
		cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #95d146;
      color: white;
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
	}

	button:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}
</style>
