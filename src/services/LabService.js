import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';
import axios from 'axios';

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

const deleteReport = ({ id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/report/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const inputReport = (formData) => {
  console.log(formData);
  return request(`${MINING_ACTIVITY_MODEL}/report`, {
    method: 'POST',
    headers: {
      Authorization: authHeader(),
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      type: 'formData'
    },
    data: formData
  });
};

const editReport = ({ data, id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/report/${id}`, {
    method: 'PUT',
    headers: authHeader(),
    data
  });
};

export async function fetchInternal({ startDate, endDate } = {}) {
  const params = [];
  if (startDate) {
    params.push(['start_date', startDate]);
  }
  if (endDate) {
    params.push(['end_date', endDate]);
  }
  const url = `${MINING_ACTIVITY_MODEL}/report?report_type=internal`;
  const promise = await axios.get(url, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
  return promise.data.data;
}

export async function fetchExternal() {
  const url = `${MINING_ACTIVITY_MODEL}/report?report_type=external`;
  const promise = await axios.get(url);
  return promise.data.data.reduce((groups, item) => {
    const group = groups[item.company_name] || [];
    group.push(item);
    groups[item.company_name] = group;
    return groups;
  }, {});
}

const LabService = {
  getReport,
  getReportDetail,
  deleteReport,
  inputReport,
  editReport
};

export default LabService;
