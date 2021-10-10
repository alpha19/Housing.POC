import React from "react"

import Listings from './Listings'

import { StyledCity } from './styles'

const City = ({ location }) => {
	const city = location.cityProps.city

	return (
		<StyledCity>
			<Listings city={ city } />
			<button onClick={() => queryProperties() }>Query</button>
		</StyledCity>
	)
}

export default City