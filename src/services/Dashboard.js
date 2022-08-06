import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

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

const addTarget = (data) => {
  return request(`${MINING_ACTIVITY_MODEL}/target`, {
    method: 'POST',
    headers: authHeader(),
    data
  });
};

const ProductionService = {
  getTarget,
  deleteTarget,
  addTarget
};

export default ProductionService;
