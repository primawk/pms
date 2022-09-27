import { Grid, Typography, Box } from '@mui/material';
import LineChart from 'components/Charts/LineChart';

const MiningToolChart = ({ chartData, chartStyle, dateInterval }) => {
  return (
    <Box className="bg-white" sx={{ p: 4 }}>
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
