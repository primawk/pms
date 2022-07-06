import React from 'react';
import { Grid, Typography } from '@mui/material';
import InfoCard from './InventorySection/InfoCardHome';
import Tonase from '../../assets/Images/Dashboard/Tonase.png';
import JumlahLot from '../../assets/Images/Dashboard/JumlahLot.png';
import KadarNi from '../../assets/Images/Dashboard/Ni.png';
import KadarSimgo from '../../assets/Images/Dashboard/simgo.png';

const InfoSection = () => {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="space-between">
      <Grid item md={2} xs={8} padding="0.5em 0" >
        <Typography variant="h6">Tahun</Typography>
        <Typography variant="h3">2022</Typography>
      </Grid>
      <Grid item md={2} xs={5}>
        <InfoCard value="1000231" image={Tonase} name="Jumlah Tonase" />
      </Grid>
      <Grid item md={2} xs={5}>
        <InfoCard value="723" image={JumlahLot} name="Jumlah Lot" />
      </Grid>
      <Grid item md={2} xs={5}>
        <InfoCard value="1,768%" image={KadarNi} name="Rata-Rata Kadar Ni" />
      </Grid>
      <Grid item md={2} xs={5}>
        <InfoCard value="2,1768%" image={KadarSimgo} name="Rata-Rata Kadar SiMgO" />
      </Grid>
    </Grid>
  );
};

export default InfoSection;
