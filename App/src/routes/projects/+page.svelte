<script>
  import ProjectCard from '$lib/components/card/ProjectCard.svelte';
  export const projectsList = [
  {
    "sort": "个人项目",
    "description": "这里是我个人的一些项目，包括博客、工具等等。",
    "projects": [
      {
        title: 'Kinoko',
        description: '个人博客框架，简洁的页面设计，以及丰富的交互动效，持续开发中。重复性语段，重复性语段，重复性语段，重复性语段，重复性语段，重复性语段，重复性语段，重复性语段，重复性语段，。',
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
      { 
        title: 'Vimage',
        description: '团队美术素材管理平台，省略文本。',
        cover: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/20230924231727.png',
        href: 'https://github.com/ma5hr00m/vimage', 
        tags: ['React', 'TypeScript', 'Gin']
      },
    ]
  },
  {
    "sort": "合作项目",
    "description": "这里是我参与的一些项目，包括团队项目、开源项目等等。",
    "projects": [
      {
        title: 'K',
        description: '个人博客框架，简洁的页面设计，以及丰富的交互动效，持续开发中。',
        cover: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/20230924231727.png',
        href: 'https://github.com/ma5hr00m/whoami',
        tags: ['SvelteKit', 'JavaScript']  
      },
      { 
        title: 'V',
        description: '团队美术素材管理平台，实现图片等美术素材的线上存储、管理与共享。',
        cover: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/20230924231727.png',
        href: 'https://github.com/ma5hr00m/vimage', 
        tags: ['React', 'TypeScript', 'Gin']
      },
      { 
        title: 'Vimage',
        description: '团队美术素材管理平台，实现图片等美术素材的线上存储、管理与共享。',
        cover: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/20230924231727.png',
        href: 'https://github.com/ma5hr00m/vimage', 
        tags: ['React', 'TypeScript', 'Gin']
      },
      { 
        title: 'Vimage',
        description: '团队美术素材管理平台，实现图片等美术素材的线上存储、管理与共享。',
        cover: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/20230924231727.png',
        href: 'https://github.com/ma5hr00m/vimage', 
        tags: ['React', 'TypeScript', 'Gin']
      },
    ]
  }
];
</script>

<div class="container">
  <div class="content">
    {#each projectsList as project}
      <section class="group">
        <h2>{project.sort}</h2>
        <p>{project.description}</p>
        <div class="projects">
          {#each project.projects as item}
            <ProjectCard project={item}/>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    width: fit-content;
    height: fit-content;
		padding: 2rem;
    background: #fff;
    color: #4f4a4a;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .5rem;
    border: solid 1px #ddd;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .group {
        margin: 3rem 0 0 0;
        
        &:first-child {
          margin: 0;
        }

        h2 {
          font-size: 1.5rem;
        }

        p {
          margin: .75rem 0 0 0;
        }

        .projects {
          margin: 1.25rem 0 0 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1rem 2rem;
          justify-content: start;
        }
      }
    }
  }
</style>

<!--
  background: #ddd;
  
-->