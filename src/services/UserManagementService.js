import { request } from 'utils/request';
import { ACCOUNT_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getUser = ({ page, row = 10, role, search }) => {
  return request(`${ACCOUNT_MODEL}/user`, {
    method: 'GET',
    params: {
      page,
      row,
      role,
      search
    },
    headers: authHeader()
  });
};

const createUser = (userData) => {
  return request(`${ACCOUNT_MODEL}/register`, {
    method: 'POST',
    data: userData,
    headers: authHeader()
  });
};

const updateUser = ({ id, name, birthdate, phone, username, role_id, password }) => {
  const changePasswordData = {
    name,
    email: '',
    birthdate,
    phone,
    username,
    role_id,
    new_password: password
  };
  const oldPasswordData = { name, birthdate, email: '', phone, username, role_id };
  return request(`${ACCOUNT_MODEL}/user/${id}`, {
    method: 'PUT',
    data: !!password ? changePasswordData : oldPasswordData,
    headers: authHeader()
  });
};

const getUserById = ({ id }) => {
  return request(`${ACCOUNT_MODEL}/user/${id}`, {
    method: 'GET',
    headers: authHeader()
  });
};

const loginUser = ({ email, password }) => {
  return request(`${ACCOUNT_MODEL}/login`, {
    method: 'POST',
    data: { email, password }
  });
};

const deleteUser = ({ id }) => {
  return request(`${ACCOUNT_MODEL}/user/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const UserManagementService = {
  getUser,
  loginUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

export default UserManagementService;
