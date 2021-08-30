// Imports
import 'axios'

class RestRequest {
	constructor (url, key) {	
		this.url = url
		this.key= key
	}

	async get(endPoint, params, headerParams) {
		const fullUrl = 'https://' + this.url + endPoint

		const options = {
			method: 'GET',
			url: fullUrl,
			params: params,
			headers: headerParams
		}

		const axios = require('axios');

		const result = await axios.request(options).then(result => result.data )
		return result
	}

	post(endPoint, data) {
	}

	put(endPoint, data) {
	}

	delete(endPoint) {
	}
}

export default RestRequest