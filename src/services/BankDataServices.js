import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getBankData = ({ startDate, endDate, orderBy, sort, page, limit, id, reportType }) => {
  const params = [];

  if (startDate) {
    params.push(['start_date', startDate]);
  }
  if (endDate) {
    params.push(['end_date', endDate]);
  }
  if (orderBy) {
    params.push(['order_by', orderBy]);
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
    params.push(['id', id]);
  }
  if (reportType) {
    params.push(['report_type', reportType]);
  }

  return request(`${MINING_ACTIVITY_MODEL}/bank`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getSummary = () => { // cannot empty object
  return request(`${MINING_ACTIVITY_MODEL}/bank/summary`, {
    method: 'GET',
    headers: authHeader()
  });
};

const BankDataService = {
  getSummary,
  getBankData
};

export default BankDataService;
