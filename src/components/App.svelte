<script>
	import '../styles/global.scss';
	import { onMount, untrack } from 'svelte';
	import Frame from './Frame.svelte';
	import BetaBanner from './BetaBanner.svelte';
	import { encodeHash, decodeHash } from '../utils/hash';
	import {
		selectedAreaState,
		geocoderState,
		filterState,
		selectedCurbZoneState,
		timeState,
		mapState
	} from '../state.svelte';
	import { TIMEOUT } from '../constants';
	import throttle from 'lodash.throttle';
	import bboxPolygon from '@turf/bbox-polygon';

	let mounted = $state(false);

	const throttledWriteHash = throttle(() => {
		encodeHash({
			selectedAreaState,
			geocoderState,
			filterState,
			selectedCurbZoneState,
			timeState,
			mapState
		});
	}, TIMEOUT);

	$effect(() => {
		selectedAreaState.selected;
		geocoderState.results;
		filterState.current;
		selectedCurbZoneState.properties;
		timeState.day;
		timeState.time;
		timeState.useCurrentTime;
		mapState.position;

		const isMounted = untrack(() => mounted);
		if (!isMounted) return;

		// This fires twice which isn't necessary
		// If performance is an issue or hash isn't right, revisit, otherwise harmless
		throttledWriteHash();
	});

	onMount(() => {
		const hashObj = decodeHash(window.location.hash);

		if (hashObj?.geocoder) {
			geocoderState.results = hashObj?.geocoder;
		}
		if (hashObj?.filter) {
			filterState.current = hashObj?.filter;
		}
		if (hashObj?.time) {
			const { time, day, useCurrentTime } = hashObj?.time;
			timeState.time = time;
			timeState.day = day;
			timeState.useCurrentTime = useCurrentTime;
		}
		if (hashObj?.selectedCurbZone) {
			selectedCurbZoneState.id = hashObj?.selectedCurbZone;
		}
		if (hashObj?.selectedArea) {
			let { type } = hashObj?.selectedArea;
			selectedAreaState.type = type;
			switch (type) {
				case 'area': {
					const bbox = hashObj?.selectedArea?.bbox;
					const polygon = bboxPolygon(bbox);
					selectedAreaState.selected = polygon;
					break;
				}
				case 'radius': {
					selectedAreaState.radius = hashObj?.selectedArea?.radius;
					break;
				}
				default: {
					break;
				}
			}
		}
		if (hashObj?.position) {
			mapState.position = hashObj?.position;
		}

		setTimeout(() => (mounted = true), TIMEOUT);
	});
</script>

<div class="App">
	<!-- This lets us set state before anything else happens -->
	{#if mounted}
		<BetaBanner />
		<Frame />
	{/if}
</div>

<style lang="scss">
	.App {
		width: 100vw;
		height: 100vh;
		max-height: 100vh;
	}

	:global(.simple-tooltip) {
		position: absolute;
		background-color: var(--optimistic-blue);
		color: var(--white);
		white-space: wrap;
		max-width: 200px;
		padding: 0.5rem 0.75rem;
		border-radius: 0.25rem;
		font-size: var(--font-size-ms);
		font-family: var(--primary-font);
		font-weight: var(--font-weight-regular);
		pointer-events: none;
		z-index: 1000;
	}
</style>
