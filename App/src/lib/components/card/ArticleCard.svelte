<script>
	import Trans from '$lib/components/trans/Trans.svelte';
  export let post;
</script>

<div class="card">
  <a href={post.path} class="link">
    <div class="image">
      <img class="cover" src={post.meta.cover} alt={post.meta.title} />
    </div>
    <div class="text">
      <h3>
        <span class="title">{post.meta.title}</span>
      </h3>
      <p class="metadata">
        <span class="time">{post.meta.date}</span>
        <span class="cateegory">{post.meta.categories}</span>
      </p>
      <p class="snippet">{post.snippet}</p>
    </div>
  </a>
</div>

<style lang="scss">
  .card {
    height: fit-content;
    border-radius: .5rem;
    border: solid 1px #ddd;
    background: #fafafa;
    transition: all .3s;

    &:hover {
      background: #f0f0f0;
      border: solid 1px #bbb;
    }
  }
  .link {
    padding: .75rem;
    display: flex;
    column-gap: 1.5rem;
    color: #444;
  }
	.image {
    height: 10rem;
    width: 16rem;
    border-radius: .5rem;
    overflow: hidden;
    border: solid 1px #ddd;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
	}
  h3 {
    margin-bottom: .25rem;

    & > .title {
      position: relative;
      font-size: 1.5rem;
      color: #95d146;
      
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #95d146;
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }

  }

  .metadata {
    margin-bottom: .25rem;
  }
  .snippet {
    line-height: 1.5rem;
    width: 32rem;
    color: #888;
  }
</style>