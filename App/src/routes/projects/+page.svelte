<script>
  import { fly } from 'svelte/transition';
  import ProjectCard from '$lib/components/card/ProjectCard.svelte';
  export const projectsList = [
  {
    title: 'Kinoko',
    description: '个人博客框架，简洁的页面设计，以及丰富的交互动效，持续开发中。',
    cover: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/20230924231727.png',
    href: 'https://github.com/ma5hr00m/whoami',
    tags: ['SvelteKit', 'JavaScript']  
  },
  { 
    title: 'Vimage',
    description: '团队美术素材管理平台，实现图片等美术素材的线上存储、管理与共享。',
    cover: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/20230924231727.png',
    href: 'https://github.com/ma5hr00m/vimage', 
    tags: ['React', 'TypeScript', 'Gin']
  },
];
</script>

<div class="container">
  <div class="friends" in:fly={{ duration: 300, y: -1, opacity: 0 }} out:fly={{ duration: 300 }}>
    {#each projectsList as project}
      <ProjectCard {project}></ProjectCard>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    width: fit-content;
    height: fit-content;
		margin: 0 auto;
		padding: 2rem;
    background: #fff;
    color: #4f4a4a;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .5rem;
    border: solid 1px #ddd;
  }
  section {
    margin-bottom: 2rem;
  }
  .friends {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem 2rem;
    justify-content: start;
  }
</style>