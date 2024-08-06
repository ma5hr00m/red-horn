<script>
	import Icon from '@iconify/svelte';
	import { config } from '$lib/stores/index';

	const siteLinks = $config.siteLinks;
	const surveyList = $config.surveyList;
	const notice = $config.notice;
</script>

<div class="container">
	<div class="profileCard">
		<div class="content">
			<div class="title">
				<hgroup>
					<p>欢迎来到</p>
					<h1>菇言菇语</h1>
				</hgroup>
				<div class="avatar">
					<img src="https://q1.qlogo.cn/g?b=qq&nk=3411281455&s=160" alt="avatar" />
				</div>
			</div>
			<p>阿菇 Kinoko 的个人网站，为互联网旅人提供一个了解阿菇的窗口。主打技术内容分享，也会有旅游杂记等生活类文章，希望我的文字能让您感到有趣。</p>
		</div>
		<div class="banner"></div>
	</div>
	<div class="noticeCard">
		<p>该站点长期处于开发阶段，新功能持续添加中</p>
	</div>
</div>

<!--
<svg width="100" height="100">
    <line x1="0" y1="0" x2="0" y2="0" style="stroke:rgb(255,0,0);stroke-width:2">
        <animate attributeName="x2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
        <animate attributeName="y2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
    </line>
  </svg>
-->

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.profileCard {
		@include mx.card(64rem, 20rem);
		overflow: hidden;
		display: grid;
		grid-template-columns: 1fr 1fr;

		.content {
			padding: 0 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.title {
				display: flex;
				justify-content: space-between;
				padding: 0 .75rem 0 0;
				
				hgroup {
					p {
						font-size: 1.5rem;
						font-weight: 600;
						color: #808080;
					}
					h1 {
						font-size: 2.5rem;
						color: vr.$primary-color;
					}
				}

				.avatar {
					width: 5.25rem;
					height: 5.25rem;
					border-radius: 50%;
					overflow: hidden;

					> img {
						width: 100%;
						transform: scaleX(-1); 
					}
				}
			}

			> p {
				margin: 1rem 0 0 0;
				font-size: 1.25rem;
				color: vr.$text;
			}
		}

		.banner {
			position: relative;
			height: 100%;
			background-image: url('https://img.ma5hr00m.top/main/banner2.png');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			overflow: hidden;	
		
			&::after {
				content: '';
				z-index: 10;
				position: absolute;
				left: 0;
				top: 0;
				width: 10rem;
				height: 20rem;
				background: #ffffff;
				mask-image: linear-gradient(90deg, black 0%, transparent);
				backdrop-filter: blur(10px);
			}
		}
	}

	.noticeCard {
		padding: 2rem;
		@include mx.card(64rem, fit-content);
		@include mx.flex-center();
	}
	
	
</style>
