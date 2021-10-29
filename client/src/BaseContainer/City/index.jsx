import React, { useState, useEffect } from "react"
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import Listings from './Listings'

import PropertyListings from "../../services/PropertyListings"

import { StyledCity, ActionButton } from './styles'

const City = ({ setTitle }) => {
	const match = useRouteMatch()
	const city = match.params.cityName
	const state = match.params.stateName

	const [isUpdating, setIsUpdating] = useState(false)
	const [listings, setListings] = useState(getInitialListings())

	function getInitialListings() {
  		const temp = localStorage.getItem("listings")
  		const savedListings = JSON.parse(temp)
  		return savedListings || {}
  	}

  	const queryProperties = async () => {
  		setIsUpdating(true)

		const listingService = new PropertyListings(city, state)
		var newListings = await listingService.getListings()

		let tempListings = { [city.id] : newListings }
		console.log(tempListings)
		setListings({ ...listings, [city.id] : newListings })

		setIsUpdating(false)
  	}

  	useEffect(() => {
  		const temp = JSON.stringify(listings)
  		localStorage.setItem("listings", temp)
  	}, [listings])

  	useEffect(() => {
		setTitle(city)
  	})

	return (
		<StyledCity>	
          <ActionButton onClick={() => queryProperties() } type="submit" variant="primary" isWorking={isUpdating}>Query</ActionButton>
		  <Listings city={ city } listings = { listings } />
		</StyledCity>
	)
}

export default City