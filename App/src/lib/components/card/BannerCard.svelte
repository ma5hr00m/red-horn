<script>
  export let site;
</script>

<div class="bannerCard">
  <div class="content">
    <div class="title">
      <hgroup>
        <p>{site.subTitle}</p>
        <h1>{site.title}</h1>
      </hgroup>
      <div class="avatar">
        <img src={site.avatar} alt="avatar" />
      </div>
    </div>
    <p>{site.welcome}</p>
  </div>
  <div class="banner"></div>
</div>

<style lang="scss">
  .bannerCard {
		width: 100%;
		max-width: 64rem;
		overflow: hidden;
		
		@include md.respond-to('large') {
			display: grid;
			grid-template-columns: 1fr 1fr;
			@include mx.card(100%, 20rem);
		}
		@include md.respond-to('medium') {
			display: grid;
			grid-template-columns: 1fr 1fr;
			@include mx.card(100%, fit-content);
		}
		@include md.respond-to('small') {
			display: grid;
			grid-template-rows: 1fr 1fr;
			@include mx.card(100%, fit-content);
		}

		.content {
			padding: 3rem 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.title {
				display: flex;
				justify-content: space-between;
				padding: 0 0.75rem 0 0;

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
			background-image: url('https://img.ma5hr00m.top/main/banner2.png');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			overflow: hidden;

			
			@include md.respond-to('large') {
				height: 100%;
			}
			@include md.respond-to('medium') {
				height: 100%;
			}
			@include md.respond-to('small') {
				height: 20rem;
			}

			&::after {
				content: '';
				z-index: 10;
				position: absolute;
				left: 0;
				top: 0;
				background: #ffffff;
				backdrop-filter: blur(1rem);

				@include md.respond-to('large') {
					width: 10rem;
					height: 100%;
					mask-image: linear-gradient(to right, black 0%, transparent);
				}
				@include md.respond-to('medium') {
					width: 8rem;
					height: 100%;
					mask-image: linear-gradient(to right, black 0%, transparent);
				}
				@include md.respond-to('small') {
					width: 100%;
					height: 6rem;
					mask-image: linear-gradient(to bottom, black 0%, transparent);
				}
			}
		}
	}
</style>