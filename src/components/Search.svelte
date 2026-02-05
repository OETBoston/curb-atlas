<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import { mapboxAccessToken, maxBounds } from '../constants';
	import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
	import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
	import { geocoderState, selectedAreaState } from '../state.svelte';
	import UserLocation from '../icons/UserLocation.svelte';
	import { point as turfPoint } from '@turf/helpers';
	import bboxPolygon from '@turf/bbox-polygon';
	import booleanPointInPolygon from '@turf/boolean-point-in-polygon';

	let geocoder = $state(null);
	let error = $state(null);

	// True if in maxbounds, false if not
	const checkForLocation = (coords) => {
		const point = turfPoint(coords);
		const bbox = bboxPolygon(maxBounds);
		const isInPolygon = booleanPointInPolygon(point, bbox);
		return isInPolygon;
	};

	const setTextInSearch = (text) => {
		const inputEl = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0];
		inputEl.value = text;
		const closeContainer = document.getElementsByClassName(
			'mapboxgl-ctrl-geocoder mapboxgl-ctrl'
		)[0];
		const closeButton = document.getElementsByClassName('mapboxgl-ctrl-geocoder--button')[0];

		const showCloseButton = () => (closeButton.style.display = 'block');
		const hideCloseButton = () => (closeButton.style.display = 'none');

		closeContainer.addEventListener('mouseenter', showCloseButton);
		closeContainer.addEventListener('mouseleave', hideCloseButton);
		geocoder.on('clear', () => {
			closeContainer.removeEventListener('mouseenter', showCloseButton);
			closeContainer.removeEventListener('mouseleave', hideCloseButton);
		});
	};

	const getLocation = () => {
		function showPosition(position) {
			const latitude = position?.coords?.latitude;
			const longitude = position?.coords?.longitude;

			if (!latitude || !longitude) return;

			const isInMaxBounds = checkForLocation([longitude, latitude]);

			if (!isInMaxBounds) {
				error = `Your location is outside of the designated region.`;
				setTimeout(() => (error = null), 3000);
				return;
			}

			geocoderState.results = [longitude, latitude];

			const text = `${latitude},${longitude}`;

			setTextInSearch(text);
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, (e) => console.error(e));
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	};

	onMount(() => {
		geocoder = new MapboxGeocoder({
			accessToken: mapboxAccessToken,
			mapboxgl: mapboxgl,
			bbox: maxBounds
		});

		geocoder.addTo('#geocoder');

		geocoder.on('result', (e) => {
			geocoderState.results = e.result?.center;
		});

		geocoder.on('clear', () => {
			geocoderState.results = null;
		});

		if (geocoderState.results) {
			const [longitude, latitude] = geocoderState.results;

			const text = `${latitude},${longitude}`;

			setTextInSearch(text);
		}
	});
</script>

<div class="Search">
	<div
		class={[
			'search-container',
			{ disabled: selectedAreaState?.type === 'radius' && !!selectedAreaState?.selected }
		]}
	>
		<div id="geocoder"></div>
		<button aria-label="User Location Button" class="user-location-button" onclick={getLocation}
			><UserLocation /></button
		>
	</div>
	{#if error}
		<div class="error">{error}</div>
	{/if}
</div>

<style lang="scss">
	.Search {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		position: relative;
	}

	.error {
		bottom: 0;
		position: absolute;
		font-family: var(--primary-font);
		font-size: var(--font-size-s);
		color: var(--freedom-trail-red);
	}

	.search-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 1.5rem;

		#geocoder {
			flex-grow: 1;

			:global(input) {
				border: 1px solid transparent;

				&:focus {
					border: 1px solid var(--support-blue-1);
					border-radius: 0.25rem;
				}
			}
		}

		&.disabled {
			pointer-events: none;
			:global(input) {
				pointer-events: none;
			}

			:global(.mapboxgl-ctrl-geocoder--button) {
				display: none !important;
				pointer-events: none;
			}
		}

		:global(.mapboxgl-ctrl-geocoder) {
			width: unset;
		}
	}

	.user-location-button {
		height: 1.5rem;
		width: 1.5rem;
		cursor: pointer;
		flex-shrink: 0;

		:global(svg) {
			height: 100%;
			width: 100%;

			:global(path) {
				fill: var(--white);
			}
		}

		&:focus {
			:global(svg path) {
				fill: var(--support-gray-1-hover);
			}
		}

		&:hover {
			:global(svg path) {
				fill: var(--support-gray-1-hover);
			}
		}
	}
</style>
