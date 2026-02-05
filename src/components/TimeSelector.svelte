<script>
	import { timeState } from '../state.svelte';
	import Caret from '../icons/Caret.svelte';
	import Checkbox from './Checkbox.svelte';
	import { dayOfWeekOptions, timeOptions } from '../constants';
	import Dropdown from './Dropdown.svelte';

	let useCurrentTime = $derived(timeState.useCurrentTime);

	const timeOfDayOptions = $derived(timeOptions.filter((o) => !o?.hide));

	const setToCurrentTime = () => {
		timeState.useCurrentTime = !timeState.useCurrentTime;
	};
</script>

<div class="TimeSelector">
	<div class="section-title">Day of week</div>

	<Dropdown
		options={dayOfWeekOptions}
		value={timeState.day}
		onChange={(v) => (timeState.day = v)}
		disabled={useCurrentTime}
	/>

	<div class="section-title">Time of day</div>

	<Dropdown
		options={timeOfDayOptions}
		value={timeState.time}
		onChange={(v) => (timeState.time = Number(v))}
		disabled={useCurrentTime}
	/>

	<div class="local-time-container">
		<Checkbox value={useCurrentTime} setValue={setToCurrentTime} /> Use current local time (EST)
	</div>
</div>

<style lang="scss">
	.TimeSelector {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}

	.local-time-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--white);
		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
	}

	.section-title {
		color: var(--white);
	}

	.Dropdown {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;

		&-icon {
			position: absolute;
			right: 0.5rem;
			pointer-events: none;
			width: 1rem;

			:global(svg) {
				width: 100%;
			}
		}

		select {
			width: 100%;

			appearance: none;
			background: none;
			padding: 0.5em;
			border-radius: 0.5rem;
			cursor: pointer;
			padding-right: 2rem;

			color: var(--charles-blue);
			/* input */
			font-family: var(--primary-font);
			font-size: var(--font-size-ms);
			font-weight: var(--font-weight-medium);

			background-color: var(--white);

			&:focus {
				outline: none;
			}

			&:hover {
				background-color: var(--support-gray-1);
			}
		}

		option {
			padding-right: 2rem;
		}
	}
</style>
