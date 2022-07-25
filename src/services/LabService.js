import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getReport = ({ page, row, report_type } = {}) => {
  const params = [];
  if (report_type) {
    params.push(['report_type', report_type]);
  }
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/report`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getReportDetail = ({ id } = {}) => {
  // const params = [];
  // if (id) {
  //   params.push(['id', id]);
  // }

  return request(`${MINING_ACTIVITY_MODEL}/report/${id}`, {
    method: 'GET',
    // params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const LabService = {
  getReport,
  getReportDetail
};

export default LabService;
