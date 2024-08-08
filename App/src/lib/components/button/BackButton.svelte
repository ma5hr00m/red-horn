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
		color: vr.$text;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: background-color 0.3s;

		&:hover {
			background-color: vr.$navigation-hover;
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
		background-color: transparent;
		cursor: not-allowed;
	}
</style>
