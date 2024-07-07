<script>
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';

  export let socialLink = {
    icon: "iconoir:link",
    title: "Link",
    link: "#",
  };

  let titleElement;
  let titleWidth = 0;

  onMount(() => {
    titleWidth = titleElement.offsetWidth;
  });
</script>

<div class="socialLink">
  <a class="link" href={socialLink.link} alt={socialLink.title}>
    <div class="linkContent">
      <Icon icon={socialLink.icon} inline={true} style="font-size: 1.5rem;" />
      <div class="titleContainer" style="--title-width: {titleWidth}px;">
        <span class="title" bind:this={titleElement}>{socialLink.title}</span>
      </div>
    </div>
  </a>
</div>

<style lang="scss">
  .socialLink {
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: #666;
    border-radius: .5rem;
    overflow: hidden;
    transition: background-color 0.3s;
  }
  .socialLink:hover {
    background-color: #EFB621;
  }
  .link {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
  }
  .linkContent {
    display: flex;
    align-items: center;
    margin: 1rem;
  }
  .titleContainer {
    width: 0;
    overflow: hidden;
    transition: width .3s;
  }
  .title {
    font-size: 1rem;
    padding-left: .5rem;
    letter-spacing: 1px;
  }
  .link:hover .titleContainer {
    width: var(--title-width);
  }
</style>
