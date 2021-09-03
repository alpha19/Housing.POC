import React from "react"

import PropertyList from "../Properties/PropertyList"

const CityDetail= props => {
	const city = props.location.city
	return (
		<City
			<header>
				<h1>{ city.cityName }</h1>
			</header>
		</div>
		<Listings
			city =  { city }
		/>
	)
}

export default City