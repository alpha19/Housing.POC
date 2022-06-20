import React from "react"

import ListItem from "./ListItem"

const List = ( { cities, setCities } ) => {
	return ( <ul>{ cities.map(city => (<ListItem key= { city.id } city={ city } setCities = { setCities } />)) }</ul> )
}

export default List