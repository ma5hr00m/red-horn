<script>
	export let headings = [];

	function getIndentation(level) {
		return `${(level - 1) * 1.5}rem`;
	}
</script>

<aside class="toc">
	<h2>目录</h2>
	<ul>
		{#each headings as { id, text, level }}
			<li style="padding-left: {getIndentation(level)};">
				<a href={`#${id}`}>{text}</a>
			</li>
		{/each}
	</ul>
</aside>

<style>
	.toc {
		position: sticky;
		top: 1rem;
		padding: 1rem;
		background: #f9f9f9;
		border: 1px solid #ddd;
		border-radius: 0.5rem;
	}

	.toc ul {
		list-style: none;
		padding: 0;
	}

	.toc li {
		margin: 0.5rem 0;
	}

	.toc a {
		text-decoration: none;
		color: #007bff;
	}

	.toc a:hover {
		text-decoration: underline;
	}
</style>
