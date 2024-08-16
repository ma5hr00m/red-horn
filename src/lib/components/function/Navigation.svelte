<script lang="ts">
	import { page } from '$app/stores';
	import { config } from '$lib/context/index';
  import Github from '$lib/assets/icons/github.svg';

  const projectConfig: any = $config;
</script>

<!-- 使用语义化标签是更好的选择，但我选择div一把梭 :) -->
<div class="navigaion">
  <div class="content">
    <nav>
      {#each projectConfig.routes as route}
        <a href={route.href} aria-current={$page.url.pathname === route.href ? 'page' : null}>
          <!-- <div class="iconContainer">
            <Icon icon={route.icon} />
          </div> -->
          {route.title}
        </a>
      {/each}
    </nav>
    <!-- <hr class="vertical-line"/>
    <div class="social-links">
      {#each  projectConfig.siteLinks as siteLink}
        <a href={siteLink.url}>
          <div class="iconContainer">
          </div>
        </a>
      {/each}
    </div> -->
  </div>
  <div class="summary">
  </div>
</div>

<style lang="scss">
  .navigaion {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: vr.$max-width;
    // padding: 1rem 0;

    // 常用内容
    .content {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      height: vr.$header-height;
      padding: 0 2rem;
      // border-radius: 10rem;
      // border: 2px solid vr.$pen;
      // background-color: #ffffff;

      // @include md.respond-to('small') {
      //   display: none;
      // }

      nav {
        display: flex;
        column-gap: 2rem;

        a {
          position: relative;
          display: flex;
          column-gap: .25rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: vr.$pen;
          transition: all .3s;

          // .iconContainer {
          //   display: flex;
          //   align-items: center;
          // }

          &::after {
            position: absolute;
            content: '';
            height: 2px;
            width: 0;
            left: 50%;
            bottom: -3px;
            background-color: vr.$pen;
            transform: translateX(-50%);
            transition: all .3s;
          }

          &:hover::after {
            width: 120%;
          }
        }

        a[aria-current='page'] {
          color: vr.$theme-color;

          &::after {
            position: absolute;
            content: '';
            height: 2px;
            width: 120%;
            left: 50%;
            bottom: -3px;
            background-color: vr.$theme-color;
            transition: all .3s;
          }
        }
      }

      .vertical-line {
        width: 1px;
        height: 1.5rem;
        background-color: vr.$text-darken-color;
      }

      .social-links {
        display: flex;
        column-gap: 1rem;

        a {
          color: vr.$text-color;
          font-size: 1.25rem;

          .iconContainer {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    // 移动端内容
    .summary {
      @include md.respond-to('large') {
        display: none;
      } 
      @include md.respond-to('medium') {
        display: none;
      } 
      @include md.respond-to('small') {
        display: flex;
      }
    }
  }
</style>