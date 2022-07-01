import { Grid, Typography } from '@mui/material';
import React from 'react';

const DashboardList = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        minHeight: '85px',
        padding: '0.5em',
        mb: 1,
        mt: 1
      }}
    >
      <Grid item md={1} xs={12}>
        <Typography variant="h4">1</Typography>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={2.5}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Tumpukan
        </Typography>
        <Typography variant="h6">Bukit 7/ Dome A</Typography>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={2}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Tonase
        </Typography>
        <Typography variant="h6">123,45 Ton</Typography>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={3}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Kadar Konsentrat
        </Typography>
        <Grid container direction="row">
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ background: '#E5E5FE', padding: '0 0.2em' }}
            mr={1}
          >
            Ni
          </Typography>
          <Typography variant="body1">= 1,75%</Typography>
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ background: '#E5E5FE', padding: '0 0.2em' }}
            mr={1}
            ml={2}
          >
            SiMg
          </Typography>
          <Typography variant="body1">= 2,18%</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={3}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Kegiatan Terakhir
        </Typography>
        <Grid container direction="row">
          <Typography mr={2}>ETO to EFO</Typography>
          <Typography variant="body1" color="#828282">
            • 3j yang lalu
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardList;
