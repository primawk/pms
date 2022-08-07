import { Grid, Typography } from '@mui/material';
import InfoCard from 'components/Card/InfoCard';
import Tonase from 'assets/Images/Dashboard/Tonase.png';
import JumlahLot from 'assets/Images/Dashboard/JumlahLot.png';
import KadarNi from 'assets/Images/Dashboard/Ni.png';
import KadarSimgo from 'assets/Images/Dashboard/simgo.png';
import KadarFe from 'assets/Images/Dashboard/Fe.png';
import KadarCo from 'assets/Images/Dashboard/Co.png';

const Summary = ({ summary }) => {
  return (
    <>
      <Typography variant="h5">Summary</Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        columnSpacing={3}
      >
        <Grid item md={6} xs={6}>
          <InfoCard
            value={summary?.tonnage_total ? parseFloat(summary?.tonnage_total).toFixed(2) : '0'}
            image={Tonase}
            name="Jumlah Tonase"
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <InfoCard value={summary?.sublot_total || '-'} image={JumlahLot} name="Jumlah Lot" />
        </Grid>
        <Grid item md={3} xs={6}>
          <InfoCard
            value={`${summary?.average_fe ? parseFloat(summary?.average_fe).toFixed(2) : '0'} %`}
            image={KadarFe}
            name="Rata-Rata Kadar Fe"
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <InfoCard
            value={`${summary?.average_co ? parseFloat(summary?.average_co).toFixed(2) : '0'} %`}
            image={KadarCo}
            name="Rata-Rata Kadar Co"
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <InfoCard
            value={`${summary?.average_ni ? parseFloat(summary?.average_ni).toFixed(2) : '0'} %`}
            image={KadarNi}
            name="Rata-Rata Kadar Ni"
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <InfoCard
            value={`${
              summary?.average_simgo ? parseFloat(summary?.average_simgo).toFixed(2) : '0'
            } %`}
            image={KadarSimgo}
            name="Rata-Rata Kadar SiMgO"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
