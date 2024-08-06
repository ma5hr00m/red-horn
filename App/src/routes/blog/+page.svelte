<script>
	import Icon from '@iconify/svelte';

	export let data;

	// console.log(data.posts[0].meta)
</script>

<div class="container">
	<ul>
		{#each data.posts as post}
			<li class="card">
					<a href={post.path} class="articleLink">
						<div class="articleMeta">
							<hgroup>
								<h3>
									<span class="title">{post.meta.title}</span>
								</h3>
								<p class="snippet">
									{post.snippet}
								</p>
							</hgroup>
							<div class="metadata">
								<span class="author">
									<span class="icon">
										<Icon icon="material-symbols:account-box" />
									</span>
									{post.meta.author}
								</span>
								<span class="time">
									<span class="icon">
										<Icon icon="material-symbols:clarify" />
									</span>
									{post.meta.date}
								</span>
								<span class="category">
									<span class="icon">
										<Icon icon="material-symbols:book-2-rounded" />
									</span>
									{post.meta.categories}
								</span>
							</div>
						</div>
						<div class="articleCover">
							<img class="cover" src={post.meta.cover} alt={post.meta.title} />
						</div>
					</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.container {
		width: fit-content;
		height: fit-content;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		@include mx.card();
	}
	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		overflow: hidden;

		> li {
			border-top: 1px solid vr.$card-border;
		}

		> li:first-child { 
			border-top: none; 
		}
	}

	.card {
		height: fit-content;
		transition: all 0.3s;

		&:hover {
			background: vr.$card-hover;
		}

		.articleLink {
			padding: 2rem;
			display: flex;
			justify-content: space-between;
			column-gap: 1.5rem;

			&:hover .articleCover img {
				scale: 1.2;
			}

			// TEXT
			.articleMeta {
				width: 36rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				hgroup {
					h3 {
						.title {
							color: vr.$text;
							font-size: 2.5rem;
							position: relative;
							font-size: 1.5rem;
							&::after {
								content: '';
								display: block;
								position: absolute;
								bottom: -.25rem;
								left: 0;
								width: 0;
								height: 2px;
								background-color: vr.$primary-color;
								transition: width 0.3s;
							}
							&:hover::after {
								width: 100%;
							}
						}
					}

					.snippet {
						color: vr.$text-snippet;
						margin: .5rem 0 0 0;
						font-size: 1rem;
						line-height: 1.5rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
						line-clamp: 3;
					}
				}

				.metadata {
					display: flex;
					column-gap: 1rem;

					> span {
						display: flex;
						align-items: center;
						column-gap: .25rem;

						> .icon {
							display: flex;
							align-items: center;
						}
					}

					

					> .time {
						color: vr.$primary-color;
						font-weight: 600;
					}
					> .author {
						color: vr.$primary-color;
						font-weight: 600;
					}
					.category {
						color: vr.$primary-color;
						font-weight: 400;	
					} 
				}
			}

			// IMAGE
			.articleCover {
				height: 9rem;
				width: 15rem;
				border-radius: 0.25rem;
				overflow: hidden;
				border: solid 1px vr.$card-border;
				background-color: vr.$image-background;

				> img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: scale .3s ease-in-out;
				}
			}
		}
	}
</style>
