<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	export let socialLink = {
		icon: 'iconoir:link',
		title: 'Link',
		link: '#'
	};

	let titleElement;
	let titleWidth = 0;

	onMount(() => {
		titleWidth = titleElement.offsetWidth;
	});
</script>

<div class="socialLink">
	<a class="link" href={socialLink.link} alt={socialLink.title}>
		<div class="linkContent">
			<Icon icon={socialLink.icon} inline={true} style="font-size: 1.5rem;" />
			<div class="titleContainer" style="--title-width: {titleWidth}px;">
				<span class="title" bind:this={titleElement}>{socialLink.title}</span>
			</div>
		</div>
	</a>
</div>
