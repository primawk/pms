import { request } from 'utils/request';
import { ACCOUNT_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getUser = ({ page, row = 10, role, search }) => {
  return request(`${ACCOUNT_MODEL}/user`, {
    params: {
      page,
      row,
      role,
      search
    },
    headers: authHeader()
  });
};

const UserManagementService = {
  getUser
};

export default UserManagementService;
