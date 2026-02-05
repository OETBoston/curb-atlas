<script>
	import { selectedCurbZoneState } from '../state.svelte';
	import length from '@turf/length';
	import along from '@turf/along';

	const { geometry } = $props();
	const midpoint = $derived.by(() => {
		if (!geometry) return null;

		const line = {
			type: 'Feature',
			geometry
		};

		// Get total length of the line in kilometers
		const lineLength = length(line, { units: 'kilometers' });

		// Get the midpoint
		const midpoint = along(line, lineLength / 2, { units: 'kilometers' });

		return midpoint.geometry.coordinates;
	});

	const streetViewUrl = $derived.by(() => {
		if (!midpoint) return null;
		return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${midpoint[1]},${midpoint[0]}&heading=-45&pitch=0&fov=80`;
	});
</script>

<a class="StreetView" href={streetViewUrl} target="_blank">Google Street View</a>

<style lang="scss">
	.StreetView {
		padding: 0.5rem 1.5rem;
		background-color: var(--optimistic-blue);
		color: var(--white);
		border-radius: 0.5rem;
		cursor: pointer;

		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;

		white-space: nowrap;
	}
</style>
