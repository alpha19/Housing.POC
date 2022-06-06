import axios, { AxiosRequestHeaders, Method } from 'axios';

import { objectToQueryString } from 'utils/url';

const defaults = {
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong. Please check internet connection. Otherwise who knows...',
    status: 503,
    data: {},
  },
};

const api = (method: Method, urlBase: string, headers: AxiosRequestHeaders, url: string, variables: any) =>
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
            console.log(error.response);
            reject(error.response.data.error);
        } else {
          reject(defaults.error);
        }
      },
    );
  });

 export default {
  get: (...args: any[]) => (<any>api)('get', ...args),
  post: (...args: any[]) => (<any>api)('post', ...args),
  put: (...args: any[]) => (<any>api)('put', ...args),
  patch: (...args: any[]) => (<any>api)('patch', ...args),
  delete: (...args: any[]) => (<any>api)('delete', ...args),
};