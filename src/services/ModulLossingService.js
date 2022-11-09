import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

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

const ModulLossingService = {
  getSummary,
  getHill
  // inputModulLossing,
  // editModulLossing
};

export default ModulLossingService;
