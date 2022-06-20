import React, { useState, useEffect } from "react"
import { useRouteMatch, useLocation } from 'react-router-dom'

import Listings from './Listings'

import { updateListings } from 'shared/utils/listings';

import { StyledCity, ActionButton } from './styles'

const City = ( { setTitle } ) => {
	const match = useRouteMatch();
	const location = useLocation();

	const city = location.state.city;
	const id = match.params.id;

	const [listings, setListings] = updateListings(id);
	const [querying, setQuerying] = useState(false);

  	const query = async () => {
  		setQuerying(true);
  		setListings();
		setQuerying(false);
  	}

  	useEffect(() => { setTitle(city) });

	return (
		<StyledCity>	
          <ActionButton onClick={() => query() } type="submit" variant="primary" isWorking={ querying }>Query</ActionButton>
		  <Listings listings = { listings } />
		</StyledCity>
	)
}

export default City