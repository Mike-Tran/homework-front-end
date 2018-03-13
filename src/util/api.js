export function getGifRequest () {
	return fetch(
		`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=hekEwhW2LgJ7pUX7D72F72pPk281Ot1H&offset=${this.state.offSet}`, {
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