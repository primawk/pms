import { request } from 'utils/request';
import { ACCOUNT_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getRole = ({ page, row } = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  return request(`${ACCOUNT_MODEL}/role`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const deleteRole = ({ id }) => {
  return request(`${ACCOUNT_MODEL}/role/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const RoleService = {
  getRole,
  deleteRole
};

export default RoleService;
