<script>
	import Map from './Map.svelte';
	import TopBar from './TopBar.svelte';
	import MenuButton from './MenuButton.svelte';
	import SelectAreaMenu from './SelectAreaMenu.svelte';
	import Filters from './Filters.svelte';
	import TimeSelector from './TimeSelector.svelte';
	import PoliciesWrapper from './PoliciesWrapper.svelte';
	import { selectedCurbZoneState, timeState, loadingState, mapState } from '../state.svelte';
	import DigitalSeal from '../images/low_res_digital_seal.png';
	import Close from '../icons/Close.svelte';
	import { timeToRealTime, dayToFullDay } from '../utils/basic-utils';
	import { CURB_ZONE_MINZOOM } from '../constants';
	import TimeContainer from './TimeContainer.svelte';
	import Loader from './Loader.svelte';

	let infoModalOpen = $state(true);
	let zoomInPromptVisible = $derived(mapState?.position?.zoom < CURB_ZONE_MINZOOM);

	let openMenus = $state({
		filters: false,
		time: false,
		policies: false
	});

	let hasPolicies = $derived(!!selectedCurbZoneState?.policies);

	const setOpenMenu = (key) => {
		openMenus = Object.fromEntries(
			Object.entries(openMenus).map(([k, v]) => {
				if (k === key) {
					return [k, !v];
				} else {
					return [k, false];
				}
			})
		);
	};
</script>

<div class="Frame">
	<div class="top-bar" role="banner">
		<TopBar onClickInfo={() => (infoModalOpen = !infoModalOpen)} />
	</div>
	<div class="map-container" role="main">
		<Map />
		{#if zoomInPromptVisible}
			<div class="zoom-prompt">Zoom in to see or select curb zones</div>
		{/if}

		<div class="top-left" role="navigation"><SelectAreaMenu /></div>
		<div class="top-right">
			<TimeContainer />
		</div>

		<div class="bottom-row">
			<div class="button-container">
				<div class="button-container-section">
					<MenuButton
						label="Set Filters"
						setOpen={() => setOpenMenu('filters')}
						open={openMenus['filters']}
					>
						<Filters /></MenuButton
					>
					<MenuButton label="Set Time" setOpen={() => setOpenMenu('time')} open={openMenus['time']}>
						<TimeSelector /></MenuButton
					>
				</div>
				<div class="button-container-section">
					<MenuButton
						label="See Policies"
						setOpen={() => setOpenMenu('policies')}
						open={openMenus['policies']}
						position="right"
						disabled={!hasPolicies}
						theme="light"><PoliciesWrapper /></MenuButton
					>
				</div>
			</div>
		</div>

		{#if infoModalOpen}
			<div class="info-modal-screen-container">
				<button class="info-modal-backdrop" onclick={() => (infoModalOpen = false)}></button>
				<div class="info-modal" role="dialog">
					<button class="close-button" onclick={() => (infoModalOpen = false)}><Close /></button>
					<div class="info-modal-title">Welcome to Boston’s Curb Atlas</div>
					<div class="info-modal-body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</div>
					<div class="info-modal-logo-container">
						<div class="info-modal-logo">
							<img alt="Boston Digital Seal" src={DigitalSeal} />
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
	{#if loadingState.loading}
		<Loader />
	{/if}
</div>

<style lang="scss">
	.Frame {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.zoom-prompt {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		background-color: var(--charles-blue-40);
		color: var(--white);
		font-family: var(--primary-font);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		font-size: var(--font-size-l);
	}

	.info-modal-screen-container {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-modal-backdrop {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(255, 255, 255, 0.5);
	}

	.close-button {
		position: absolute;
		top: 0;
		right: 0;
		margin: 1rem;
		cursor: pointer;

		:global(svg) {
			width: 1rem;
			height: 1rem;

			:global(path) {
				fill: var(--white);
			}
		}
	}

	.info-modal {
		position: relative;
		background-color: var(--charles-blue-80);
		padding: 3rem 3rem 1rem 3rem;
		border-radius: 0.5rem;
		width: 70%;
		max-width: 620px;
		min-width: 300px;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		&-title {
			font-family: var(--primary-font);
			font-size: var(--font-size-xl);
			font-weight: var(--font-weight-bold);
			color: var(--white);
			width: 100%;
			text-align: center;
		}

		&-body {
			font-family: var(--secondary-font);
			font-size: var(--font-size-ms);
			font-weight: var(--font-weight-regular);
			color: var(--white);
		}

		&-logo-container {
			width: 100%;
			display: flex;
			justify-content: center;
		}

		&-logo {
			max-width: 10rem;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.top-bar {
	}

	.map-container {
		flex-grow: 1;
		position: relative;
	}

	.top-left {
		position: absolute;
		padding: 2.5rem 1rem;
		top: 0;
		left: 0;
	}

	.top-right {
		position: absolute;
		padding: 2.5rem 1rem;
		top: 0;
		right: 0;
	}

	.bottom-row {
		position: absolute;
		padding: 2.5rem 1rem;
		bottom: 0;
		width: 100%;
		pointer-events: none;
	}

	.button-container {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-section {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}
</style>
