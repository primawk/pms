import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import InfoCard from './InventorySection/InfoCardHome';
import Tonase from '../../assets/Images/Dashboard/Tonase.png';
import JumlahLot from '../../assets/Images/Dashboard/JumlahLot.png';
import KadarNi from '../../assets/Images/Dashboard/Ni.png';
import KadarSimgo from '../../assets/Images/Dashboard/simgo.png';
import { LoadingModal } from 'components/Modal';

const InfoSection = ({ selectedYear, data, isFetching, isLoading, years }) => {
  console.log(selectedYear);
  // const [yearDefault, setYears] = useState(years[0]);

  // useEffect(() => {
  //   setYears(years[0]);
  // });

  if (!years) {
    return null;
  }

  return (
    <>
      {isFetching && isLoading && <LoadingModal />}
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid item md={2} xs={8} padding="0.5em 0">
          <Typography variant="h6">Tahun</Typography>
          <Typography variant="h3">{selectedYear === 0 ? years[0] : selectedYear}</Typography>
        </Grid>
        <Grid item md={2} xs={5}>
          <InfoCard value={parseInt(data?.tonnage_total)} image={Tonase} name="Jumlah Tonase" />
        </Grid>
        <Grid item md={2} xs={5}>
          <InfoCard value={data?.sublot_total} image={JumlahLot} name="Jumlah Lot" />
        </Grid>
        <Grid item md={2} xs={5}>
          <InfoCard
            value={parseFloat(data?.average_ni).toFixed(2)}
            image={KadarNi}
            name="Rata-Rata Kadar Ni"
          />
        </Grid>
        <Grid item md={2} xs={5}>
          <InfoCard
            value={parseFloat(data?.average_simgo).toFixed(2)}
            image={KadarSimgo}
            name="Rata-Rata Kadar SiMgO"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
