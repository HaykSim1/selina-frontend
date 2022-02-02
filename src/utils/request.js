import { ENDPOINT } from 'config/api';

/**
 * Function for request to backend and parse data to json
 * @param url - string
 * @param method - string
 * @param body - object
 * @param headers - object
 * @returns {Promise<any>}
 */
async function request(url, method = 'GET', body = null, headers = {}) {
	return fetch(`${ENDPOINT}${url}`, {
		headers: {
			'Content-Type': 'application/json',
			...headers
		},
		method,
		body,
	})
		.then(res => res.json())
		.catch(console.log)
}

export default request;