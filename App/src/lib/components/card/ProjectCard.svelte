<script>
  export let project;
  let showUrl = false;
</script>

<div class="card">
  <a class="link" href={project.href} 
     on:mouseover={() => showUrl = true} 
     on:mouseout={() => showUrl = false}
     on:focus={() => showUrl = true} 
     on:blur={() => showUrl = false}>
    <div class="image">
      <img class="cover" src={project.cover} alt={project.name}>
    </div>
    <div class="text">
      <h3 class="title">{project.title}</h3>
      <p class="description">{project.description}</p>
      <div class="tags">
        {#each project.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>
  </a>
</div>

<style lang="scss">
  .card {
    width: 22rem;
    height: fit-content;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .5rem;
    transition: all .3s;

    &:hover {
      scale: 1.05;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
  }
  .cover {
    height: 11.25rem;
    width: 20rem;
    border-radius: .5rem;
  }
  .text {
    color: #404040;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 .5rem;
  }
  .description {
    margin-bottom: .5rem;
  }
  .tags {
    display: flex;
    gap: 1rem
  }
  .tag {
    background: #fff;
    border-radius: 10rem;
    padding: .25rem 1rem;
    font-size: .75rem;
    border: 1px solid #ccc;
    transition: all .3s;

    &:hover {
      background-color: #ddd;
    }
  }

</style>