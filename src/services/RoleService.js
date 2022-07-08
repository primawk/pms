import { request } from 'utils/request';
import { ACCOUNT_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getRole = ({ page, row } = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['group', row]);
  }
  return request(`${ACCOUNT_MODEL}/role`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const RoleService = {
  getRole
};

export default RoleService;
