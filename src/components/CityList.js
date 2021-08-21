import React from "react"

import CityTitle from "./CityTitle"

const CityList = props => {
	return (
	<ul>
		{props.cities.map(city => (
			<CityTitle
				key={city.id} 
				city={city} 
				deleteCity={ props.deleteCity }
				updateCity={ props.updateCity }>
			</CityTitle>)
			)
		}
	</ul>
	)
}

export default CityList