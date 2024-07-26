<script>
	import ArticleCard from '$lib/components/card/ArticleCard.svelte';
	export let data;
</script>

<div class="container">
	<ul>
		{#each data.posts as post}
			<li>
				<ArticleCard {post}></ArticleCard>
			</li>
		{/each}
	</ul>	
</div>

<style lang="scss">
  .container {
    width: fit-content;
    height: fit-content;
		margin: 0 auto;
		padding: 2rem;
    background: #fff;
    color: #4f4a4a;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .5rem;
    border: solid 1px #ddd;
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }
</style>