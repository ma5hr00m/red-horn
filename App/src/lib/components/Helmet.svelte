<script lang="ts">
  import helmet from '$lib/stores/stores'; 
  $: currentHelmet = $helmet;

  let title = `${$helmet.preffixTitle} | ${$helmet.suffixTitle}`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>