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

const createRole = (roleData) => {
  return request(`${ACCOUNT_MODEL}/role`, {
    method: 'POST',
    data: roleData,
    headers: authHeader()
  });
};

const updateRole = (roleData, id) => {
  return request(`${ACCOUNT_MODEL}/role/${id}`, {
    method: 'PUT',
    data: roleData,
    headers: authHeader()
  });
};

const getRoleById = ({ id }) => {
  return request(`${ACCOUNT_MODEL}/role/${id}`, {
    method: 'GET',
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
  deleteRole,
  createRole,
  getRoleById,
  updateRole
};

export default RoleService;
