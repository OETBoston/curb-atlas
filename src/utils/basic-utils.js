export const trimQuotes = (v) => {
	return v
		.trim()
		.replace(/^['"]+/, '')
		.replace(/['"]+$/, '');
};

// Simplifies filters
export const simplifyFilters = (filters) => {
	let next = filters.map((f) => f.options).flat();
	next = next.reduce((acc, obj) => {
		const { value, id } = obj;
		acc[id] = value;
		return acc;
	}, {});
	return next;
};

// Day/time utils
export const dayToFullDay = (abbrev) => {
	const legend = {
		sun: 'Sunday',
		mon: 'Monday',
		tue: 'Tuesday',
		wed: 'Wednesday',
		thu: 'Thursday',
		fri: 'Friday',
		sat: 'Saturday'
	};
	return legend[abbrev];
};

export const fullDayToDay = (full) => {
	let legend = {
		sun: 'Sunday',
		mon: 'Monday',
		tue: 'Tuesday',
		wed: 'Wednesday',
		thu: 'Thursday',
		fri: 'Friday',
		sat: 'Saturday'
	};
	legend = Object.fromEntries(Object.entries(legend).map(([k, v]) => [v, k]));
	return legend[full];
};

export const timeToNumber = (time) => {
	if (!time) return null;
	// Found instance of this. Assuming it's end of day unique
	if (time === '23:59') return 24;

	const split = time.split(':').map(Number);

	const added = split[1] === '30' ? 0.5 : 0;
	const next = split[0] + added;
	return next;
};

export const timeToRealTime = (num) => {
	let label = '';
	if (num === 0) {
		label = '12:00 AM';
	} else if (num === 0.5) {
		label = '12:30 AM';
	} else {
		let split = `${num}`.split('.');

		let next = `${Number(split[0]) > 12.5 ? Number(split[0]) - 12 : split[0]}:${split[1] === '5' ? '30' : '00'}`;

		next = `${next} ${Number(split[0]) > 11.5 ? 'PM' : 'AM'}`;

		label = next;
	}

	return label;
};
