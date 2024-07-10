<script lang="ts">
  export let items = {
    'Home': '/home',
    'About': '/about',
    'Archive': '/archive',
    'Projects': '/projects',
  };
</script>

<nav>
  <ul>
    {#each Object.entries(items) as [name, link]}
      <li>
        <a href={link}>{name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }
    li {
      margin-right: 1em;
    }
  }
</style>