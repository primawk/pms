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

const deleteTarget = ({ id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/target/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const editTarget = (id, data) => {
  return request(`${MINING_ACTIVITY_MODEL}/target/${id}`, {
    method: 'PUT',
    headers: authHeader(),
    data
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

export async function getEdit(id) {
  const url = await `${MINING_ACTIVITY_MODEL}/target/${id}`;
  const promise = await axios.get(url, {
    method: 'GET',
    headers: authHeader()
  });
  return promise.data.data;
}

const ProductionService = {
  getTarget,
  deleteTarget,
  addTarget,
  getTargetDetail,
  editTarget
};

export default ProductionService;
