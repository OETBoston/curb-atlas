import { trimQuotes, timeToNumber } from './basic-utils';

const determineParkingValidity = async (policies, zoneProperties, day, time) => {
	let { curb_policy_ids, curb_zone_id } = zoneProperties;
	curb_policy_ids = curb_policy_ids.filter(Boolean);

	if (!curb_policy_ids || !curb_policy_ids.length) return { zoneProperties };

	const properties = {
		zoneId: curb_zone_id,
		canPark: false,
		permitted: false,
		accessible: false,
		loadingZone: false,
		// maxStay in minutes
		maxStay: null
	};

	// Sort by priority order
	const sortedPolicies = policies.sort((a, b) => a.priority - b.priority);

	for (const policy of sortedPolicies) {
		let { rules = [], time_spans = [] } = policy ?? {};

		rules = Array.isArray(rules) ? rules.filter(Boolean) : [];
		time_spans = Array.isArray(time_spans) ? time_spans.filter(Boolean) : [];

		for (const rule of rules) {
			let {
				activity = null,
				purposes = [],
				user_classes = [],
				max_stay,
				max_stay_unit
			} = rule ?? {};

			// Gross data fixing
			if (!purposes) purposes = [];
			if (!user_classes) user_classes = [];
			purposes = purposes.map(trimQuotes);
			user_classes = user_classes.map(trimQuotes);

			for (const timespan of time_spans) {
				let {
					days_of_week = null,
					time_of_day_start = null,
					time_of_day_end = null
				} = timespan ?? {};

				if (days_of_week !== null) {
					days_of_week = days_of_week.map(trimQuotes);
				}

				time_of_day_start = timeToNumber(time_of_day_start);
				if (time_of_day_start === 24) {
					time_of_day_start = 0;
				}
				time_of_day_end = timeToNumber(time_of_day_end);
				if (time_of_day_end === 0) {
					time_of_day_end = 24;
				}

				const isParking = !!activity && activity === 'parking';

				// POSITIVE
				// Check for basic parking eligibility
				if (isParking) {
					properties.canPark = true;
					// Check for permitting
					if (
						purposes &&
						Array.isArray(purposes) &&
						purposes.some((v) => ['permit', 'disabled_parking_permit'].includes(v))
					) {
						properties.permitted = true;
					}
					// Check for user classes
					if (user_classes) {
						if (user_classes.includes('accessible')) {
							properties.accessible = true;
						}
						// If user classes are specified but don't include "car", no parking
						if (user_classes.length > 1 && !user_classes.includes('car')) {
							properties.canPark = false;
						}
					}

					// Check for days of week
					if (properties.canPark && days_of_week) {
						properties.canPark = days_of_week.includes(day);
					}

					// Check for time of day
					if (
						properties.canPark &&
						time_of_day_start !== null &&
						time_of_day_start !== time_of_day_end
					) {
						properties.canPark = time >= time_of_day_start && time <= time_of_day_end;
					}

					// Check for max stay property while parking is eligible
					if (properties.canPark && max_stay && max_stay_unit) {
						// If the unit is 'hour', multiple by 60 to get minutes
						let maxStay = max_stay_unit === 'hour' ? max_stay * 60 : max_stay;
						properties.maxStay = maxStay;
					}
				} // No parking
				else {
					const validDayOfWeek = days_of_week && days_of_week.includes(day);
					const validTime =
						time_of_day_start &&
						time_of_day_end &&
						time >= time_of_day_start &&
						time <= time_of_day_end;

					// Check for days of week
					// If parking is allowed and the "no parking" policy is not applied, skip
					if (properties.canPark && days_of_week) {
						properties.canPark = !validDayOfWeek;
					}

					// Check for time of day
					if (
						properties.canPark &&
						time_of_day_start !== null &&
						time_of_day_start !== time_of_day_end
					) {
						properties.canPark = !validTime;
					}

					// Check for loading zone
					if (activity === 'loading' && validDayOfWeek && validTime) {
						properties.loadingZone = true;
					}
				}
			}
		}
	}

	if (properties.maxStay === null) {
		delete properties.maxStay;
	}

	return { ...zoneProperties, ...properties };
};

export { determineParkingValidity };
