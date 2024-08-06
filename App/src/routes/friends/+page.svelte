<script>
	import { config } from '$lib/stores/index';

	const friendsList = $config.friendsList;
	console.log(friendsList);
</script>

<div class="container">
	<ul>
		{#each friendsList as friend}
			<li class="card">
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
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		list-style: none;
		width: fit-content;
	}

	.card {
		width: fit-content;
		height: fit-content;
	
		.link {
			@include mx.flex-center(column);
			@include mx.card(14rem, 14rem);
			padding: 1.5rem;
			transition: all .3s ease-in-out;

			&:hover {
				transform: translateY(-.5rem);
				background: vr.$card-hover;
				border-color: vr.$primary-color;
			}

			&:hover .text .descriptionAndHref .description {
				opacity: 0;
				-webkit-filter: blur(1.5rem);
			}

			&:hover .text .descriptionAndHref .href {
				opacity: 1;
				-webkit-filter: blur(0);
			}
			
			.image {
				height: 4rem;
				width: 4rem;
				border-radius: 50%;
				box-shadow: 0 2px .25rem 0 #aaa;
				@include mx.flex-center();
				overflow: hidden;

				.avatar {
					width: 100%;
					height: 100%;
				}
			}

			.text {
				margin: .5rem 0 0 0;
				@include mx.flex-center(column);

				p {
					text-align: center;
				}

				.name {
					font-size: 1.25rem;
					font-weight: 600;
				}

				.tag {
					margin: .25rem 0 0 0;
					background-color: var(--tag-color);
					color: #fff;
					text-wrap: nowrap;
					font-size: .75rem;
					padding: .125rem .75rem;
					border-radius: 10rem;
				}

				.descriptionAndHref {
					position: relative;
					margin: .75rem 0 0 0;
					color: #808080;

					span {
						transition: filter .5s ease-in-out;
					}

					.description {
					}

					.href {
						color: vr.$primary-color;
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
