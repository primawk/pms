import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';
import axios from 'axios';

const getReport = ({ page, row, report_type, keyword, startDate, endDate, companyName } = {}) => {
  const params = [];

  // console.log(companyName);
  if (startDate) {
    params.push(['start_date', startDate]);
  }
  if (endDate) {
    params.push(['end_date', endDate]);
  }
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
  if (keyword) {
    params.push(['sample_code', keyword]);
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

const getReportDaily = (startDate) => {
  const params = [];

  if (startDate.start_date) {
    params.push(['start_date', startDate.start_date]);
  }
  if (startDate.end_date) {
    params.push(['end_date', startDate.end_date]);
  }

  return request(`${MINING_ACTIVITY_MODEL}/report/daily?report_type=external`, {
    method: 'GET',
    params: new URLSearchParams(params),
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

// INPUT MANY
const inputReportExternalMany = (data, attachment) => {
  console.log(data);
  var formData = new FormData();

  for (var key in data) {
    formData.append(key, JSON.stringify(data[key]));
  }
  for (var key in attachment) {
    formData.append(key, attachment[key]);
  }

  // form_data.append('attachment', attachment);
  // console.log FORMDATA
  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }

  return request(`${MINING_ACTIVITY_MODEL}/report/create-many`, {
    method: 'POST',
    headers: authHeader(),
    data: formData
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
  return promise;
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
  return promise?.data?.data;
}

export async function fetchExternalCompany(companyName) {
  // const page = 5;
  // const row = 2;
  const params = [];

  console.log(companyName);

  // if (startDate) {
  //   params.push(['start_date', startDate]);
  // }
  // if (endDate) {
  //   params.push(['end_date', endDate]);
  // }
  // if (page) {
  //   params.push(['page', page]);
  // }
  // if (row) {
  //   params.push(['row', row]);
  // }
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
  getReportDaily,
  deleteReport,
  inputReport,
  inputReportExternal,
  inputReportExternalMany,
  editReportExternal,
  editReport,
  getPdf,
  getHistory
};

export default LabService;
