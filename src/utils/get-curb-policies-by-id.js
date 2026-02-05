import { fetchUrl } from './fetch';
import { curbApiUrl } from '../constants';

const getCurbPoliciesById = async (ids) => {
	const url = `${curbApiUrl}/curbs/policies?ids=${ids.join(',')}`;
	const resultData = await fetchUrl({ url, method: 'GET' });

	if (!resultData) return [];

	return resultData.data.policies;
};

export { getCurbPoliciesById };
