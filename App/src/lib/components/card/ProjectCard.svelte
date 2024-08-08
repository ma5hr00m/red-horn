<script>
	export let project;
</script>

<div class="card">
	<a class="link" href={project.href}>
		<div class="image">
			<img class="cover" src={project.cover} alt={project.name} />
		</div>
		<div class="text">
			<h3 class="title">{project.title}</h3>
			<p class="description">{project.description}</p>
			<!--
        渲染项目技术栈列表，暂时没想好卡片怎么设计好看，暂时搁置
        <div class="tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      -->
		</div>
	</a>
</div>

<style lang="scss">
	.card {
		height: fit-content;
		border: 1px solid vr.$card-border;
		border-radius: 0.25rem;
		transition: all 0.3s;
		padding: 1rem;

		&:hover {
			background: vr.$card-hover;
			border-color: vr.$primary-color;
		}

		&:hover .image .cover {
			height: 120%;
		}

		.image {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 9rem;
			width: 16rem;
			background: vr.$image-background;
			border-radius: 0.25rem;
			border: 1px solid #ccc;
			overflow: hidden;

			.cover {
				transition: all 0.3s ease-in-out;
				height: 100%;
			}
		}

		// 元素上下排布时，元素垂直间距应该通过父元素指定；
		// 否则应该由处于下方的元素指定，这样方便后续元素的添加 :)
		.text {
			color: vr.$text;
			overflow: hidden;
			text-overflow: ellipsis;
			margin: 0.75rem 0 0 0;
		}
		h3 {
			font-size: 1rem;
		}
		.description {
			color: vr.$text-snippet;
			width: 16rem;
			min-height: 3.6rem; // 2行文本的高度
			margin: 0.25rem 0 0 0;
			font-size: 0.8rem;
			line-height: 1.2rem;

			/* 无法确定的文本内容可能对我们的内容造成影响， */
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			line-clamp: 3;
		}
	}
</style>
