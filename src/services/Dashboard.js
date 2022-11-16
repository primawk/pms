import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';
import axios from 'axios';

const getTarget = ({ year }) => {
  const params = [];

  if (year) {
    params.push(['year', year]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/target`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getTargetShipment = ({ year }) => {
  const params = [];

  if (year) {
    params.push(['year', year]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/shipment-target`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

export async function getDefaultYear() {
  const url = await `${MINING_ACTIVITY_MODEL}/target`;
  const promise = await axios.get(url, {
    method: 'GET',
    headers: authHeader()
  });
  return promise.data.data.map((item) => item.year);
}

const getRealization = ({ year }) => {
  const params = [];
  const activity_type = 'eto-to-efo';

  if (year) {
    params.push(['year', year]);
  }
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/target/chart`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getRealizationShipment = ({ year }) => {
  const params = [];
  const activity_type = 'eto-to-efo';

  if (year) {
    params.push(['year', year]);
  }
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/shipment-target/chart`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const deleteTarget = ({ _id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/target/${_id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const editTarget = (id, data) => {
  return request(`${MINING_ACTIVITY_MODEL}/target/${id}`, {
    method: 'PUT',
    headers: authHeader(),
    data: data
  });
};

const getTargetDetail = ({ id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/target/${id}`, {
    method: 'GET',
    headers: authHeader()
  });
};

const addTarget = (data) => {
  return request(`${MINING_ACTIVITY_MODEL}/target`, {
    method: 'POST',
    headers: authHeader(),
    data
  });
};

export async function getTargetYear(year) {
  const params = [];

  if (year) {
    params.push(['year', year]);
  }
  const url = await `${MINING_ACTIVITY_MODEL}/target`;
  const promise = await axios.get(url, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
  return promise.data.data;
}

export async function getEdit(year) {
  const url = await `${MINING_ACTIVITY_MODEL}/target/?year=${year}`;
  const promise = await axios.get(url, {
    method: 'GET',
    headers: authHeader()
  });
  return promise.data;
}

const ProductionService = {
  getTarget,
  getRealization,
  deleteTarget,
  addTarget,
  getTargetDetail,
  editTarget,
  getRealizationShipment,
  getTargetShipment
};

export default ProductionService;
