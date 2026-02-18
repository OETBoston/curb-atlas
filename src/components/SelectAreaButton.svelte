<script>
	import SelectArea from '../icons/SelectArea.svelte';
	import { mapState, selectedAreaState } from '../state.svelte';

	let buttonActive = $state(selectedAreaState?.type === 'area' && !!selectedAreaState.selected);

	const updateArea = (v) => {
		selectedAreaState.selected = v?.features?.[0];
		selectedAreaState.type = 'area';
	};

	const startDraw = () => {
		if (selectedAreaState?.selected) return;
		buttonActive = true;
		mapState.isDrawing = true;
		mapState.map.dragPan.disable();
		mapState.draw.changeMode('draw_drag_rectangle');
		mapState.map.on('draw.create', (v) => {
			updateArea(v);
			mapState.isDrawing = false;
			mapState.map.dragPan.enable();

			// Delete because we will use the bounding box to draw something to the map
			const data = mapState.draw.deleteAll();
		});
	};

	$effect(() => {
		if (selectedAreaState.type !== 'area' || !selectedAreaState.selected) {
			buttonActive = false;
		}
	});
</script>

<div class="select-area-button-container">
	<button
		aria-label="Select area by selection"
		class={[
			'select-area-button',
			{ active: buttonActive, disabled: selectedAreaState.type === 'radius' }
		]}
		onclick={startDraw}
	>
		<div class="select-area-icon-container area">
			<SelectArea />
		</div>
	</button>
	<div class="select-area-button-label">Select by area</div>
</div>

<style lang="scss">
	.select-area-button-container {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.select-area-button {
		background-color: var(--support-gray-1);
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		&:focus {
			background-color: var(--support-gray-1-hover);
		}

		&:hover {
			background-color: var(--support-gray-1-hover);
		}

		&.active {
			background-color: var(--support-blue-1);
		}

		&.disabled {
			pointer-events: none;
			background-color: var(--support-gray-3);
		}
	}

	.select-area-button-label {
		color: var(--white);
		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-medium);
	}

	.select-area-icon-container {
		width: 100%;
		height: 100%;

		// Trying to keep these looking right despite shapes
		&.area {
			padding: 0.5rem;
		}

		:global(svg) {
			width: 100%;
			height: 100%;

			:global(path) {
				fill: var(--charles-blue);
			}
		}
	}
</style>
