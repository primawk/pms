/**
 *
 * Copyright shared ownership by PT Telkom Indonesia Tbk and PT Insan Agritama Teknologi
 * Both parties may use and modify this file and any modifications will be owned by modifiers
 * Both parties may use this file for commercial purpose
 * For more information, please contact reza.dwi@telkom.co.id, dita.aprilani@telkom.co.id or shiddiq@inagri.asia
 *
 */

import axios from "axios";

/**
 * Defines request urls
 *
 * @param  {string} model   URL of the requested model
 *
 * @return {string}         An API url for the requested model
 */
export const getRequestURL = (model) => model;
// export const getRequestURL = (model) => `https://${model}`;

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function request(url, options) {
  return axios.request({
    url,
    timeout: 100000000,
    ...options,
  });
}
