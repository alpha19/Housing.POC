import api from './api';

export const getCities = () => {
	const { cities } = api.get('/api/cities');
	return JSON.parse(cities);
}

export const getCity = id => {
	const { city } = api.get('/api/city/{id}');
	return JSON.parse(city);
}

export const deleteCity = id => {
	api.delete('/api/city/{id}');
}