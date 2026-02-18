<script>
	import plur from 'plur';
	import Caret from '../icons/Caret.svelte';
	import Check from '../icons/Check.svelte';
	import Search from './Search.svelte';
	import SelectAreaButton from './SelectAreaButton.svelte';
	import SelectRadiusButton from './SelectRadiusButton.svelte';
	import RemoveSelectionButton from './RemoveSelectionButton.svelte';
	import { selectedAreaState, geocoderState } from '../state.svelte';
	import Legend from './Legend.svelte';

	const MINUTES_PER_MILE = 20;

	const hasResult = $derived(!!geocoderState?.results);

	const radius = $derived(selectedAreaState?.radius ? Number(selectedAreaState?.radius) : null);
	const walkEstimate = $derived(radius ? radius * MINUTES_PER_MILE : 0);

	const helperText = $derived.by(() => {
		return `Locations within ${radius} ${plur('mile', radius)} (about ${walkEstimate} ${plur('minute', walkEstimate)} walking time)`;
	});
</script>

<div class="SelectAreaMenu">
	<div class="SelectAreaMenu-section">
		<div class="section-title">Search for an Address</div>
		<div class="search-container"><Search /></div>
	</div>
	<div class="SelectAreaMenu-section">
		<div class="section-title-container">
			<div class="section-title">Select Area</div>
			<RemoveSelectionButton />
		</div>
		<div class="select-area-buttons">
			{#if hasResult}
				<SelectRadiusButton />
			{/if}
			<SelectAreaButton />
		</div>
	</div>

	{#if !!selectedAreaState?.selected}
		<div class="SelectAreaMenu-section">
			<div class="section-title-container">
				<div class="section-title">Legend</div>
			</div>
			<Legend />
		</div>
	{/if}

	{#if selectedAreaState?.type === 'radius'}
		<div class="walking-time">
			<div class="walking-time-statement">
				{helperText}<sup>*</sup>
			</div>
			<div class="walking-time-caveat">
				<sup>*</sup>Approximate walking time only. Actual walking time will be longer due to the
				street grid
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.SelectAreaMenu {
		width: 100%;
		max-width: 330px;
		height: 100%;
		background-color: var(--charles-blue);
		padding: 1rem;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		border-radius: 0.5rem;

		.walking-time {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			font-size: var(--font-size-s);
			color: var(--white);
			font-family: var(--primary-font);
		}

		&-section {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	.boston-logo {
		width: 2.5rem;
		img {
			width: 100%;
			height: auto;
		}
	}

	.section-title-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: baseline;
		gap: 0.5rem;
	}

	.section-title {
		font-family: var(--primary-font);
		font-size: var(--font-size-l);
		font-weight: var(--font-weight-bold);
		color: var(--white);
		text-transform: uppercase;
	}

	.select-area-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

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
		&.radius {
			padding: 0.35rem;
		}
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
