<script lang="ts">
	import { logoAnime } from "$lib/context/index";

	// console.log($logoAnime);
	$: if ($logoAnime) {
		setTimeout(() => {
			logoAnime.set(false);
		}, 4000);
	}
</script>

<div class="low-poly">
	<div class="logo" class:logo-loading={$logoAnime} class:logo-static={!$logoAnime}>
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
		// 该组件的定位会成为一个较为麻烦的问题
		position: relative;
		height: 22rem;
		width: 20rem;
		font-size: 0.08rem;
		display: flex;
		justify-content: center;
		align-items: center;
		// transform: translateY(-5rem);

		.logo {
			position: absolute;

			// width: 250em;
			// height: 280em;
			// &:has(.toggle:checked) {}

			// @include mx.test(vr.$horn);
			// @include mx.compose-rotate(vr.$horn);
			// @include mx.shape-static(vr.$horn);

			// @include mx.composeRemove(vr.$horn);
			// @include mx.surround(vr.$horn);
			// @include mx.shape(vr.$horn);
			// @include mx.compose(vr.$horn);

			// .toggle {
			//   position: absolute;
			//   z-index: 100;
			//   left: 50%;
			//   top: 50%;
			//   transform: translate(-50%, -50%);
			//   height: 100vh;
			//   width: 100vw;
			//   opacity: 0;
			//   cursor: pointer;

			//   // 从 :checked 切换回 :not(:checked) 时，没有颜色过渡动画，暂时没想清楚原因
			//   // &:checked {}
			// }
		}

		.logo-loading {
			@include mx.composeRemove(vr.$horn);
			@include mx.surround(vr.$horn);
			// @include mx.shape(vr.$horn);
			// @include mx.compose(vr.$horn);

			& {
				animation: spin 10s linear infinite;
			}
		}
		.logo-static {
			// @include mx.composeRemove(vr.$horn);
			// @include mx.surround(vr.$horn);
			@include mx.shape(vr.$horn);
			@include mx.compose(vr.$horn);

			& {
				animation: none;
			}
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
