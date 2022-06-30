import { Grid, Typography } from '@mui/material';

//components
import InfoCard from 'components/Card/InfoCard';

//assets
import Tonase from 'assets/Images/Dashboard/Tonase.png';
import JumlahLot from 'assets/Images/Dashboard/JumlahLot.png';
import KadarNi from 'assets/Images/Dashboard/Ni.png';
import KadarSimgo from 'assets/Images/Dashboard/Kadar.png';

const InfoSection = () => {
  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Total Produksi Tambang</Typography>
      </Grid>
      <Grid container direction="row" alignItems="flex-start" justifyContent="space-between">
        <Grid item md={5} xs={5}>
          <InfoCard value="1000231" image={Tonase} name="Tonase" />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard value="723" image={JumlahLot} name="Jumlah Lot" />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard value="1,768%" image={KadarNi} name="Kadar Ni" />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard value="2,1768%" image={KadarSimgo} name="KadarSiMgO" />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
