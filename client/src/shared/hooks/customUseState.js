import { useState, useEffect } from "react"

import api from 'shared/utils/api'

export const customUseState = (request, field, initState) => {
	const [prop, setProp] = useState(initState);

	const customSetProp = () => {
		api.get(request).then(result => {
			console.log(`Requesting ${field} information`);
			setProp(result[field]); 
		});
	}

	useEffect(() => {
    	customSetProp()
  	}, initState);
	
	return [prop, customSetProp];
}