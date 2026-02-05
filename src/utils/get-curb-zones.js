import { fetchUrl } from './fetch';
import { curbApiUrl } from '../constants';
import { determineParkingValidity } from './determine-parking-validity';
import { getCurbPoliciesById } from './get-curb-policies-by-id';
import { loadingState } from '../state.svelte';

// https://smart-curb-api-726931983438.us-east4.run.app/curbs/zones?min_lat=42.34778270782263&min_lng=-71.06194793559055&max_lat=42.34851779803651&max_lng=-71.06320923102157&include_geometry=true

// Select area params
// min_lng
// min_lat
// max_lng
// max_lat

const transformData = async (data, policies, day, time) => {
	if (!data.data) return null;
	let { zones } = data.data;
	zones = await Promise.all(
		zones.map(async (z) => {
			let properties = { ...z };
			delete properties.geometry;

			const { curb_policy_ids } = z;

			const zonePolicies = curb_policy_ids.map((id) => policies[id]);

			properties = await determineParkingValidity(zonePolicies, properties, day, time);

			let nextFeature = {
				type: 'Feature',
				properties,
				geometry: z?.geometry
			};
			return nextFeature;
		})
	);
	return {
		type: 'FeatureCollection',
		features: zones
	};
};

const getCurbZonesByArea = async (min_lng, min_lat, max_lng, max_lat, day, time) => {
	loadingState.loading = true;

	let allPolicies;
	let resultData;

	const url = `${curbApiUrl}/curbs/zones?min_lng=${min_lng}&min_lat=${min_lat}&max_lng=${max_lng}&max_lat=${max_lat}`;
	resultData = await fetchUrl({ url, method: 'GET' });

	let allPolicyIds = (resultData?.data?.zones ?? []).map((z) => z?.curb_policy_ids ?? []).flat();
	allPolicyIds = [...new Set(allPolicyIds)];

	allPolicies = await getCurbPoliciesById(allPolicyIds);
	allPolicies = allPolicies.reduce((acc, p) => {
		acc[p?.curb_policy_id] = p;
		return acc;
	}, {});

	const transformedResult = await transformData(resultData, allPolicies, day, time);

	loadingState.loading = false;

	return transformedResult;
};

// Radius
// radius
// lng
// lat

const getCurbZonesByRadius = async (lng, lat, radius, day, time) => {
	loadingState.loading = true;

	const url = `${curbApiUrl}/curbs/zones?lng=${lng}&lat=${lat}&radius=${radius}`;
	const resultData = await fetchUrl({ url, method: 'GET' });

	let allPolicyIds = (resultData?.data?.zones ?? []).map((z) => z?.curb_policy_ids ?? []).flat();
	allPolicyIds = [...new Set(allPolicyIds)];

	let allPolicies = await getCurbPoliciesById(allPolicyIds);
	allPolicies = allPolicies.reduce((acc, p) => {
		acc[p?.curb_policy_id] = p;
		return acc;
	}, {});

	const transformData = async (data) => {
		if (!data.data) return null;
		let { zones } = data.data;
		zones = await Promise.all(
			zones.map(async (z) => {
				let properties = { ...z };
				delete properties.geometry;

				const { curb_policy_ids } = z;

				const zonePolicies = curb_policy_ids.map((id) => allPolicies[id]);

				properties = await determineParkingValidity(zonePolicies, properties, day, time);

				let nextFeature = {
					type: 'Feature',
					properties,
					geometry: z?.geometry
				};
				return nextFeature;
			})
		);
		return {
			type: 'FeatureCollection',
			features: zones
		};
	};

	const transformedResult = await transformData(resultData);

	loadingState.loading = false;

	return transformedResult;
};

// Alternative
// include_geometry: false
// time: 1765498738000

export { getCurbZonesByArea, getCurbZonesByRadius };
