import { bbox } from '@turf/bbox';
import { initialFilterState } from '../constants';

const stringifyList = ['geocoder', 'filter', 'selectedArea', 'time', 'position'];

export const decodeHash = (hash) => {
	const removedHash = hash.replace('#', '');
	const decoded = decodeURIComponent(removedHash);
	const hashObj = decoded.split('&').reduce((acc, item) => {
		let [k, v] = item.split('=');
		if (stringifyList.includes(k)) {
			v = JSON.parse(v);
		}
		acc[k] = v;
		return acc;
	}, {});
	return hashObj;
};

export const encodeHash = (state) => {
	const {
		mapState,
		geocoderState,
		filterState,
		selectedAreaState,
		selectedCurbZoneState,
		timeState
	} = state;

	const ignoreFilterState =
		JSON.stringify(initialFilterState) === JSON.stringify(filterState?.current);

	let hashObj = {
		geocoder: geocoderState?.results,
		...(!ignoreFilterState && { filter: filterState?.current }),
		...(selectedAreaState?.type && {
			selectedArea: {
				type: selectedAreaState?.type,
				...(selectedAreaState?.type === 'area' && { bbox: bbox(selectedAreaState?.selected) }),
				...(selectedAreaState?.type === 'radius' && { radius: selectedAreaState?.radius })
			}
		}),
		time: timeState,
		...(selectedCurbZoneState?.properties?.curb_zone_id && {
			selectedCurbZone: selectedCurbZoneState?.properties?.curb_zone_id
		}),
		position: mapState?.position
	};

	hashObj = Object.fromEntries(
		Object.entries(hashObj)
			.map(([k, v]) => {
				if (!v) return false;
				return [k, v];
			})
			.filter(Boolean)
	);

	const queryString = Object.entries(hashObj)
		.map(([k, v]) => {
			const value = stringifyList.includes(k) ? JSON.stringify(v) : v;
			return `${k}=${encodeURIComponent(value)}`;
		})
		.join('&');

	window.location.replace(`${window.location.pathname}#${queryString}`);
};
