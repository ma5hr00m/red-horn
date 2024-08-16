<script>
	export let friend;
</script>

<div class="card">
	<a class="link" href={friend.href}>
		<div class="image">
			<img class="avatar" src={friend.avatar} alt={friend.name} />
		</div>
		<div class="text">
			<p class="name">{friend.name}</p>
			<p class="tag" style="--tag-color: {friend.color}">{friend.tag}</p>
			<p class="descriptionAndHref">
				<span class="description">{friend.description}</span>
				<span class="href">{friend.href.replace(/^https?:\/\//i, '')}</span>
			</p>
		</div>
	</a>
</div>

<style lang="scss">
	.card {
		width: fit-content;
		height: fit-content;

		.link {
			@include mx.flex-center(column);
			@include mx.card(12rem, 12rem);
			padding: 1.5rem;
			transition: all 0.3s ease-in-out;
			// border-top: .5rem solid #fff;

			&:hover {
				transform: translateY(-0.5rem);
				background: vr.$card-hover;
				border-color: vr.$theme-color;
			}

			&:hover .text .descriptionAndHref .description {
				opacity: 0;
				-webkit-filter: blur(1.5rem);
			}

			&:hover .text .descriptionAndHref .href {
				opacity: 1;
				-webkit-filter: blur(0);
			}
			
			&:hover .text .tag {
				background: vr.$theme-color;
			}

			.image {
				height: 3rem;
				width: 3rem;
				border-radius: 50%;
				@include mx.flex-center();
				overflow: hidden;

				.avatar {
					width: 100%;
					height: 100%;
				}
			}

			.text {
				margin: 0.5rem 0 0 0;
				@include mx.flex-center(column);

				p {
					text-align: center;
				}

				.name {
					font-size: 1.125rem;
					font-weight: 600;
					transition: all .5s;
				}

				.tag {
					margin: 0.25rem 0 0 0;
					// background-color: var(--tag-color);
					background-color: #a0a0a0;
					color: #fff;
					text-wrap: nowrap;
					font-size: 0.625rem;
					padding: 0.125rem 0.75rem;
					border-radius: 10rem;
					transition: all .5s;
				}

				.descriptionAndHref {
					position: relative;
					margin: 0.75rem 0 0 0;
					color: #a0a0a0;

					span {
						transition: filter 0.5s ease-in-out;
					}

					.description {
						font-size: .875rem;
					}

					.href {
						font-size: .875rem;
						color: vr.$theme-color;
						opacity: 0;
						-webkit-filter: blur(1rem);
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
</style>
