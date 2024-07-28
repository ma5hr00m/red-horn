<script>
  export let site;
</script>

<svelte:head>
  <title>{site.title}</title>
  <link rel="icon" href={site.favicon} />
  <meta name="author" content={site.author} />
  <meta name="description" content={site.description} />
  <meta name="keywords" content={site.keywords} />
</svelte:head>
