import { useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import LineChart from 'components/Charts/LineChart';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

//services
import MiningActivityService from 'services/MiningActivityService';

const ChartSection = ({ chartData, subMenu, handleChangeSubMenu, chartStyle, dateInterval }) => {
  const { activityType } = useParams();

  const handleDownloadReport = async () => {
    try {
      const response = await MiningActivityService.downloadReport({ activity_type: activityType });
      const file = new Blob([response.data], { type: 'application/csv' });
      const fileURL = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = fileURL;
      link.setAttribute('download', 'Laporan Pemasaran.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        {activityType !== 'efo-to-shipment' ? (
          <>
            <Grid item md={6}>
              <Typography variant="h5">Statistik Produksi Tambang</Typography>
            </Grid>

            <Grid
              container
              alignItems="center"
              justifyContent="flex-end"
              direction="row"
              item
              md={5}
            >
              <Button
                variant="outlined"
                onClick={() => handleChangeSubMenu(0)}
                sx={subMenu === 0 ? { background: '#E5E5FE' } : {}}
              >
                Tonase
              </Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              direction="row"
              item
              md={6}
              gap={2}
            >
              <Typography variant="h5">Statistik Produksi Tambang</Typography>
              <Button
                variant="outlined"
                onClick={() => handleChangeSubMenu(0)}
                sx={subMenu === 0 ? { background: '#E5E5FE' } : {}}
              >
                Tonase
              </Button>
            </Grid>
            <Grid
              item
              md={6}
              container
              alignItems="center"
              justifyContent="flex-end"
              direction="row"
            >
              <Button
                variant="text"
                sx={{ background: '#E5E5FE' }}
                startIcon={<Icon width={25} height={25} icon="heroicons-outline:folder-download" />}
                onClick={handleDownloadReport}
              >
                Download Laporan
              </Button>
            </Grid>
          </>
        )}
      </Grid>

      <LineChart chartData={chartData} style={chartStyle} dateInterval={dateInterval} />
    </>
  );
};

export default ChartSection;
