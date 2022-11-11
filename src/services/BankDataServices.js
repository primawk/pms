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

const editBankData = (data, attachment, existings, id) => {
  var formData = new FormData();
  console.log(existings);

  for (var body in data) {
    formData.append('body', JSON.stringify(data[body])); // naming the keys 'body
  }
  for (var files in attachment) {
    formData.append('files', attachment[files]);
  }
  for (var existing in existings) {
    formData.append('existing', existings[existing]);
  }

  // form_data.append('attachment', attachment);
  // console.log FORMDATA
  // for (var pair of formData.entries()) {
  //   console.log(pair[0] + ', ' + pair[1]);
  // }
  // Display the keys
  // for (const key of formData.keys()) {
  //   console.log(key);
  // }

  return request(`${MINING_ACTIVITY_MODEL}/bank/${id}`, {
    method: 'PUT',
    headers: authHeader(),
    data: formData
  });
};

const deleteData = ({ id }) => {
  console.log(id);
  return request(`${MINING_ACTIVITY_MODEL}/bank/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const BankDataService = {
  getSummary,
  getBankData,
  inputBankData,
  editBankData,
  deleteData
};

export default BankDataService;
