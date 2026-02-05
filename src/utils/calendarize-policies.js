import plur from 'plur';
import { dayOfWeekOptions } from '../constants';
import { trimQuotes, timeToNumber } from './basic-utils';

const allDaysOfWeek = dayOfWeekOptions.map((d) => d.value);

const calendarizePolicies = (policies) => {
	const policiesClone = JSON.parse(JSON.stringify(policies));
	if (!policiesClone || !policiesClone.length) return;

	let calendar = [];

	const sortedPolicies = policiesClone.sort((a, b) => b.priority - a.priority);

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

			// Clean data
			if (!purposes) purposes = [];
			if (!user_classes) user_classes = [];
			purposes = purposes.map(trimQuotes);
			user_classes = user_classes.map(trimQuotes);

			for (const timespan of time_spans) {
				// Clean data
				let {
					days_of_week = null,
					time_of_day_start = null,
					time_of_day_end = null,
					designated_period
				} = timespan ?? {};

				if (days_of_week !== null && days_of_week !== undefined) {
					days_of_week = days_of_week.map(trimQuotes);
				} else {
					days_of_week = allDaysOfWeek;
				}

				time_of_day_start = timeToNumber(time_of_day_start);
				if (time_of_day_start === 24) {
					time_of_day_start = 0;
				}
				time_of_day_end = timeToNumber(time_of_day_end);
				if (time_of_day_end === 0) {
					time_of_day_end = 24;
				}

				let nextItem = {
					policyId: policy?.curb_policy_id
				};

				if (max_stay) {
					nextItem.maxStay = `${max_stay} ${plur(max_stay_unit, max_stay)}`;
				}

				nextItem.priority = policy?.priority ?? 0;
				nextItem.days = days_of_week;

				// Set the time for the calendar element
				nextItem.start = time_of_day_start === null ? 0 : time_of_day_start;
				nextItem.end = time_of_day_end === null ? 24 : time_of_day_end;

				nextItem.activity = activity;
				nextItem.purposes = purposes;

				nextItem.designatedPeriod = designated_period;

				calendar.push(nextItem);
			}
		}
	}

	calendar = allDaysOfWeek.reduce((acc, day) => {
		let events = calendar.filter((c) => {
			return c.days.includes(day);
		});
		events = events
			.sort((a, b) => b.priority - a.priority)
			.map((e) => {
				const clone = JSON.parse(JSON.stringify(e));
				delete clone.days;
				return clone;
			});
		acc[day] = events;
		return acc;
	}, {});

	return calendar;
};

export { calendarizePolicies };
