import { customUseState } from 'shared/hooks/customUseState'

import api from 'shared/utils/api'

export const getCities = () => {
	const [cities, setCities] = customUseState('/api/cities', 'cities', []);
	return [cities, setCities];
}

export const getCity = id => {
	const [city, setCity] = customUseState(`/api/city/${id}`, 'city', "");
	return [city, setCity];
}

export const addCity = (city, state, callback) => {
    api.post('/api/city', { city, state } ).then( result => { callback(); });
}

export const deleteCity = (id, callback) => {
	api.delete(`/api/city/${id}`).then( result => { callback(); });
}