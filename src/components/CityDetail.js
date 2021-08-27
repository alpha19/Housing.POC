import React, { useState } from "react"
import { useParams } from "react-router-dom"

import PropertyList from "./PropertyList"
import PropertyListings from "../services/PropertyListings"

// styles

const CityDetail= props => {
	const [currentListings, setListings] = useState(getInitialListings())


	  function getInitialListings() {
	  	return []
	  }

	let { cityName, stateName } = useParams()


	const queryProperties = async () => {
		const listings = new PropertyListings(cityName, stateName)
		var newListings = await listings.getListings()
		setListings([...currentListings, ...newListings])
  	}

	return (
		<div className="container">
			<div className="inner">
				<header>
					<h1>{ cityName }</h1>
				</header>
			</div>
			<PropertyList 
				listings= { currentListings }
			/>
			<button onClick={() => queryProperties() }>
				Query
			</button>
		</div>
	)
}

export default CityDetail