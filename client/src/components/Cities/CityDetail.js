import React from "react"

import PropertyList from "../Properties/PropertyList"

const CityDetail= props => {
	return (
		<div className="container">
			<div className="inner">
				<header>
					<h1>{ props.city.cityName }</h1>
				</header>
			</div>
			<PropertyList 
				city =  { props.city }
			/>
		</div>
	)
}

export default CityDetail