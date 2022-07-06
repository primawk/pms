import { Grid, Typography } from '@mui/material';
import InfoCard from 'components/Card/InfoCard';
import Tonase from '../../../assets/Images/Dashboard/Tonase.png';
import JumlahLot from '../../../assets/Images/Dashboard/JumlahLot.png';
import KadarNi from '../../../assets/Images/Dashboard/Ni.png';
import KadarSimgo from '../../../assets/Images/Dashboard/Kadar.png';

const Summary = () => {
  return (
    <>
      <Typography variant="h5">Summary</Typography>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid item md={2.75} xs={5}>
          <InfoCard value="1000231" image={Tonase} name="Jumlah Tonase" />
        </Grid>
        <Grid item md={2.75} xs={5}>
          <InfoCard value="723" image={JumlahLot} name="Jumlah Lot" />
        </Grid>
        <Grid item md={2.75} xs={5}>
          <InfoCard value="1,768%" image={KadarNi} name="Rata-Rata Kadar Ni" />
        </Grid>
        <Grid item md={2.75} xs={5}>
          <InfoCard value="2,1768%" image={KadarSimgo} name="Rata-Rata Kadar SiMgO" />
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
