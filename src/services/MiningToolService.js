import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

const getMiningTool = ({
  start_date,
  end_date,
  page,
  limit,
  order_by,
  sort,
  id,
  activity_type
}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (limit) {
    params.push(['limit', limit]);
  }
  if (activity_type) {
    params.push(['activity_type', activity_type]);
  }
  if (order_by) {
    params.push(['order_by', order_by]);
  }
  if (sort) {
    params.push(['sort', sort]);
  }
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  if (id) {
    params.push(['id', id]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/tool`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const createMiningTool = (datas) => {
  return request(`${MINING_ACTIVITY_MODEL}/tool`, {
    method: 'POST',
    data: datas.map((item, index) => ({
      ...datas[index],
      hm_result: item?.hm_end - item?.hm_start
    })),
    headers: authHeader()
  });
};

const editMiningTool = ({
  activity_type,
  date,
  time,
  product_type,
  block,
  hill_id,
  activity_item,
  company_name,
  tool_kind,
  tool_type,
  capacity,
  physical_availability,
  mechanical_availability,
  use_availability,
  effective_utilization,
  tool_total,
  productivity,
  fuel_ratio,
  issue_safety,
  problem,
  recommendation,
  id,
  hm_start,
  hm_end
}) => {
  return request(`${MINING_ACTIVITY_MODEL}/tool/${id}`, {
    method: 'PUT',
    data: {
      activity_type,
      date,
      time,
      product_type,
      block,
      hill_id,
      activity_item,
      company_name,
      tool_kind,
      tool_type,
      capacity,
      physical_availability,
      mechanical_availability,
      use_availability,
      effective_utilization,
      tool_total,
      productivity,
      fuel_ratio,
      issue_safety,
      problem,
      recommendation,
      hm_end,
      hm_start,
      hm_result: hm_end - hm_start
    },
    headers: authHeader()
  });
};

const getMiningToolChart = ({ start_date, end_date } = {}) => {
  const params = [];
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/tool/chart`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getGroupedMiningTool = ({ start_date, end_date } = {}) => {
  const params = [];
  if (start_date) {
    params.push(['start_date', start_date]);
  }
  if (end_date) {
    params.push(['end_date', end_date]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/tool/group_by_company`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const getListPerCompany = ({ page, limit, company_name } = {}) => {
  const params = [];
  if (page) {
    params.push(['page', page]);
  }
  if (limit) {
    params.push(['limit', limit]);
  }
  if (company_name) {
    params.push(['company_name', company_name]);
  }
  return request(`${MINING_ACTIVITY_MODEL}/tool`, {
    method: 'GET',
    params: new URLSearchParams(params),
    headers: authHeader()
  });
};

const MiningToolService = {
  getMiningTool,
  createMiningTool,
  editMiningTool,
  getMiningToolChart,
  getGroupedMiningTool,
  getListPerCompany
};

export default MiningToolService;
