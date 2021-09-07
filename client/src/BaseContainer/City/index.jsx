import React from "react"

import Listings from './Listings'

import { StyledCity } from './Styles'

const City = ({ location }) => {
	const city = location.cityProps.city

	return (
		<StyledCity>
			<Listings city={ city } />
		</StyledCity>
	)
}

export default City