import { Grid, Typography, Box } from '@mui/material';
import { useQuery } from 'react-query';

//components
import { LoadingModal } from 'components/Modal';
import LineChart from 'components/Charts/LineChart';

//service
import MiningToolService from 'services/MiningToolService';

const MiningToolChart = ({ selectedDate, chartStyle, dateInterval }) => {
  const { data: dataChart, isFetching: isFetchingChart } = useQuery(
    ['mining-tool', 'chart', selectedDate],
    () =>
      MiningToolService.getMiningToolChart({
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  const chartData = {
    legend: false,
    datasets: [
      {
        label: 'Penggunaan Alat Tambang',
        data: dataChart?.data?.data?.map((item) => ({
          x: item?.date,
          y: item?.total
        })),
        backgroundColor: ['#3F48C0'],
        borderColor: ['#3F48C0'],
        borderWidth: 2
      }
    ]
  };

  return (
    <Box className="bg-white" sx={{ p: 4 }}>
      {isFetchingChart && <LoadingModal />}
      <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Grid item md={6}>
          <Typography variant="h5">Statistik Penggunaan Alat Tambang</Typography>
        </Grid>
      </Grid>

      <LineChart chartData={chartData} style={chartStyle} dateInterval={dateInterval} />
    </Box>
  );
};

export default MiningToolChart;
