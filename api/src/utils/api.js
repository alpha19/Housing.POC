import axios from 'axios';

import { objectToQueryString } from 'shared/utils/url';

const api = (method, urlBase, headers, url, variables) =>
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