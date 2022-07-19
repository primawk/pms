import React from 'react';
import { Grid } from '@mui/material';
import InfoCard from './InfoCardHome';
import Tonase from '../../../assets/Images/Dashboard/Tonase.png';
import JumlahLot from '../../../assets/Images/Dashboard/JumlahLot.png';
import KadarNi from '../../../assets/Images/Dashboard/Ni.png';
import KadarSimgo from '../../../assets/Images/Dashboard/simgo.png';

const InfoSection = () => {
  return (
    <Grid container direction="row" alignItems="flex-start">
      <Grid item sx={{ marginLeft: '2rem', width: '17.313rem' }}>
        <InfoCard value="1000231" image={Tonase} name="Sisa Inventory" />
      </Grid>
      <Grid item sx={{ marginLeft: '2rem', width: '13.125rem' }}>
        <InfoCard value="723" image={JumlahLot} name="Jumlah Lot" />
      </Grid>
      <Grid item sx={{ marginLeft: '2rem', width: '13.125rem' }}>
        <InfoCard value="1,768%" image={KadarNi} name="Rata-Rata Kadar Ni" />
      </Grid>
      <Grid item sx={{ marginLeft: '2rem', width: '13.125rem' }}>
        <InfoCard value="2,1768%" image={KadarSimgo} name="Rata-Rata Kadar SiMgO" />
      </Grid>
    </Grid>
  );
};

export default InfoSection;
