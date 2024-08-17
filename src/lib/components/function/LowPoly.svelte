<script lang="ts">
  let logoLoading = true;
  // let logoLoading = undefined;

  $: if (logoLoading) {
    setTimeout(() => {
      logoLoading = false;
    }, 4000);
  }
</script>

<div class="low-poly">
  <div class="logo" class:logo-loading={logoLoading} class:logo-static={!logoLoading}>
    <input type="checkbox" class="toggle">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<style lang="scss">
  // 我需要一个工具将 pixso 中的数据转化为 polygon() 参数
  // 写好了 /tools/getPolygonFromPixso.py
  // 有了明确的思路之后，low poly 图案的 css 绘制过程就是重复的填数据操作了，也算是拉低门槛了 :)

  .low-poly {
    // position: relative;
    font-size: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 10rem;
    // height: 10rem;

    .logo {
      position: absolute;
      
      // width: 250em;
      // height: 280em;
      // &:has(.toggle:checked) {}

      

      // @include mx.test(vr.$hole);
      // @include mx.compose-rotate(vr.$hole);
      // @include mx.shape-static(vr.$hole);

      // @include mx.composeRemove(vr.$hole);
      // @include mx.surround(vr.$hole);
      // @include mx.shape(vr.$hole);
      // @include mx.compose(vr.$hole);

      .toggle {
        position: absolute;
        z-index: 100;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100vh;
        width: 100vw;
        opacity: 0;
        cursor: pointer;
        
        // 从 :checked 切换回 :not(:checked) 时，没有颜色过渡动画，暂时没想清楚原因
        // &:checked {}
      }

    }

    .logo-loading {
      @include mx.composeRemove(vr.$hole);
      @include mx.surround(vr.$hole);
      // @include mx.shape(vr.$hole);
      // @include mx.compose(vr.$hole);
      animation: spin 10s linear infinite;
    }
    .logo-static {
      // @include mx.composeRemove(vr.$hole);
      // @include mx.surround(vr.$hole);
      @include mx.shape(vr.$hole);
      @include mx.compose(vr.$hole);
      animation: none;
    }

    @keyframes spin {
        from {
          rotate: 0deg;
        }
        to {
          rotate: 360deg;
        }
      }
  }

  

  // span {
  //   height: 142px;
  //   width: 21px;
  //   background: red;
  //   clip-path: path('M0 0L21 98L0 142L0 0Z');
  // }

  .low-poly span {
    position: absolute;
  }

  
</style>