import React from "react"

import Listing from "./Listing"

const Listings = ( { listings } ) => {
	return (<ul>{ listings.map( listing => ( <Listing key={ listing.id } listing={ listing }/> ))}</ul>)
}

export default Listings