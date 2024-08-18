<script lang="ts">
	import LowPoly from '$lib/components/function/LowPoly.svelte';
	import { config, logoAnime } from '$lib/context/index';

	const projectConfig: any = $config;
</script>

<svelte:head>
	<title>主页 | {projectConfig.site.title}</title>
</svelte:head>

<div class="wrapper">
	<div class="content">
		<LowPoly></LowPoly>
    <div class="profile" class:load={!$logoAnime}>
      <h2>
        <span class="red">R</span>ED <span class="red">H</span>ORN</h2>
      <p>KINOKO'S PERSONAL WEBSITE</p>
    </div>
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
		min-height: calc(100vh - 9rem);
		padding: 2rem;
		@include mx.flex-center();
	}

	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

    .profile {
      opacity: 0;
      text-align: center;

      h2 {
        margin-top: 2rem;
        font-size: 2.5rem;
        font-weight: 600;
        color: #3C3C3C;

        .red {
          color: #e91111;
        }
      }

      p {
        // margin-top: .5rem;
        font-size: 1.25rem;
        font-weight: 400;
        color: #4C4C4C;
      }
    }

    .load {
      animation: fade-in 0.6s linear forwards;
    }

		@keyframes fade-in {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

		// .socialLinks {
		//   margin-top: 3rem;
		//   @include mx.flex-center();
		//   gap: 1rem;

		//   a {
		//     position: relative;
		//     font-size: 1.25rem;
		//     color: #7b7575;
		//     transition: all .3s;

		//     &:hover {
		//       color: vr.$theme-color;
		//     }

		//     &::after {
		//       position: absolute;
		//       content: '';
		//       left: 50%;
		//       bottom: -1.5rem;
		//       opacity: 0;
		//       transform: translateX(-50%);
		//       border: .5rem solid;
		//       border-color: transparent transparent vr.$theme-color transparent;
		//       transition: all .3s;
		//     }

		//     &:hover::after {
		//       bottom: -.75rem;
		//       opacity: 1;
		//     }
		//   }
		// }
	}
</style>
