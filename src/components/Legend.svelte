<script>
	import { filterState, selectedAreaState } from '../state.svelte';
	import Accessible from '../icons/legend/Accessible.svelte';
	import LoadingZone from '../icons/legend/LoadingZone.svelte';
	import NoParking from '../icons/legend/NoParking.svelte';
	import NoParkingLight from '../icons/legend/NoParkingLight.svelte';
	import YesParking from '../icons/legend/YesParking.svelte';
	import YesParkingLight from '../icons/legend/YesParkingLight.svelte';
	import { simplifyFilters } from '../utils/basic-utils';

	const filterValues = $derived(simplifyFilters(filterState.current));

	const hasAccessibility = $derived(filterValues['accessible']);
	const hasLoadingZones = $derived(filterValues['loadingZone']);
</script>

<div class="Legend">
	<div class="legend-item">
		<div class="legend-text">Parking allowed with currently selected time and filters:</div>
		{#if !hasAccessibility && !hasLoadingZones}
			<div class="legend-icon">
				<YesParking />
			</div>
		{:else}
			<div class="legend-icon">
				<YesParkingLight />
			</div>
		{/if}
	</div>
	<div class="legend-item">
		<div class="legend-text">Parking not allowed with current filters:</div>
		{#if !hasAccessibility && !hasLoadingZones}
			<div class="legend-icon">
				<NoParking />
			</div>
		{:else}
			<div class="legend-icon">
				<NoParkingLight />
			</div>
		{/if}
	</div>

	{#if hasAccessibility}
		<div class="legend-item">
			<div class="legend-text">Accessible parking:</div>
			<div class="legend-icon">
				<Accessible />
			</div>
		</div>
	{/if}
	{#if hasLoadingZones}
		<div class="legend-item">
			<div class="legend-text">Loading zones:</div>
			<div class="legend-icon">
				<LoadingZone />
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.Legend {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.legend-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.legend-text {
		font-family: var(--primary-font);
		color: var(--white);
		font-size: var(--font-size-s);
		font-weight: var(--font-weight-medium);
		flex-grow: 1;
	}

	.legend-icon {
		width: 50%;
		flex-shrink: 0;

		:global(svg) {
			width: 100%;
		}
	}
</style>
