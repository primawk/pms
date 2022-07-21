import React from 'react';
import { Grid } from '@mui/material';
import InfoCard from 'components/Card/InfoCard';
import JumlahLot from '../../../assets/Images/Dashboard/JumlahLot.png';
import KadarNi from '../../../assets/Images/Dashboard/Ni.png';
import KadarSimgo from '../../../assets/Images/Dashboard/simgo.png';

const InfoSection = ({ dataSummary }) => {
  return (
    <Grid container direction="row" alignItems="flex-start" justifyContent="center" spacing={3}>
      <Grid item lg={4} sm={4}>
        <InfoCard value={`${dataSummary?.tonnage_total || 0} Ton`} name="Sisa Inventory" />
      </Grid>
      <Grid item lg={2.5} sm={2.5}>
        <InfoCard value={dataSummary?.sublot_total || 0} image={JumlahLot} name="Jumlah Lot" />
      </Grid>
      <Grid item lg={2.5} sm={2.5}>
        <InfoCard
          value={`${dataSummary?.average_ni ? parseFloat(dataSummary?.average_ni) : '0'} %`}
          image={KadarNi}
          name="Rata-Rata Kadar Ni"
        />
      </Grid>
      <Grid item lg={3} sm={3}>
        <InfoCard
          value={`${dataSummary?.average_simgo ? parseFloat(dataSummary?.average_simgo) : '0'} %`}
          image={KadarSimgo}
          name="Rata-Rata Kadar SiMgO"
        />
      </Grid>
    </Grid>
  );
};

export default InfoSection;
