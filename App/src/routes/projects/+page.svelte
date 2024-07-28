<script>
	import ProjectCard from '$lib/components/card/ProjectCard.svelte';
	import { config } from '$lib/stores/index';
	const projectsList = $config.projectsList;
</script>

<div class="container">
	<div class="content">
		{#each projectsList as project}
			<section class="group">
				<h2>{project.sort}</h2>
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

<!--
  background: #ddd;
  
-->

<style lang="scss">
	.container {
		width: fit-content;
		height: fit-content;
		padding: 2rem;
		background: #fff;
		color: #4f4a4a;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 0.5rem;
		border: solid 1px #ddd;

		.content {
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
