import React, { useState, useEffect } from "react"

import Listing from "./Listing"

import PropertyListings from "../../../services/PropertyListings"

const Listings = props => {
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
		<ul>
			{ (listings[city.id] || []).map(property => (
				<Listing
					key={ property.id } 
					property={ property }>
				</Listing>)
				)
			}
		</ul>
	)
}

export default Listings