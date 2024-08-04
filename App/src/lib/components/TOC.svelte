<script>
	export let headings = [];

	function getIndentation(level) {
		const hasH1 = headings.some(heading => heading.level === 1);

		if (hasH1) {
			return `${(level - 1) * 1.5}rem`;
		} else {
			return `${(level - 2) * 1.5}rem`;
		}
	}

	console.log(headings);
</script>

<aside class="toc">
	<h2>目录</h2>
	<hr class="line" />
	<ul>
		{#each headings as { id, text, level }}
			<li style="padding-left: {getIndentation(level)};">
				<a href={`#${id}`}>{text}</a>
			</li>
		{/each}
	</ul>
</aside>

<style lang="scss">
	.toc {
		position: sticky;
		top: 1rem;
		height: fit-content;
		width: 15rem;
		padding: 1rem;
		background: vr.$card;
		border: 1px solid vr.$card-border;
		border-radius: .25rem;
		font-size: .9rem;

		.line {
			margin: .5rem 0 .75rem;
		}

		ul {
			list-style: none;
		}

		li {
			margin: .5rem 0;

			&:first-child {
				margin: 0;
			}
		}

		a {
			color: vr.$text;
			transition: color .3s;

			&:hover {
				color: vr.$primary-color;
			}
		}
	}

	.toc a:hover {
		text-decoration: underline;
	}
</style>