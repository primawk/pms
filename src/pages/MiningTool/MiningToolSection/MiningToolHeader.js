import { Grid, Box, Typography } from '@mui/material';

// components
import InfoCard from 'components/Card/InfoCard';

// assets
import Jumlah from 'assets/Images/Dashboard/JumlahLot.png';
import Produktifitas from 'assets/Images/Dashboard/Timer.png';
import Ratio from 'assets/Images/Dashboard/File.png';

export default function MiningToolHeader() {
  return (
    <Box className="bg-white" sx={{ p: 4 }}>
      <Typography variant="h5">Statistik Produksi Tambang</Typography>

      <Grid container alignItems="flex-start" justifyContent="flex-start" spacing={3}>
        <Grid item md={3}>
          <InfoCard value={27} image={Jumlah} name="Jumlah Peralatan" date="Hari Ini" />
        </Grid>
        <Grid item md={3}>
          <InfoCard
            value="134 Ton / Jam"
            image={Produktifitas}
            name="Produktifitas"
            date="Hari Ini"
          />
        </Grid>
        <Grid item md={3}>
          <InfoCard
            value="3.618 Ltr / Jam"
            image={Ratio}
            name="Rasio Bahan Bakar"
            date="Hari Ini"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
