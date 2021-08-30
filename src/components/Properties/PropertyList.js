import React, { useState, useEffect } from "react"

import PropertyHeader from "./PropertyHeader"

import PropertyListings from "../../services/PropertyListings"

const PropertyList = props => {
	const [listings, setListings] = useState(getInitialListings())

  	function getInitialListings() {
  		const temp = localStorage.getItem("listings")
  		const savedListings = JSON.parse(temp)
  		return savedListings || {}
  	}

  	let city = props.city

  	const queryProperties = async () => {
		const listingService = new PropertyListings(city.cityName, city.stateName)
		var newListings = await listingService.getListings()

		let tempListings = { [city.id] : newListings }
		console.log(tempListings)
		setListings({ ...listings, [city.id] : newListings })
  	}

  	useEffect(() => {
  		const temp = JSON.stringify(listings)
  		localStorage.setItem("listings", temp)
  	}, [listings])

	return (
	<>
		<ul>
			{ (listings.[city.id] || []).map(property => (
				<PropertyHeader
					key={ property.id } 
					property={ property }>
				</PropertyHeader>)
				)
			}
		</ul>
		<button className="input-submit" onClick={() => queryProperties() }>Query</button>
	</>
	)
}

export default PropertyList