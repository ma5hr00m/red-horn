<script lang="ts">
  export let data: { title: string; date: string; content: any; };

  const { title, date, content } = data;
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <svelte:component this={content} />
</article>