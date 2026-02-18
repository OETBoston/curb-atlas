<script>
	import { onMount } from 'svelte';
	import { calendarizePolicies } from '../utils/calendarize-policies';
	import { timeState } from '../state.svelte';
	import Dropdown from './Dropdown.svelte';
	import { dayOfWeekOptions, timeOptions, colors } from '../constants';

	const { policies, setHighlightedPolicyId } = $props();

	const MIN_TIME = 0;
	const MAX_TIME = 24;

	const calendarized = $derived(calendarizePolicies(policies));

	const calendar = $derived.by(() => {
		if (!calendarized || !timeState?.day) return null;
		return calendarized[timeState?.day];
	});

	const byPolicy = $derived.by(() => {
		if (!calendar) return null;
		const organized = calendar.reduce((acc, c) => {
			if (!acc[c.policyId]) {
				acc[c.policyId] = {
					priority: c.priority,
					items: []
				};
			}
			acc[c.policyId].items.push(c);
			return acc;
		}, {});

		return Object.values(organized)
			.sort((a, b) => a.priority - b.priority)
			.map((c) => c.items);
	});

	let timeSlotHeight = $state(0);

	const calculateHeight = (start, end) => {
		let cappedStart = Math.max(MIN_TIME, start);
		let cappedEnd = Math.min(MAX_TIME, end);
		let height = (cappedEnd - cappedStart) * 2;
		return height * timeSlotHeight;
	};

	const calculateVerticalOffset = (start) => {
		let cappedStart = Math.max(MIN_TIME, start) - MIN_TIME;
		let height = cappedStart * 2;
		return height * timeSlotHeight + timeSlotHeight / 2;
	};

	let timeSlotWidth = $state(0);

	const calculateWidth = (numEvents) => {
		return timeSlotWidth / numEvents - 1;
	};

	const calculateHorizontalOffset = (numEvents, i) => {
		let width = calculateWidth(numEvents) + 1;
		return width * i;
	};

	// Styling
	const getBackgroundColor = (activity) => {
		switch (activity) {
			case 'parking': {
				return colors.parkingAllowed;
			}
			case 'loading': {
				return colors.loading;
			}
			default: {
				return colors.parkingNotAllowed;
			}
		}
	};

	const nineToFiveTimeOptions = $derived.by(() => {
		let nextTimeOptions = timeOptions.filter((t) => {
			return t.value >= MIN_TIME && t.value <= MAX_TIME;
		});
		return nextTimeOptions;
	});

	$effect(() => {
		// Scroll to 9-5 to start
		if (policies) {
			const nineAmEl = document.getElementById('9:00 AM');
			nineAmEl.scrollIntoView();
		}
	});
</script>

<div class="Calendar">
	<Dropdown
		options={dayOfWeekOptions}
		value={timeState.day}
		onChange={(v) => (timeState.day = v)}
	/>
	{#if calendar}
		<div class="calendar-container">
			<div class="calendar-container-inner">
				<div class="time-sidebar">
					{#each nineToFiveTimeOptions as time}
						<div
							id={`${time.label}`}
							class={['time', { hide: time?.hide || Math.round(time.value) !== time.value }]}
							bind:clientHeight={timeSlotHeight}
						>
							{time.label}
						</div>
					{/each}
				</div>
				<div class="main-calendar" bind:clientWidth={timeSlotWidth}>
					<div
						class="main-calendar-inner"
						style={`padding: ${timeSlotHeight / 2}px 0px; height: calc(100% - ${timeSlotHeight}px); transform: translate(0px, ${timeSlotHeight / 2}px)`}
					></div>
					{#each byPolicy as calendar, i}
						{#each calendar as calEvent}
							<div
								role="application"
								onmouseenter={() => setHighlightedPolicyId(calEvent?.policyId)}
								onmouseleave={() => setHighlightedPolicyId(null)}
								class="event-block"
								style={`background-color: ${getBackgroundColor(calEvent.activity)}; transform: translate(${calculateHorizontalOffset(byPolicy.length, i)}px, ${calculateVerticalOffset(calEvent.start)}px); height: ${calculateHeight(calEvent.start, calEvent.end)}px; width: ${calculateWidth(byPolicy.length)}px`}
							></div>
						{/each}
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.Calendar {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.event-block {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		outline: 1px solid var(--support-gray-1);
	}

	.calendar-container {
		display: flex;
		max-height: 306px;
		overflow: auto;

		&-inner {
			height: 100%;
			width: 100%;
			display: flex;
			gap: 0.5rem;
		}
	}

	.time-sidebar {
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		text-align: right;
	}

	.time {
		padding: 0rem;
		color: var(--charles-blue);
		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-medium);

		&.hide {
			color: transparent;
		}
	}

	.main-calendar {
		flex-grow: 1;
		position: relative;

		&-inner {
			position: absolute;
			background-color: var(--support-gray-1);
			width: 100%;
		}
	}
</style>
