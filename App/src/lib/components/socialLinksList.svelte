<script>
	export let socialLinks;
</script>

<div class="container">
	{#each socialLinks as socialLink}
		<a href={socialLink.href} alt={socialLink.title}>
			{socialLink.title}
		</a>
	{/each}
</div>

<style lang="scss">
	.sideHeader {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		color: #333333;
		font-size: 1rem;
	}
</style>
