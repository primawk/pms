import axios from 'axios';

/**
 * Defines request urls
 *
 * @param  {string} model   URL of the requested model
 *
 * @return {string}         An API url for the requested model
 */
export function request(url, options) {
  return axios.request({
    url,
    timeout: 100000000,
    ...options
  });
}
