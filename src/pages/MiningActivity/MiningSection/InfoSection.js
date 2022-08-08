import { Grid, Typography } from '@mui/material';

//components
import InfoCard from 'components/Card/InfoCard';

// utils
import { timeDifference, translateTime } from 'utils/helper';

//assets
import Tonase from 'assets/Images/Dashboard/Tonase.png';
import JumlahLot from 'assets/Images/Dashboard/JumlahLot.png';
import KadarNi from 'assets/Images/Dashboard/info_ni.png';
import TotalActivity from 'assets/Images/Dashboard/total_activity.png';

const InfoSection = ({ summary }) => {
  const dateDifference = translateTime(timeDifference(summary?.updated_at, new Date()));

  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Total Produksi Tambang</Typography>
      </Grid>
      <Grid container direction="row" alignItems="flex-start" justifyContent="space-between">
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.total_activity ? parseFloat(summary?.total_activity) : '-'}
            image={TotalActivity}
            name="Total Kegiatan"
            date={dateDifference}
          />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.average_ni ? parseFloat(summary?.average_ni).toFixed(2) : '-'}
            image={KadarNi}
            name="Kadar Ni"
            date={dateDifference}
          />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.tonnage_total ? parseFloat(summary?.tonnage_total).toFixed(2) : '-'}
            image={Tonase}
            name="Tonase"
            date={dateDifference}
          />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.sublot_total ? parseFloat(summary?.sublot_total).toFixed(2) : '-'}
            image={JumlahLot}
            name="Jumlah Lot"
            date={dateDifference}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
