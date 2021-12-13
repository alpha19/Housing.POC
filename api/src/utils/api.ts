import axios from 'axios';

import { objectToQueryString } from 'utils/url';

const api = (method: string, urlBase: string, headers: any, url: string, variables: any) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${urlBase}${url}`,
      method,
      headers: headers,
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
        if (error.response) {
            reject(error.response.data.error);
        } else {
          reject(defaults.error);
        }
      },
    );
  });

 export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
};