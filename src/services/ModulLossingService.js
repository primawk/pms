import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';
import axios from 'axios';

const getHill = ({ startDate, endDate, sort, page, limit, id }) => {
  const params = [];

  if (startDate) {
    params.push(['start_date', startDate]);
  }
  if (endDate) {
    params.push(['end_date', endDate]);
  }
  if (sort) {
    params.push(['sort', sort]);
  }
  if (page) {
    params.push(['page', page]);
  }
  if (limit) {
    params.push(['limit', limit]);
  }
  if (id) {
    params.push(['hill_id', id]);
  }

  return request(`${MINING_ACTIVITY_MODEL}/lossing/hill`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getDay = ({ date, hillId }) => {
  const params = [];

  if (date) {
    params.push(['date', date]);
  }
  if (hillId) {
    params.push(['hill_id', hillId]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/lossing/day`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getSummary = ({ startDate, endDate }) => {
  // cannot empty object
  const params = [];

  if (startDate) {
    params.push(['start_date', startDate]);
  }
  if (endDate) {
    params.push(['end_date', endDate]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/lossing/summary`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const inputEstimation = (data) => {
  return request(`${MINING_ACTIVITY_MODEL}/lossing/estimation`, {
    method: 'POST',
    headers: authHeader(),
    data: data
  });
};

const downloadEstimation = async ({ id, startDate, endDate }) => {
  const url = `${MINING_ACTIVITY_MODEL}/lossing/download`;
  const promise = await axios.get(url, {
    responseType: 'blob',
    headers: {
      Authorization: authHeader(),
      'Content-Type': 'application/csv'
    },
    params: {
      hill_id: id
    }
  });
  return promise.data;
};

// export async function downloadTransactionSellerCsv(token, order_type, status) {
//   const url = `${API_TRANSACTION}/history/seller/csv`;
//   const promise = await axios.get(url, {
//     responseType: 'blob',
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/csv'
//     },
//     params: {
//       order_type,
//       status
//     }
//   });
//   return promise.data;
// }

const ModulLossingService = {
  getSummary,
  getHill,
  downloadEstimation,
  inputEstimation,
  getDay
  // inputModulLossing,
  // editModulLossing
};

export default ModulLossingService;
