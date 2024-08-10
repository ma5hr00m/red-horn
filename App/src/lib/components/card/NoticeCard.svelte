<script>
	export let maxWidth;
</script>

<div class="noticeCard" style="--max-width: {maxWidth}">
	<slot></slot>
</div>

<style lang="scss">
	.noticeCard {
		width: 100%;
		max-width: var(--max-width);
		padding: 1rem;
		font-size: 0.8rem;
		@include mx.card(100%, fit-content);
		@include mx.flex-center();
	}
</style>
