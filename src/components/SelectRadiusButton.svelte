<script>
	import { onMount } from 'svelte';
	import SelectArea from '../icons/SelectArea.svelte';
	import SelectRadius from '../icons/SelectRadius.svelte';
	import circleTurf from '@turf/circle';
	import { mapState, selectedAreaState, geocoderState } from '../state.svelte';
	import { tooltip } from '../utils/tooltip.js';

	let buttonActive = $state(false);

	let radius = $state(0.1);

	let isDisabled = $derived(!geocoderState?.results || selectedAreaState.type === 'area');

	const startDraw = () => {
		buttonActive = true;
		mapState.isDrawing = true;
	};

	const updateRadius = (v) => {
		const center = geocoderState.results;

		radius = v;
		const options = {
			steps: 64,
			units: 'miles'
		};

		const circlePolygon = circleTurf(center, radius, options);

		selectedAreaState.selected = circlePolygon;
		selectedAreaState.type = 'radius';
		selectedAreaState.radius = radius;

		mapState.isDrawing = false;
	};

	$effect(() => {
		if (buttonActive) {
			updateRadius(radius);
		} else {
			radius = 0.1;
		}
	});

	$effect(() => {
		if (selectedAreaState.type !== 'radius' || !selectedAreaState.selected) {
			buttonActive = false;
		}
	});

	onMount(() => {
		// From hash only
		if (
			selectedAreaState.type === 'radius' &&
			!!selectedAreaState.radius &&
			!!geocoderState.results &&
			!selectedAreaState.selected
		) {
			buttonActive = true;
			radius = selectedAreaState.radius;
			updateRadius(radius);
		}
	});

	let tooltipText = $derived(
		isDisabled ? 'You need to search for an address on the map before setting a radius.' : null
	);
</script>

<div class="select-radius-button-container">
	<!-- For whatever reason, content isn't updating as expected. Temp solution is to key it -->
	{#key tooltipText}
		<div use:tooltip={tooltipText}>
			<button
				aria-label="Select area by radius"
				id="select-radius-button"
				class={['select-radius-button', { active: buttonActive, disabled: isDisabled }]}
				onclick={startDraw}
			>
				<div class={['select-radius-icon-container area', { disabled: isDisabled }]}>
					<SelectRadius />
				</div>
			</button>
		</div>
	{/key}
	{#if buttonActive}
		<div class="radius-input-container">
			<input
				class="number-input"
				type="number"
				step={0.1}
				onchange={(e) => updateRadius(e.target.value)}
				max="10"
				min="0"
				value={radius}
			/>
			mi
		</div>
	{:else}
		<div class="select-radius-button-label">Select by radius</div>
	{/if}
</div>

<style lang="scss">
	.radius-input-container {
		display: flex;
		align-items: center;
		color: var(--white);
		gap: 0.5rem;
	}

	.number-input {
		height: 2.5rem;
		font-family: var(--primary-font);
		font-size: var(--font-size-m);
		border-radius: 0.5rem;
		background-color: var(--white);
		color: var(--charles-blue);
		outline: none;
		border: none;
		width: 5rem;
		border: 2px solid var(--white);

		&:focus {
			border: 2px solid var(--support-blue-1);
		}
	}

	.select-radius-button-container {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.select-radius-button {
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

	.select-radius-button-label {
		color: var(--white);
		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-medium);
	}

	.select-radius-icon-container {
		width: 100%;
		height: 100%;

		&.area {
			padding: 0.35rem;
		}

		:global(svg) {
			width: 100%;
			height: 100%;

			:global(path) {
				fill: var(--charles-blue);
			}
		}

		&.disabled {
			:global(svg path) {
				fill: var(--support-gray-4);
			}
		}
	}
</style>
