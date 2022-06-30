import { Button, Grid, Typography } from '@mui/material';
import LineChart from 'components/Charts/LineChart';

const ChartSection = ({ chartData, subMenu, handleChangeSubMenu, chartStyle }) => {
  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Grid item md={6}>
          <Typography variant="h5">Statistik Produksi Tambang</Typography>
        </Grid>

        <Grid container alignItems="center" justifyContent="flex-end" direction="row" item md={5}>
          <Button
            variant="outlined"
            onClick={() => handleChangeSubMenu(0)}
            sx={subMenu === 0 ? { background: '#E5E5FE' } : {}}
          >
            Grafik
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleChangeSubMenu(1)}
            sx={subMenu === 1 ? { background: '#E5E5FE', ml: 2 } : { ml: 2 }}
          >
            Data Target
          </Button>
        </Grid>
      </Grid>

      <LineChart chartData={chartData} style={chartStyle} />
    </>
  );
};

export default ChartSection;
