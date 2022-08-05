import { request } from 'utils/request';
import { INVENTORY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getHill = ({ inventory_type }) => {
  return request(`${INVENTORY_MODEL}/hill`, {
    method: 'GET',
    params: {
      inventory_type
    },
    headers: authHeader()
  });
};

const getDome = ({ inventory_type }) => {
  return request(`${INVENTORY_MODEL}/dome`, {
    method: 'GET',
    params: {
      inventory_type
    },
    headers: authHeader()
  });
};

const InventoryService = {
  getHill,
  getDome
};

export default InventoryService;
