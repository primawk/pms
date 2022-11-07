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

const getSummary = () => {
  // cannot empty object
  return request(`${MINING_ACTIVITY_MODEL}/bank/summary`, {
    method: 'GET',
    headers: authHeader()
  });
};

const inputBankData = (data, attachment) => {
  var formData = new FormData();

  for (var key in data) {
    formData.append(key, JSON.stringify(data[key]));
  }
  for (var pdf in attachment) {
    formData.append(pdf, attachment[pdf]);
  }

  // form_data.append('attachment', attachment);
  // console.log FORMDATA
  // for (var pair of formData.entries()) {
  //   console.log(pair[0] + ', ' + pair[1]);
  // }

  return request(`${MINING_ACTIVITY_MODEL}/bank`, {
    method: 'POST',
    headers: authHeader(),
    data: formData
  });
};

const editBankData = (data, attachment, existing, id) => {
  var formData = new FormData();

  for (var key in data) {
    formData.append(key, JSON.stringify(data[key]));
  }
  for (var pdf in attachment) {
    formData.append(pdf, attachment[pdf]);
  }
  for (var row in existing) {
    formData.append(row, existing[row]);
  }

  // form_data.append('attachment', attachment);
  // console.log FORMDATA
  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }

  return request(`${MINING_ACTIVITY_MODEL}/bank/${id}`, {
    method: 'PUT',
    headers: authHeader(),
    data: formData
  });
};

const BankDataService = {
  getSummary,
  getBankData,
  inputBankData,
  editBankData
};

export default BankDataService;
