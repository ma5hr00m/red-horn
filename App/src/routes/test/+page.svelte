<script>
  import { fade } from 'svelte/transition';
  let visible = true;
</script>

<button on:click={() => visible = !visible}>
  Toggle
</button>

{#if visible}
  <div transition:fade>
    This element will fade in and out
  </div>
{/if}