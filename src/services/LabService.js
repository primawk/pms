import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';
import axios from 'axios';

const getReport = ({ page, row, report_type, companyName } = {}) => {
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
  if (companyName) {
    params.push(['company_name', companyName]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/report`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getReportDetail = ({ id } = {}) => {
  return request(`${MINING_ACTIVITY_MODEL}/report/${id}`, {
    method: 'GET',
    headers: authHeader()
  });
};

const getPdf = (attachment) => {
  return request(`${MINING_ACTIVITY_MODEL}/report/pdf/${attachment}`, {
    method: 'GET',
    headers: authHeader(),
    responseType: 'blob'
  });
};

const deleteReport = ({ id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/report/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const inputReport = (data) => {
  var form_data = new FormData();

  for (var key in data) {
    form_data.append(key, data[key]);
  }

  return request(`${MINING_ACTIVITY_MODEL}/report`, {
    method: 'POST',
    headers: authHeader(),
    data: form_data
  });
};

const inputReportExternal = (data, attachment) => {
  var form_data = new FormData();

  for (var key in data) {
    form_data.append(key, data[key]);
  }
  form_data.append('attachment', attachment);

  return request(`${MINING_ACTIVITY_MODEL}/report`, {
    method: 'POST',
    headers: authHeader(),
    data: form_data
  });
};

const editReport = (data, id) => {
  var form_data = new FormData();

  for (var key in data) {
    form_data.append(key, data[key]);
  }

  return request(`${MINING_ACTIVITY_MODEL}/report/${id}`, {
    method: 'PUT',
    headers: authHeader(),
    data: form_data
  });
};

const editReportExternal = (formData, id) => {
  return request(`${MINING_ACTIVITY_MODEL}/report/${id}`, {
    method: 'PUT',
    headers: authHeader(),
    data: formData
  });
};

export async function fetchInternal({ startDate, endDate }, page, row) {
  const params = [];

  if (startDate) {
    params.push(['start_date', startDate]);
  }
  if (endDate) {
    params.push(['end_date', endDate]);
  }
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }

  const url = `${MINING_ACTIVITY_MODEL}/report?report_type=internal`;
  const promise = await axios.get(url, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
  return promise.data.data;
}

export async function fetchExternal(page, row, companyName) {
  // const page = 5;
  // const row = 2;
  const params = [];

  // if (startDate) {
  //   params.push(['start_date', startDate]);
  // }
  // if (endDate) {
  //   params.push(['end_date', endDate]);
  // }
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  if (companyName) {
    params.push(['company_name', companyName]);
  }
  const url = `${MINING_ACTIVITY_MODEL}/report?report_type=external`;
  const promise = await axios.get(url, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
  return promise.data.data;
}

export async function fetchExternalCompany({ startDate, endDate }, page, row, companyName) {
  // const page = 5;
  // const row = 2;
  const params = [];

  if (startDate) {
    params.push(['start_date', startDate]);
  }
  if (endDate) {
    params.push(['end_date', endDate]);
  }
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  if (companyName) {
    params.push(['company_name', companyName]);
  }
  const url = `${MINING_ACTIVITY_MODEL}/report?report_type=external`;
  const promise = await axios.get(url, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
  return promise;
}

export async function getHistory(id) {
  const url =
    await `${MINING_ACTIVITY_MODEL}/modification-history?table=lab_report&history_id=${id}`;
  const promise = await axios.get(url, {
    method: 'GET',
    headers: authHeader()
  });
  return promise.data.data.reduce((groups, item) => {
    const group = groups[item.updated_at] || [];
    group.push(item);
    groups[item.updated_at] = group;
    return groups;
  }, {});
}

const LabService = {
  getReport,
  getReportDetail,
  deleteReport,
  inputReport,
  inputReportExternal,
  editReportExternal,
  editReport,
  getPdf,
  getHistory
};

export default LabService;
