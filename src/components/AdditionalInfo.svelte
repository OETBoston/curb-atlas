<script>
	const { properties } = $props();

	const availableParking = $derived(properties?.available ? 'Available' : 'Unavailable');
	const availableParkingSpaces = $derived(properties?.num_spaces ?? 0);
	const parkingAngle = $derived(properties?.parking_angle);
	const streetSide = $derived(properties?.street_side);

	const items = $derived.by(() => {
		const jurisdictionType = properties?.jurisdiction_type
			? properties.jurisdiction_type.charAt(0).toUpperCase() + properties.jurisdiction_type.slice(1)
			: null;

		let listItems = [];

		if (jurisdictionType) {
			listItems = listItems.concat([{ key: 'Jurisdiction', value: jurisdictionType }]);
		}

		const availableParking = properties?.available ? 'Available' : 'Unavailable';
		const availableParkingSpaces = properties?.num_spaces ?? 0;
		const parkingAngle = properties?.parking_angle;
		const streetSide = properties?.street_side;
		const median = properties?.median;
		const entireRoadway = properties?.entire_roadway;

		const availability = [
			// Available
			{ key: 'Parking', value: availableParking },
			// Number of spaces
			...(!!properties?.num_spaces || properties?.num_spaces === 0
				? [{ key: 'Available spaces', value: availableParkingSpaces }]
				: []),
			// Parking angle
			...(parkingAngle ? [{ key: 'Parking angle', value: parkingAngle }] : []),
			// Street side
			...(streetSide ? [{ key: 'Street side', value: streetSide ? 'Yes' : 'No' }] : []),
			// Median
			...(median ? [{ key: 'Median', value: median ? 'Yes' : 'No' }] : []),
			// Entire roadway
			...(entireRoadway ? [{ key: 'Entire roadway', value: entireRoadway ? 'Yes' : 'No' }] : [])
		];

		listItems = listItems.concat(availability);

		return listItems;
	});
</script>

<div class="AdditionalInfo">
	<div class="title">Additional info</div>

	<ul class="info-list-container">
		{#each items as item}
			<li>
				<div class="section">
					<div class="list-item-key">{item?.key}:</div>
					<div class="list-item-value">{item?.value}</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.AdditionalInfo {
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

	.section {
		display: flex;
		gap: 0.25rem;
		align-items: start;
		min-width: 300px;
	}

	.list-item-key {
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-bold);
	}

	.list-item-value {
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-regular);
	}

	.info-list-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0;
		margin-left: 1rem;

		li {
			padding-left: 0;
		}

		li::marker {
			margin-left: 0;
		}
	}
</style>
