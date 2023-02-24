import { useState, createContext, useContext } from 'react';

const ShipmentContext = createContext();

export const useShipmentContext = () => {
  const context = useContext(ShipmentContext);
  const [value, setValue] = context.value;
  const [step, setStep] = context.step;

  const handleBack = (data) => {
    if (step !== 1) {
      setStep(step - 1);
    }
    setValue({ ...value, ...data });
    window.scrollTo(0, 0);
  };

  const handleContinue = (data) => {
    window.scrollTo(0, 0);
    if (step !== 3) {
      setStep(step + 1);
      setValue({ ...value, ...data });
    }
  };

  return {
    value,
    setValue,
    step,
    setStep,
    handleBack,
    handleContinue
  };
};

export const ShipmentProvider = ({ children }) => {
  const [value, setValue] = useState({
    activity_type: '',
    date: '',
    time: '',
    product_type: '',
    shipment_number: '',
    bill_loading: [],
    block: '',
    bongkar_co_level: '',
    bongkar_fe_level: '',
    bongkar_ni_level: '',
    bongkar_tonnage_total: '',
    bukti_bayar: [],
    buyer_name: '',
    cargo_manifest: [],
    co_level: '',
    co_metal_equivalent: '',
    coa_bongkar: [],
    coa_muat: [],
    dest_loc: '',
    dest_loc_city: '',
    dest_loc_prov: '',
    dome_origin_total: [],
    draught_survey: [],
    fe_level: '',
    fe_metal_equivalent: '',
    lhv: [],
    muat_co_level: '',
    muat_fe_level: '',
    muat_ni_level: '',
    muat_tonnage_total: '',
    ni_level: '',
    ni_metal_equivalent: '',
    packing_list: [],
    pbm_name: '',
    royalty: [],
    sales_type: '',
    shipment_type: '',
    shipping_intruction: [],
    shipping_name: '',
    shipping_type: '',
    siping_instruksi: [],
    siping_instruksi_2: [],
    skab: [],
    spb: [],
    dome_origin_id: [],
    tonnage_total: [],
    status: '',
    file_change: {}
  });
  const [step, setStep] = useState(1);
  return (
    <ShipmentContext.Provider value={{ value: [value, setValue], step: [step, setStep] }}>
      {children}
    </ShipmentContext.Provider>
  );
};
