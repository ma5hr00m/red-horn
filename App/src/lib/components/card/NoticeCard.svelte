<script>
	export let notice;
</script>

<div class="noticeCard">
	<p>{notice}</p>
</div>

<style lang="scss">
	.noticeCard {
		width: 100%;
		max-width: 64rem;
		padding: 1rem;
		font-size: 0.8rem;
		@include mx.card(100%, fit-content);
		@include mx.flex-center();
	}
</style>
