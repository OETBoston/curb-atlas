<script>
	import { selectedCurbZoneState } from '../state.svelte';
	import Policies from './Policies.svelte';
	import StreetViewButton from './StreetViewButton.svelte';
	import AdditionalInfo from './AdditionalInfo.svelte';
	import LinkOut from '../icons/LinkOut.svelte';
	import length from '@turf/length';
	import along from '@turf/along';

	const policies = $derived(selectedCurbZoneState.policies);
	const geometry = $derived(selectedCurbZoneState.geometry);
	const properties = $derived(selectedCurbZoneState.properties);
	let curbZoneId = $derived(properties?.curb_zone_id);

	let activeTab = $state('policies');

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

<div class="PoliciesWrapper">
	<div class="panels">
		<button
			class={['panel-button', { active: activeTab === 'policies' }]}
			onclick={() => (activeTab = 'policies')}>Policies</button
		>
		<button
			class={['panel-button', { active: activeTab === 'additional_info' }]}
			onclick={() => (activeTab = 'additional_info')}>Additional info</button
		>

		<a class="panel-button streetview" href={streetViewUrl} target="_blank"
			>Street view <div class="link-out-icon"><LinkOut /></div></a
		>
	</div>
	{#if activeTab === 'policies'}
		<Policies {policies} {curbZoneId} />
	{:else}
		<AdditionalInfo {properties} />
	{/if}
</div>

<style lang="scss">
	.PoliciesWrapper {
		color: var(--charles-blue);
		width: 360px;
	}

	.streetview {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.link-out-icon {
		height: var(--font-size-ms);

		:global(svg) {
			width: 100%;
			height: 100%;

			:global(path) {
				fill: var(--charles-blue);
			}
		}
	}

	.panels {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 1rem;
	}

	.panel-button {
		font-size: var(--font-size-ms);
		cursor: pointer;

		&.active {
			text-decoration: underline;
			color: var(--optimistic-blue);
		}

		&:focus {
			color: var(--optimistic-blue-hover);

			.link-out-icon {
				:global(svg path) {
					fill: var(--optimistic-blue-hover);
				}
			}
		}

		&:hover {
			color: var(--optimistic-blue-hover);

			.link-out-icon {
				:global(svg path) {
					fill: var(--optimistic-blue-hover);
				}
			}
		}
	}
</style>
