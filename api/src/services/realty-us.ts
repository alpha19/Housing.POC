import api from '../utils/api'

const urlBase = 'https://realty-in-us.p.rapidapi.com';
const headers = {
   'x-rapidapi-host': urlBase,
   'x-rapidapi-key': process.env.REACT_APP_RAPID_API_REALTY_IN_US
};		

 export default {
  get: (...args: any) => api.get(urlBase, headers, ...args),
  post: (...args: any) => api.post(urlBase, headers, ...args),
  put: (...args: any) => api.put(urlBase, headers, ...args),
  patch: (...args: any) => api.patch(urlBase, headers, ...args),
  delete: (...args: any) => api.delete(urlBase, headers, ...args),
};