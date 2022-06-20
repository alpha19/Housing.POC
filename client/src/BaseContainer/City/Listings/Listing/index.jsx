import React from "react"

import { StyledListing } from './styles'

const Listing= ( { listing } ) => {
	const { address, price, link } = listing;
	const title = address + " (Price: $" + parseInt(price).toLocaleString() + ")";

	return (
		<StyledListing>
			<div>
				<a href={ link }>{ title }</a>
			</div>
		</StyledListing>
	)
}

export default Listing