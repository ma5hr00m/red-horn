<script>
	import Icon from '@iconify/svelte';
	import ProjectCard from '$lib/components/card/ProjectCard.svelte';
	import { config } from '$lib/stores/index';
	const projectsList = $config.projectsList;
</script>

<svelte:head>
	<title>项目 | {$config.site.title}</title>
</svelte:head>

<div class="wrapper">
	<div class="content">
		{#each projectsList as project}
			<section class="group">
				<h2 style="--h-color: {project.color}">
					<Icon icon={project.icon} />
					{project.sort}
				</h2>
				<p>{project.description}</p>
				<div class="projects">
					{#each project.projects as item}
						<ProjectCard project={item} />
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		width: 100%;
		padding: 0 1rem;
		display: flex;
		justify-content: center;

		.content {
			@include mx.card(fit-content, fit-content);
			padding: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			.group {
				margin: 3rem 0 0 0;

				&:first-child {
					margin: 0;
				}

				h2 {
					font-size: 1.5rem;
					display: flex;
					align-items: center;
					gap: 0.5rem;
					color: var(--h-color);
				}

				p {
					margin: 0.75rem 0 0 0;
				}

				.projects {
					margin: 1.25rem 0 0 0;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-gap: 1rem 2rem;
					justify-content: start;
				}
			}
		}
	}
</style>
