const fetchUrl = async ({ url, method = 'GET', body }) => {
	let data = [];

	try {
		let response = await fetch(url, {
			method: method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				//Authorization: `Bearer ${token}`
			},
			...(body && { body })
		});
		const res = await response.json();
		data = res;
	} catch (err) {
		console.warn(`Request failed: ${err}`);
	}

	return data;
};

export { fetchUrl };
