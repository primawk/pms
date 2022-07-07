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

<<<<<<< HEAD
const loginUser = ({ email, password }) => {
  return request(`${ACCOUNT_MODEL}/login`, {
    method: 'POST',
    data: { email, password }
  });
};

const UserManagementService = {
  getUser,
  loginUser
=======
const UserManagementService = {
  getUser
>>>>>>> 62ae86f168d51c1f6aafcf52bfb6eb5ad6fff0f9
};

export default UserManagementService;
