<script lang="ts">
  import { helmet } from '$lib/stores/stores'; 
  $: currentHelmet = $helmet;
</script>

<svelte:head>
  <title>{currentHelmet.title}</title>
</svelte:head>