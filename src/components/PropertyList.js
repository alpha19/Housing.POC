import React from "react"

import PropertyTitle from "./PropertyTitle"

const PropertyList = props => {
	return (
	<ul>
		{props.listings.map(property => (
			<PropertyTitle
				key={property.id} 
				property={ property }>
			</PropertyTitle>)
			)
		}
	</ul>
	)
}

export default PropertyList