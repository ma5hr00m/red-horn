<script>
	export let data;
</script>

<h1>Blog</h1>

<ul>
	<h2>{data.category}</h2>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
