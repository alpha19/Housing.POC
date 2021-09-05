import React from "react"

import Listings from './Listings'

import { StyledCity } from './Styles'

const City = props => {
	const city = props.location.city

	return (
		<StyledCity>
			<Listings city={ city } />
		</StyledCity>
	)
}

export default City