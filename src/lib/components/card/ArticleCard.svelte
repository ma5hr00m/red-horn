<script>
	import Icon from '@iconify/svelte';

	export let post;
</script>

<div class="card">
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
						<Icon icon="material-symbols:edit-square-outline-sharp" />
					</span>
					{post.meta.author}
				</span>
				<span class="time">
					<span class="icon">
						<Icon icon="material-symbols:edit-calendar-outline-sharp" />
					</span>
					{post.meta.date}
				</span>
				<span class="category">
					<span class="icon">
						<Icon icon="material-symbols:category-outline" />
					</span>
					{post.meta.categories}
				</span>
			</div>
		</div>
		<div class="articleCover">
			<img class="cover" src={post.meta.cover} alt={post.meta.title} />
		</div>
	</a>
</div>

<style lang="scss">
	.card {
		@include mx.card(100%, fit-content);
		border-left: 0.5rem solid vr.$card;
		height: fit-content;
		transition: all 0.3s;

		&:hover {
			background: vr.$card-hover;
			border-color: vr.$theme-color;
		}

		.articleLink {
			padding: 2rem;

			@include md.respond-to('large') {
				display: flex;
				justify-content: space-between;
				column-gap: 1.5rem;
			}

			@include md.respond-to('medium') {
				display: flex;
				flex-direction: column;
				row-gap: 1.5rem;
			}
			@include md.respond-to('small') {
				display: flex;
				flex-direction: column;
				row-gap: 1.5rem;
			}

			&:hover .articleCover img {
				scale: 1.2;
			}

			&:hover .articleMeta .metadata .category,
			&:hover .articleMeta .metadata .author,
			&:hover .articleMeta .metadata .time {
				color: vr.$theme-color;
			}

			.articleMeta {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				@include md.respond-to('large') {
					width: 36rem;
				}

				@include md.respond-to('medium') {
					width: auto;
				}

				@include md.respond-to('small') {
					width: 100%;
				}

				hgroup {
					h3 {
						.title {
							color: vr.$text;
							font-size: 1.5rem;
							position: relative;

							&::after {
								content: '';
								display: block;
								position: absolute;
								bottom: -0.25rem;
								left: 0;
								width: 0;
								height: 2px;
								background-color: vr.$theme-color;
								transition: width 0.3s;
							}

							&:hover::after {
								width: 100%;
							}
						}
					}

					.snippet {
						color: vr.$text-snippet;
						margin: 0.5rem 0 0;
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
					column-gap: 1.5rem;

					> span {
						display: flex;
						align-items: center;
						column-gap: 0.325rem;
						text-wrap: nowrap;

						> .icon {
							display: flex;
							align-items: center;
						}
					}

					> .time,
					> .author,
					.category {
						color: #fff;
						font-weight: 400;
						transition: all 0.3s;
					}
				}
			}

			.articleCover {
				overflow: hidden;
				border: solid 1px vr.$card-border;
				background-color: vr.$image-background;

				@include md.respond-to('large') {
					height: 9rem;
					width: 15rem;
					min-width: 15rem;
				}

				@include md.respond-to('medium') {
					height: 9rem;
					width: 15rem;
					min-width: 15rem;
				}

				@include md.respond-to('small') {
					height: 12rem;
					width: 100%;
				}

				> img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: scale 0.3s ease-in-out;
				}
			}
		}
	}
</style>
