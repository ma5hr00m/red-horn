<script lang="ts">
  import '$lib/styles/_base.scss';
  import Navigation from '$lib/components/function/Navigation.svelte';
</script>


<div id="kinoko_app">
  <div class="aside-wrapper"></div>
  <div class="main-wrapper">
    <div class="bg"></div>
    <div class="bg-deco"></div>
    <header>
      <div class="header-bar">
        <Navigation></Navigation>
      </div>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</div>


<style lang="scss">
  #kinoko_app {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    .main-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 100vh;

      .bg {
        z-index: 0;
        @include mx.iron();
        // @include mx.dotted-grid-pattern($grid-size: 10px, $dot-color: #a0a0a0);
      }

      .bg-deco {
        // z-index: 1;
        // @include mx.iron-deco();

        // @include md.respond-to('medium') {
        //   display: none;
        // }

        // @include md.respond-to('small') {
        //   display: none;
        // }
      }

      header {
        z-index: 10;
        position: relative;
        width: 100%;

        .header-bar {
          display: flex;
          justify-content: center;
          padding: 0 2rem;
        }
      }
    }
  }
</style>