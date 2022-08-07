import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';
import axios from 'axios';

const getTarget = ({ year }) => {
  const params = [];

  console.log(year);

  if (year) {
    params.push(['year', year]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/target`, {
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
  console.log(data);
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
  console.log(year);
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
  deleteTarget,
  addTarget,
  getTargetDetail,
  editTarget
};

export default ProductionService;
