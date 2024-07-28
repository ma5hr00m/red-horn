<script>
	import { onMount, onDestroy } from 'svelte';

	export let key;
	export let style = {};

	let node;
	let startMap = new Map();
	let root;

	onMount(() => {
		root = document.querySelector('html');
		createStyle();
	});

	function transitCloneNode(node) {
		if (!node) return;
		const { top, left } = node.getBoundingClientRect();
		Promise.resolve().then(() => {
			node.classList.add('transit-0000');
			node.style.cssText += `top:${top}px !important;left:${left}px !important;`;
			startMap.set(key, node);
			root.appendChild(node);
			clearMap();
		});
	}

	function transitMoveNode(node) {
		if (!startMap.has(key)) return;
		node.style.opacity = 0;
		const start = startMap.get(key);
		startMap.delete(key);

		const startPos = start.getBoundingClientRect();
		const nodePos = node.getBoundingClientRect();
		const moveLeft = nodePos.left - startPos.left;
		const moveTop = nodePos.top - startPos.top;

		start.style.cssText += `transform: translateX(${moveLeft + 0.0001}px) translateY(${moveTop + 0.0001}px) !important;`;
		start.classList = node.classList;
		start.classList.add('transit-0000');

		for (let h in style) {
			if (h !== 'top' && h !== 'left') {
				start.style[h] = style[h];
			}
		}

		start.ontransitionend = () => {
			node.style.opacity = '';
			start.ontransitionend = null;
			root.removeChild(start);
		};
	}

	let x = true;
	function clearMap() {
		if (x) {
			x = false;
			Promise.resolve().then(() => {
				for (let [key, val] of startMap) {
					root.removeChild(val);
					startMap.delete(key);
				}
				x = true;
			});
		}
	}

	function createStyle() {
		const text = document.createElement('style');
		text.setAttribute('type', 'text/css');
		text.innerHTML = `
      .transit-0000 {
        transition: all ease .4s !important;
        position: absolute !important;
        top: 0px;
        left: 0px;
      }
      .transit-0000 * {
        transition: all ease .4s !important;
      }
    `;
		document.querySelector('head').appendChild(text);
	}
</script>

<div bind:this={node}>
	<slot />
</div>

{#if node}
	<div use:transitMoveNode={node} />
{/if}

<style>
	.transit-0000 {
		transition: all ease 0.4s !important;
		position: absolute !important;
		top: 0px;
		left: 0px;
	}
	.transit-0000 * {
		transition: all ease 0.4s !important;
	}
</style>
