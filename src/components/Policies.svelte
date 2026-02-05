<script>
	import { tick } from 'svelte';
	import { calendarizePolicies } from '../utils/calendarize-policies';
	import Calendar from './Calendar.svelte';

	const { policies } = $props();

	let highlightedPolicyId = $state(null);

	const setHighlightedPolicyId = (val) => {
		highlightedPolicyId = val;
	};

	const sortedPolicies = $derived(
		JSON.parse(JSON.stringify(policies))?.sort((a, b) => a.priority - b.priority)
	);

	const getLastUpdatedString = (dateMs) => {
		const date = new Date(dateMs);

		const timeZone = 'America/New_York';

		const options = {
			timeZone: timeZone,
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		};

		const formattedDate = date.toLocaleString('en-US', options);

		return formattedDate;
	};

	$effect(() => {
		if (highlightedPolicyId) {
			const el = document.getElementById(highlightedPolicyId);
			if (el)
				el.scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
		}
	});
</script>

<div class="Policies">
	<div class="title">Policies</div>

	<ul class="policies-list-container">
		{#each sortedPolicies as policy}
			<li id={policy?.curb_policy_id}>
				<div class="policy-container">
					<div
						class={['policy-text', { highlighted: highlightedPolicyId === policy?.curb_policy_id }]}
					>
						{policy?.description ?? 'No policy description provided.'}
					</div>
					<div class="last-updated">
						Last updated {getLastUpdatedString(policy?.published_date)}
					</div>
				</div>
			</li>
		{/each}
	</ul>

	<div class="title">Calendar</div>

	<Calendar {policies} {setHighlightedPolicyId} />
</div>

<style lang="scss">
	.Policies {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-family: var(--primary-font);
	}

	.title {
		font-size: var(--font-size-l);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
	}

	.policy-container {
		display: flex;
		gap: 0.5rem;
		align-items: start;
		justify-content: space-between;
		min-width: 300px;
	}

	.policy-text {
		font-size: var(--font-size-ms);
		color: var(--charles-blue);

		&.highlighted {
			color: var(--optimistic-blue);
		}
	}

	.last-updated {
		font-size: var(--font-size-s);
		white-space: nowrap;
	}

	.policies-list-container {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0;
		margin-left: 1rem;
		max-height: 200px;
		overflow: auto;

		li {
			padding-left: 0;
		}

		li::marker {
			margin-left: 0;
		}
	}
</style>
