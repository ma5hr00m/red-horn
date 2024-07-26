<script>
  import '$lib/styles/markdown/github-markdown-light.scss';
	export let data;
  const { title, date, author, content, categories, cover } = data;
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
  <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>
<article class="markdown-body">
	<h1 class="postTitle">{title}</h1>
	<p class="postMeta">
		<span class="author">{author}</span>
		<span class="date">{date}</span>
		<span class="categories">{categories}</span>
	</p>
	<div>
		<img src={cover} alt={title} />
	</div>
	<svelte:component this={content} />
</article>

<style>
  .markdown-body {
		min-width: 720px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>