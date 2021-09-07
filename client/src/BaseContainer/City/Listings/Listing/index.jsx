import React from "react"

import { StyledListing } from './styles'

const Listing= props => {
	const { address, price, link} = props.property

	const title = address + " (Price: " + price + ")"
	return (
		<StyledListing>
			<div>
				<a href={link}>{title}</a>
			</div>
		</StyledListing>
	)
}

export default Listing