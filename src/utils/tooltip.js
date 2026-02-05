import { computePosition, autoUpdate, flip, shift, offset } from '@floating-ui/dom';

export function tooltip(node, content) {
	if (!content) return;

	let tooltipNode;
	let cleanup;

	function update(newContent) {
		content = newContent;
		if (tooltipNode) {
			tooltipNode.textContent = content;
		}
	}

	function handleMouseEnter() {
		tooltipNode = document.createElement('div');
		tooltipNode.textContent = content;
		tooltipNode.classList.add('simple-tooltip'); // Add a CSS class for styling
		document.body.appendChild(tooltipNode);

		// Position the tooltip
		cleanup = autoUpdate(node, tooltipNode, () => {
			computePosition(node, tooltipNode, {
				placement: 'top', // or 'bottom', 'left', 'right'
				middleware: [offset(8), flip(), shift()]
			}).then(({ x, y }) => {
				Object.assign(tooltipNode.style, {
					left: `${x}px`,
					top: `${y}px`
				});
			});
		});
	}

	function handleMouseLeave() {
		if (cleanup) cleanup();
		if (tooltipNode) {
			tooltipNode.remove();
		}
	}

	node.addEventListener('mouseenter', handleMouseEnter);
	node.addEventListener('mouseleave', handleMouseLeave);

	return {
		update,
		destroy() {
			node.removeEventListener('mouseenter', handleMouseEnter);
			node.removeEventListener('mouseleave', handleMouseLeave);
			if (cleanup) cleanup();
			if (tooltipNode) {
				tooltipNode.remove();
			}
		}
	};
}
