import React from 'react';
import InformationBox from '../../components/Lossing/InformasiBox';

const SummaryInformation = ({ data }) => {
  return (
    <>
      <InformationBox title="Total Semua Lossing" quantity={data?.loss_total} />
      <InformationBox title="Total Lossing Estimasi to Front" quantity={data?.loss_est_to_ore} />
      <InformationBox title="Total Lossing Front to ETO" quantity={data?.loss_front_to_eto} />
      <InformationBox title="Total Lossing ETO to EFO" quantity={data?.loss_eto_to_efo} />
      <InformationBox title="Total Lossing EFO to Barging" quantity={data?.loss_efo_to_ship} />
    </>
  );
};

export default SummaryInformation;
