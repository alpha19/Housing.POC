import api from '../utils/api'

const defaults = {
	urlBase: 'https://realty-in-us.p.rapidapi.com'
	headers: () => ({
	   'x-rapidapi-host': urlBase,
	   'x-rapidapi-key': process.env.REACT_APP_RAPID_API_REALTY_IN_US
	}),		
}

 export default {
  get: (...args) => api.get(urlBase, headers, ...args),
  post: (...args) => api.post(urlBase, headers, ...args),
  put: (...args) => api.put(urlBase, headers, ...args),
  patch: (...args) => api.patch(urlBase, headers, ...args),
  delete: (...args) => api.delete(urlBase, headers, ...args),
};