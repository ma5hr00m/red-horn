<script lang="ts">
  import LowPoly from '$lib/components/function/LowPoly.svelte';
import { config } from '$lib/context/index';

  const projectConfig: any = $config;
</script>

<svelte:head>
	<title>主页 | {projectConfig.site.title}</title>
</svelte:head>

<div class="wrapper">
  <div class="content">
    <!-- <h1>Hello, world!</h1> -->
    <LowPoly></LowPoly>
    <!-- <hgroup>
    </hgroup> -->
    <!-- <div class="socialLinks">
        {#each projectConfig.socialLinks as socialLink}
          <a href={socialLink.url}>
            {socialLink.title}
          </a>
        {/each}
    </div> -->
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 4.5rem);
    padding: 2rem;
    @include mx.flex-center();
  }

  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    hgroup {
      h1 {
        color: #4a4040;
        font-size: 4rem;
        font-weight: 600;
        text-wrap: nowrap;
        text-shadow: 0 2px 4px #a0a0a0;
        transition: all .3s;
        cursor: pointer;
        
        &:hover {
          color: vr.$theme-color;
          transform: translateY(-1rem);
        }
      }

      // p {
      //   background-color: red;
      //   width: 10rem;
      //   height: 10rem;
      //   clip-path: path('M21 98L36 146L0 142L21 98Z');
      // }
    }

    
    .socialLinks {
      margin-top: 2rem;
      @include mx.flex-center();
      gap: 1rem;

      a {
        position: relative;
        font-size: 1.25rem;
        color: #7b7575;
        transition: all .3s;

        &:hover {
          color: vr.$theme-color;
        }

        &::after {
          position: absolute;
          content: '';
          left: 50%;
          bottom: -1.5rem;
          opacity: 0;
          transform: translateX(-50%);
          border: .5rem solid;
          border-color: transparent transparent vr.$theme-color transparent;
          transition: all .3s;
        }

        &:hover::after {
          bottom: -.75rem;
          opacity: 1;
        }
      }
    }
  }
</style>