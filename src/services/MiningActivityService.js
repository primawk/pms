import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getActivity = ({ page, row, activity_type } = {}) => {
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
  return request(`${MINING_ACTIVITY_MODEL}/activity`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getSummary = ({ page, row, activity_type } = {}) => {
  const params = [];
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity/summary`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const MiningActivityService = {
  getActivity,
  getSummary
};

export default MiningActivityService;
