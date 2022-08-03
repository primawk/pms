import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getActivity = ({ page, row, activity_type, dome_id, start_date, end_date } = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  if (dome_id) {
    params.push(['dome_id', dome_id]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getActivityById = ({ id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/activity/${id}`, {
    method: 'GET',
    headers: authHeader()
  });
};

const getSummary = ({ activity_type, start_date, end_date } = {}) => {
  const params = [];
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity/summary`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getDomeSummary = ({ page, row, inventory_type, dome_id, start_date, end_date } = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  if (inventory_type) {
    params.push(['inventory_type', inventory_type]);
  }
  if (dome_id) {
    params.push(['dome_id', dome_id]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity/dome`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const MiningActivityService = {
  getActivity,
  getSummary,
  getDomeSummary,
  getActivityById
};

export default MiningActivityService;
