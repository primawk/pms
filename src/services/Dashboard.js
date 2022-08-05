import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getTarget = ({ year }) => {
  console.log('test');
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

const ProductionService = {
  getTarget
};

export default ProductionService;
