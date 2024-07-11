<script>
  export let component;
  export let props;
  export let className;
</script>

<div class="card {className}">  
  <svelte:component this={component} {...props} />
</div>

<style>
  .card {
		padding: 2rem;
    background: #fff;
    color: #4f4a4a;
  }
</style>