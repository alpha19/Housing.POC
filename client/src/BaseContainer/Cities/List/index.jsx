import React from "react"

import CityItem from "./CityItem"

const List = props => {
	return (
	<ul>
		{ props.cities.map(city => ( <ListItem id={ city.id } setCities = { props.setCities } /> )}
	</ul>
	)
}

export default List