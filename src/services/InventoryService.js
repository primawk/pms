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

const createHill = ({ name, inventory_type }) => {
  return request(`${INVENTORY_MODEL}/hill`, {
    method: 'POST',
    data: { name, inventory_type },
    headers: authHeader()
  });
};

const editHill = ({ name, inventory_type, idHill }) => {
  return request(`${INVENTORY_MODEL}/hill/${idHill}`, {
    method: 'PUT',
    data: { name, inventory_type },
    headers: authHeader()
  });
};

const deleteHill = ({ idHill }) => {
  return request(`${INVENTORY_MODEL}/hill/${idHill}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const editDomeEfo = ({ name, inventory_type, idDome }) => {
  return request(`${INVENTORY_MODEL}/dome/efo/${idDome}`, {
    method: 'PUT',
    data: { name, inventory_type },
    headers: authHeader()
  });
};

const createDomeEfo = ({ name, inventory_type }) => {
  return request(`${INVENTORY_MODEL}/dome/efo`, {
    method: 'POST',
    data: { name, inventory_type },
    headers: authHeader()
  });
};

const deleteDome = ({ idDome }) => {
  return request(`${INVENTORY_MODEL}/dome/${idDome}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const deleteDomeEto = ({ dome_id }) => {
  return request(`${INVENTORY_MODEL}/dome/${dome_id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const createHillEto = ({ dome_list }) => {
  return request(`${INVENTORY_MODEL}/dome`, {
    method: 'POST',
    data: { dome_list },
    headers: authHeader()
  });
};

const editDomeEto = (data) => {
  return request(`${INVENTORY_MODEL}/dome`, {
    method: 'PUT',
    data: data,
    headers: authHeader()
  });
};

const InventoryService = {
  getHill,
  getDome,
  createHill,
  deleteHill,
  editHill,
  editDomeEfo,
  createDomeEfo,
  deleteDome,
  createHillEto,
  deleteDomeEto,
  editDomeEto
};

export default InventoryService;
