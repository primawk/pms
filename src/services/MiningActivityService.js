import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getActivity = ({ page, row, activity_type, dome_id, hill_id, start_date, end_date } = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  if (dome_id) {
    params.push(['dome_id', dome_id]);
  }
  if (hill_id) {
    params.push(['hill_id', hill_id]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getActivityById = ({ id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/activity/${id}`, {
    method: 'GET',
    headers: authHeader()
  });
};

const getSummary = ({ activity_type, start_date, end_date } = {}) => {
  const params = [];
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity/summary`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getHistoryEdit = ({ table, history_id } = {}) => {
  const params = [];
  if (table) {
    params.push(['table', table]);
  }
  if (history_id) {
    params.push(['history_id', history_id]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/modification-history`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getDomeSummary = ({
  page,
  row,
  inventory_type,
  dome_id,
  start_date,
  end_date,
  hill_id
} = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  if (inventory_type) {
    params.push(['inventory_type', inventory_type]);
  }
  if (dome_id) {
    params.push(['dome_id', dome_id]);
  }
  if (hill_id) {
    params.push(['hill_id', hill_id]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity/inven-list`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const createActivity = (data) => {
  return request(`${MINING_ACTIVITY_MODEL}/activity`, {
    method: 'POST',
    data: {
      ...data,
      co_level: parseFloat(data?.co_level),
      co_metal_equivalent: parseFloat(data?.co_metal_equivalent),
      fe_level: parseFloat(data?.fe_level),
      fe_metal_equivalent: parseFloat(data?.fe_metal_equivalent),
      ni_level: parseFloat(data?.ni_level),
      ni_metal_equivalent: parseFloat(data?.ni_metal_equivalent),
      ritase_total: parseFloat(data?.ritase_total),
      simgo_level: parseFloat(data?.simgo_level),
      simgo_metal_equivalent: parseFloat(data?.simgo_metal_equivalent),
      tonnage_total: parseFloat(data?.tonnage_total),
      sublot_total: data?.sublot_total ? parseFloat(data?.sublot_total) : 0
    },
    headers: authHeader()
  });
};

const editActivity = (data, id) => {
  return request(`${MINING_ACTIVITY_MODEL}/activity/${id}`, {
    method: 'PUT',
    data: {
      ...data,
      co_level: parseFloat(data?.co_level),
      co_metal_equivalent: parseFloat(data?.co_metal_equivalent),
      fe_level: parseFloat(data?.fe_level),
      fe_metal_equivalent: parseFloat(data?.fe_metal_equivalent),
      ni_level: parseFloat(data?.ni_level),
      ni_metal_equivalent: parseFloat(data?.ni_metal_equivalent),
      sublot_total: data?.sublot_total ? parseFloat(data?.sublot_total) : 0,
      ritase_total: parseFloat(data?.ritase_total),
      simgo_level: parseFloat(data?.simgo_level),
      simgo_metal_equivalent: parseFloat(data?.simgo_metal_equivalent),
      tonnage_total: parseFloat(data?.tonnage_total)
    },
    headers: authHeader()
  });
};

const getActivityChart = ({ activity_type, start_date, end_date } = {}) => {
  const params = [];
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity/chart`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getInventorySumary = ({
  page,
  row,
  inventory_type,
  dome_id,
  start_date,
  end_date,
  hill_id
} = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (row) {
    params.push(['row', row]);
  }
  if (inventory_type) {
    params.push(['inventory_type', inventory_type]);
  }
  if (dome_id) {
    params.push(['dome_id', dome_id]);
  }
  if (hill_id) {
    params.push(['hill_id', hill_id]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/activity/inven-summary`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const deleteActivity = ({ id }) => {
  return request(`${MINING_ACTIVITY_MODEL}/activity/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  });
};

const MiningActivityService = {
  getActivity,
  getSummary,
  getDomeSummary,
  getActivityById,
  createActivity,
  editActivity,
  getHistoryEdit,
  getActivityChart,
  getInventorySumary,
  deleteActivity
};

export default MiningActivityService;
