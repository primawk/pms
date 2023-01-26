import { Grid, Box, Typography } from '@mui/material';
import { useQuery } from 'react-query';

// components
import { LoadingModal } from 'components/Modal';
import InfoCard from 'components/Card/InfoCard';

// assets
import Jumlah from 'assets/Images/Dashboard/JumlahLot.png';
import Produktifitas from 'assets/Images/Dashboard/Timer.png';
import Ratio from 'assets/Images/Dashboard/File.png';

//service
import MiningToolService from 'services/MiningToolService';

export default function MiningToolHeader({ selectedDate, dateDifference }) {
  const { data, isFetching } = useQuery(
    ['mining-tool', 'summary', selectedDate],
    () =>
      MiningToolService.getSummary({
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  const summaryData = data?.data?.data;

  return (
    <Box className="bg-white" sx={{ p: 4 }}>
      {isFetching && <LoadingModal />}
      <Typography variant="h5">Statistik Produksi Tambang</Typography>

      <Grid container alignItems="flex-start" justifyContent="flex-start" spacing={3}>
        <Grid item md={3}>
          <InfoCard
            value={summaryData?.tool_total || 0}
            image={Jumlah}
            name="Jumlah Peralatan"
            date={dateDifference}
          />
        </Grid>
        <Grid item md={3}>
          <InfoCard
            value={`${summaryData?.productivity || 0} Ton / Jam`}
            image={Produktifitas}
            name="Produktifitas"
            date={dateDifference}
          />
        </Grid>
        <Grid item md={3}>
          <InfoCard
            value={`${summaryData?.fuel_ratio || 0} Ltr / Jam`}
            image={Ratio}
            name="Rasio Bahan Bakar"
            date={dateDifference}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
