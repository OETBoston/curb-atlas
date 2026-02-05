<script>
	import { timeState } from '../state.svelte';
	import Caret from '../icons/Caret.svelte';
	import Checkbox from './Checkbox.svelte';
	import { timeToRealTime, dayToFullDay, fullDayToDay } from '../utils/basic-utils';

	let dayOfWeek = $state(timeState.day);
	let timeOfDay = $state(timeState.time);
	let useCurrentTime = $derived(timeState.useCurrentTime);

	let localDayOfWeek = $state(null);
	let localTime = $state(null);
	let localTimeInterval = $state(null);

	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const updateTime = () => {
		const now = new Date();

		const options12 = {
			hour: 'numeric',
			minute: '2-digit',
			timeZone: 'America/New_York',
			hour12: true
		};

		const options24 = {
			hour: 'numeric',
			minute: '2-digit',
			timeZone: 'America/New_York',
			hour12: false
		};

		localTime = now.toLocaleTimeString('en-US', options12);
		// This might need fancier treatment time zone wise
		const dayIndex = now.getDay();
		localDayOfWeek = daysOfWeek[dayIndex];

		let hours = now.toLocaleTimeString('en-US', options24);
		hours = Number(hours.split(':')[0]);
		if (hours === 24) {
			hours = 0;
		}
		let minutes = now.getMinutes();
		const halfHourInterval = minutes === 0 || minutes === 30;
		if (halfHourInterval) {
			let nextTime = hours + (minutes === 30 ? 0.5 : 0);
			timeState.day = fullDayToDay(localDayOfWeek);
			timeState.time = nextTime;
		}
	};

	$effect(() => {
		if (useCurrentTime) {
			updateTime();
			const now = new Date();
			const secondsLeft = 60 - now.getSeconds();

			if (secondsLeft > 0) {
				setTimeout(() => {
					updateTime();
					localTimeInterval = setInterval(updateTime, 60000);
				}, secondsLeft * 1000);
			} else {
				localTimeInterval = setInterval(updateTime, 60000);
			}
		} else {
			if (localTimeInterval) {
				clearInterval(localTimeInterval);
			}
			localTime = null;
			localDayOfWeek = null;
		}
	});
</script>

<div class="timeContainer">
	<div class="day">
		{localDayOfWeek ?? dayToFullDay(timeState.day)}
	</div>
	<div class="time">
		{localTime ?? timeToRealTime(timeState.time)}
	</div>
	{#if useCurrentTime}
		<div class="current-time-note">Using current local time (EST)</div>
	{/if}
</div>

<style lang="scss">
	.timeContainer {
		background-color: var(--white);
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.75rem 0.125rem rgba(0, 0, 0, 0.5);

		.day {
			font-family: var(--primary-font);
			font-size: var(--font-size-l);
			font-weight: var(--font-weight-bold);
			color: var(--charles-blue);
		}
		.time {
			font-family: var(--primary-font);
			font-size: var(--font-size-l);
			font-weight: var(--font-weight-regular);
			color: var(--charles-blue);
		}

		.current-time-note {
			font-family: var(--primary-font);
			font-size: var(--font-size-ms);
			color: var(--support-gray-4);
		}
	}
</style>
