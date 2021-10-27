import React from "react"

import Listing from "./Listing"

const Listings = ({ city, listings }) => {
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