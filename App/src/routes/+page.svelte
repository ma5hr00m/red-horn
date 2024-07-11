<script>
  import Electrocardiogram from '$lib/components/Electrocardiogram.svelte';
</script>

<div class="container">
  <h2>Hello, here is Home!</h2>
  <div class="">
    <Electrocardiogram></Electrocardiogram>
  </div>
</div>

<style>
  .container {
		min-width: 980px;
		max-width: 980px;
		margin: 0 auto;
		padding: 2rem;
    background: #fff;
    color: #4f4a4a;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>