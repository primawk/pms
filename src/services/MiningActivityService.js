import { request } from 'utils/request';
import { MINING_ACTIVITY_MODEL } from 'utils/constant';
import authHeader from './authHeader';

//shipment files
const fileList = [
  'shipping_intruction',
  'siping_instruksi',
  'draught_survey',
  'royalty',
  'bill_loading',
  'cargo_manifest',
  'packing_list',
  'siping_instruksi_2',
  'skab',
  'lhv',
  'spb',
  'coa_bongkar',
  'coa_muat',
  'bukti_bayar'
];

const normalVar = [
  'activity_type',
  'date',
  'time',
  'product_type',
  'shipment_number',
  'block',
  'bongkar_co_level',
  'bongkar_fe_level',
  'bongkar_ni_level',
  'bongkar_tonnage_total',
  'buyer_name',
  'co_level',
  'co_metal_equivalent',
  'dest_loc',
  'dest_loc_city',
  'dest_loc_prov',
  'dome_origin_total',
  'fe_level',
  'fe_metal_equivalent',
  'muat_co_level',
  'muat_fe_level',
  'muat_ni_level',
  'muat_tonnage_total',
  'ni_level',
  'ni_metal_equivalent',
  'pbm_name',
  'sales_type',
  'shipment_type',
  'shipping_intruction',
  'shipping_name',
  'shipping_type',
  'status',
  'file_change'
];

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

const getProvince = () => {
  return request(`${MINING_ACTIVITY_MODEL}/wilayah/provinsi`, {
    method: 'GET',
    header: {
      'Access-Control-Allow-Origin': '*'
    }
  });
};

const getRegency = ({ id_provinsi }) => {
  return request(`${MINING_ACTIVITY_MODEL}/wilayah/kotakab/${id_provinsi}`, {
    method: 'GET'
  });
};

const createShipment = (data) => {
  const _data = {
    ...data,
    dome_origin_total: JSON.stringify(
      data?.dome_origin_id?.map((item, i) => ({
        dome_origin_id: item,
        tonnage_total: data?.tonnage_total[i]
      }))
    ),
    status: data?.coa_bongkar?.length === 0 && data?.coa_muat?.length === 0 ? 'provisi' : 'final'
  };

  // remove empty variable
  Object.keys(_data).forEach(
    (key) => (!_data?.[key] || _data?.[key]?.length === 0) && delete _data?.[key]
  );
  delete _data?.file_change;
  delete _data?.tonnage_total;
  delete _data?.dome_origin_id;
  const formData = new FormData();

  // append array of files
  Object.keys(_data)
    .filter((key) => fileList.some((file) => key === file))
    .forEach((_key) => {
      _data[_key].forEach((files) => {
        if (typeof files !== 'string') {
          formData.append(_key, files);
        }
      });
    });

  // append normal variable
  Object.keys(_data)
    .filter((key) => normalVar.some((_var) => key === _var))
    .forEach((_key) => {
      formData.append(_key, _data[_key]);
    });

  return request(`${MINING_ACTIVITY_MODEL}/activity`, {
    method: 'POST',
    data: formData,
    headers: authHeader()
  });
};

const editShipment = (data, id) => {
  const _data = {
    ...data,
    dome_origin_total: JSON.stringify(
      data?.dome_origin_id?.map((item, i) => ({
        dome_origin_id: item,
        tonnage_total: data?.tonnage_total[i]
      }))
    ),
    status: data?.coa_bongkar?.length === 0 && data?.coa_muat?.length === 0 ? 'provisi' : 'final'
  };

  // remove empty variable
  Object.keys(_data).forEach(
    (key) => (!_data?.[key] || _data?.[key]?.length === 0) && delete _data?.[key]
  );
  delete _data?.file_change;
  delete _data?.tonnage_total;
  delete _data?.dome_origin_id;
  const formData = new FormData();

  // append array of files
  Object.keys(_data)
    .filter((key) => fileList.some((file) => key === file))
    .forEach((_key) => {
      _data[_key].forEach((files) => {
        if (typeof files !== 'string') {
          formData.append(_key, files);
        }
      });
    });

  // append normal variable
  Object.keys(_data)
    .filter((key) => normalVar.some((_var) => key === _var))
    .forEach((_key) => {
      formData.append(_key, _data[_key]);
    });

  return request(`${MINING_ACTIVITY_MODEL}/activity/${id}`, {
    method: 'PUT',
    data: formData,
    headers: authHeader()
  });
};

const deleteShipmentFiles = (id, data) => {
  return request(`${MINING_ACTIVITY_MODEL}/activity/file/${id}`, {
    method: 'DELETE',
    data: data,
    headers: authHeader()
  });
};

const getFiles = (files) => {
  return request(`${MINING_ACTIVITY_MODEL}/activity/file/${files}`, {
    method: 'GET',
    headers: authHeader(),
    responseType: 'blob'
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
  deleteActivity,
  getProvince,
  getRegency,
  createShipment,
  editShipment,
  deleteShipmentFiles,
  getFiles
};

export default MiningActivityService;
