import fetch from 'cross-fetch';

/**
 *
 * @param {string} searchTerm
 * @param {number} offSet
 * @returns {Promise<Response>}
 */
export function getGifRequest (searchTerm, offSet) {
	return fetch(
		`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=hekEwhW2LgJ7pUX7D72F72pPk281Ot1H&offset=${offSet}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'GET'
	}).then(res => {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	});
}

