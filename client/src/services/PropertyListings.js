// Imports
import { v4 as uuidv4 } from "uuid"

import RestRequest from "../utils/RestRequest"

class PropertyListings {
	constructor(city, state) {
		this.cityName = city
		this.stateName = state
		this.apiKey = process.env.REACT_APP_RAPID_API_REALTY_IN_US
		this.urlBase = 'realty-in-us.p.rapidapi.com'
	}

	async getListings() {
		const endPoint = '/properties/v2/list-for-sale'

		const params = {
			city: this.cityName,
			state_code: this.stateName,
			offset: 0,
			limit: 20,
			sort: 'relevance'
		}
 
		const headers = {
			'x-rapidapi-host': this.urlBase,
			'x-rapidapi-key': this.apiKey
		}

		let rest = new RestRequest(this.urlBase, this.apiKey)
		let body = await rest.get(endPoint, params, headers)
		let properties = []


		for (var key in body["properties"])
		{
			var val = body["properties"][key]
			const property = {
				id: uuidv4(),
				price: val["price"],
				address: val["address"]["line"],
				link: val["rdc_web_url"],
			}
			properties.push(property)
		}

		return properties
	}
}

export default PropertyListings