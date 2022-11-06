import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getSummary = ({ id } = {}) => {
  return request(`${MINING_ACTIVITY_MODEL}/bank/summary`, {
    method: 'GET',
    headers: authHeader()
  });
};

const BankDataService = {
  getSummary
};

export default BankDataService;
