<script lang="ts">
	export let data: { category: string; posts: { path: string; meta: { title: string; categories: string[] } }[] };
</script>

<h1>{data.category}</h1>

<ul>
	{#each data.posts as { path, meta: { title } }}
		<li>
			<h2>
				<a href={path}>{title}</a>
			</h2>
		</li>
	{/each}
</ul>