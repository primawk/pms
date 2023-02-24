/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

// custom hooks with context
import { useShipmentContext } from 'context/ShipmentContext';

// services
import MiningActivityService from 'services/MiningActivityService';

// custom components
import FirstStep from './first-step';
import SecondStep from './second-step';
import ThirdStep from './third-step';
import { LoadingModal } from 'components/Modal';

export default function FormShipmentCard() {
  const { activityType, id } = useParams();
  const location = useLocation();
  const prevState = location.state;
  const { step, setValue, setStep } = useShipmentContext();

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailActivity = data?.data?.data;

  const initialValues = {
    activity_type: id ? detailActivity?.activity_type : prevState?.activity_type,
    date: id ? detailActivity?.date : prevState?.date,
    time: id ? detailActivity?.time : prevState?.time,
    product_type: id ? detailActivity?.product_type : prevState?.product_type,
    shipment_number: id ? detailActivity?.shipment_number : '',
    bill_loading: id ? detailActivity?.bill_loading || [] : [],
    block: id ? detailActivity?.block : prevState?.block,
    bongkar_co_level: id ? detailActivity?.bongkar_co_level : '',
    bongkar_fe_level: id ? detailActivity?.bongkar_fe_level : '',
    bongkar_ni_level: id ? detailActivity?.bongkar_ni_level : '',
    bongkar_tonnage_total: id ? detailActivity?.bongkar_tonnage_total : '',
    bukti_bayar: id ? detailActivity?.bukti_bayar || [] : [],
    buyer_name: id ? detailActivity?.buyer_name : '',
    cargo_manifest: id ? detailActivity?.cargo_manifest || [] : [],
    co_level: id ? detailActivity?.co_level : '',
    co_metal_equivalent: id ? detailActivity?.co_metal_equivalent : '',
    coa_bongkar: id ? detailActivity?.coa_bongkar || [] : [],
    coa_muat: id ? detailActivity?.coa_muat || [] : [],
    dest_loc: id ? detailActivity?.dest_loc : '',
    dest_loc_city: id ? detailActivity?.dest_loc_city?.toUpperCase() : '',
    dest_loc_prov: id ? detailActivity?.dest_loc_prov?.toUpperCase() : '',
    dome_origin_total: id ? detailActivity?.dome_origin_total || [] : [],
    draught_survey: id ? detailActivity?.draught_survey || [] : [],
    fe_level: id ? detailActivity?.fe_level : '',
    fe_metal_equivalent: id ? detailActivity?.fe_metal_equivalent : '',
    lhv: id ? detailActivity?.lhv || [] : [],
    muat_co_level: id ? detailActivity?.muat_co_level : '',
    muat_fe_level: id ? detailActivity?.muat_fe_level : '',
    muat_ni_level: id ? detailActivity?.muat_ni_level : '',
    muat_tonnage_total: id ? detailActivity?.muat_tonnage_total : '',
    ni_level: id ? detailActivity?.ni_level : '',
    ni_metal_equivalent: id ? detailActivity?.ni_metal_equivalent : '',
    packing_list: id ? detailActivity?.packing_list || [] : [],
    pbm_name: id ? detailActivity?.pbm_name : '',
    royalty: id ? detailActivity?.royalty || [] : [],
    sales_type: id ? detailActivity?.sales_type : '',
    shipment_type: id ? detailActivity?.shipment_type : '',
    shipping_intruction: id ? detailActivity?.shipping_intruction || [] : [],
    shipping_name: id ? detailActivity?.shipping_name : '',
    shipping_type: id ? detailActivity?.shipping_type : '',
    siping_instruksi: id ? detailActivity?.siping_instruksi || [] : [],
    siping_instruksi_2: id ? detailActivity?.siping_instruksi_2 || [] : [],
    skab: id ? detailActivity?.skab || [] : [],
    spb: id ? detailActivity?.spb || [] : [],
    dome_origin_id: id ? detailActivity?.dome_origin_id || [] : [],
    tonnage_total: id ? detailActivity?.tonnage_total || [] : [],
    status: '',
    file_change: {}
  };

  useEffect(() => {
    if (data && id) {
      setValue(initialValues);
    } else {
      setValue({
        ...initialValues,
        shipment_type: '',
        sales_type: '',
        shipping_type: '',
        dest_loc_city: '',
        dest_loc_prov: ''
      });
    }
  }, [data, id, activityType, location?.pathname]);

  useEffect(() => {
    setStep(1);
  }, [location?.pathname]);

  return (
    <>
      {isFetching ? (
        <LoadingModal />
      ) : (
        <>
          {step === 1 && <FirstStep />}
          {step === 2 && <SecondStep />}
          {step === 3 && <ThirdStep />}
        </>
      )}
    </>
  );
}
