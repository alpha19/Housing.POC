import { useState, useEffect } from "react"

import api from 'shared/utils/api'

let num = 0;

export const updateListings = (id) => {
	const [listings, setListings] = useState([]);

	const getInitialListings = () => {
		api.get(`/api/listings/${id}`).then(result => {
			console.log(`Requesting current listing information`);
			setListings(result[Object.keys({listings})]); 
		});
	}

	const customUpdateListings = () => {
		api.put(`/api/listings/${id}`).then(result => {
			console.log(`Requesting updated listing information`);
			setListings(result[Object.keys({listings})]); 
		});
	}

	useEffect(() => {
    	getInitialListings();
  	},[]);

	return [listings, customUpdateListings];
}