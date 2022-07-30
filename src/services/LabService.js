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
  return request(`${MINING_ACTIVITY_MODEL}/report`, {
    method: 'POST',
    headers: authHeader(),
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

export async function fetchInternal() {
  const url = `${MINING_ACTIVITY_MODEL}/report?report_type=internal`;
  const promise = await axios.get(url);
  return promise.data.data;
}

export async function fetchExternal() {
  const url = `${MINING_ACTIVITY_MODEL}/report?report_type=external`;
  const promise = await axios.get(url);
  return promise.data.data;
}

const LabService = {
  getReport,
  getReportDetail,
  deleteReport,
  inputReport,
  editReport
};

export default LabService;
