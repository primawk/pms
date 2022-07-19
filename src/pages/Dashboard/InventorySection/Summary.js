import { Grid, Typography } from '@mui/material';
import InfoCard from 'components/Card/InfoCard';
import Tonase from '../../../assets/Images/Dashboard/Tonase.png';
import JumlahLot from '../../../assets/Images/Dashboard/JumlahLot.png';
import KadarNi from '../../../assets/Images/Dashboard/Ni.png';
import KadarSimgo from '../../../assets/Images/Dashboard/Kadar.png';

const Summary = ({ summary }) => {
  return (
    <>
      <Typography variant="h5">Summary</Typography>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid item md={2.75} xs={5}>
          <InfoCard value={summary?.tonnage_total || '-'} image={Tonase} name="Jumlah Tonase" />
        </Grid>
        <Grid item md={2.75} xs={5}>
          <InfoCard value={summary?.sublot_total || '-'} image={JumlahLot} name="Jumlah Lot" />
        </Grid>
        <Grid item md={2.75} xs={5}>
          <InfoCard
            value={`${summary?.average_ni ? parseFloat(summary?.average_ni) : '0'} %`}
            image={KadarNi}
            name="Rata-Rata Kadar Ni"
          />
        </Grid>
        <Grid item md={2.75} xs={5}>
          {summary?.activity_type === 'eto-to-efo' ? (
            <InfoCard
              value={`${summary?.average_simgo ? parseFloat(summary?.average_simgo) : '0'} %`}
              image={KadarSimgo}
              name="Rata-Rata Kadar SiMgO"
            />
          ) : (
            <InfoCard
              value={`${summary?.average_fe ? parseFloat(summary?.average_fe) : '0'} %`}
              image="/img/fe.png"
              name="Rata-Rata Kadar FE"
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
