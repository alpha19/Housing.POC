import React from "react"

import CityItem from "./CityItem"

const List = props => {
	return (
	<ul>
		{ props.cities.map(city => (
			<CityItem
				key={city.id} 
				city={city} 
				deleteCity={ props.deleteCity }
				updateCity={ props.updateCity }>
			</CityItem>)
			)
		}
	</ul>
	)
}

export default List