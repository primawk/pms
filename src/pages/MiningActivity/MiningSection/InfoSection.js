import { Grid, Typography } from '@mui/material';

//components
import InfoCard from 'components/Card/InfoCard';

//assets
import Tonase from 'assets/Images/Dashboard/Tonase.png';
import JumlahLot from 'assets/Images/Dashboard/JumlahLot.png';
import KadarNi from 'assets/Images/Dashboard/info_ni.png';
import TotalActivity from 'assets/Images/Dashboard/total_activity.png';

const InfoSection = ({ summary }) => {
  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Total Produksi Tambang</Typography>
      </Grid>
      <Grid container direction="row" alignItems="flex-start" justifyContent="space-between">
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.total_activity || '-'}
            image={TotalActivity}
            name="Total Kegiatan"
            date="Hari ini"
          />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.average_ni ? parseFloat(summary?.average_ni) : '-'}
            image={KadarNi}
            name="Kadar Ni"
            date="Hari ini"
          />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.tonnage_total || '-'}
            image={Tonase}
            name="Tonase"
            date="Hari ini"
          />
        </Grid>
        <Grid item md={5} xs={5}>
          <InfoCard
            value={summary?.sublot_total || '-'}
            image={JumlahLot}
            name="Jumlah Lot"
            date="Hari ini"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
