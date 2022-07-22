import React from 'react';
import { Grid, Box } from '@mui/material';

const SummaryLaporan = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: 'white',
            border: '1px solid #E0E0E0',
            borderRadius: '0.25rem',
            width: '11rem',
            height: '6.4375rem',
            margin: '1.5rem 1rem 1.5rem 1.5rem '
          }}
        >
          <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Semua Laporan</Box>
          <Grid container>
            <Grid item>
              <Box sx={{ margin: '0 1rem 0 1rem', fontSize: '1.5rem' }}>171</Box>
            </Grid>
            <Grid item>
              <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <li style={{ fontSize: '0.8rem' }}>4 Preparasi</li>
                <li style={{ fontSize: '0.8rem' }}>6 Analisa</li>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: 'white',
            border: '1px solid #E0E0E0',
            borderRadius: '0.25rem',
            width: '11rem',
            height: '6.4375rem',
            margin: '1.5rem 1rem 1.5rem 1.5rem '
          }}
        >
          <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Laporan Internal</Box>
          <Grid container>
            <Grid item>
              <Box sx={{ margin: '0 1rem 0 1rem', fontSize: '1.5rem' }}>71</Box>
            </Grid>
            <Grid item>
              <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <li style={{ fontSize: '0.8rem' }}>4 Preparasi</li>
                <li style={{ fontSize: '0.8rem' }}>6 Analisa</li>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: 'white',
            border: '1px solid #E0E0E0',
            borderRadius: '0.25rem',
            width: '11rem',
            height: '6.4375rem',
            margin: '1.5rem 1rem 1.5rem 1.5rem '
          }}
        >
          <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Laporan Eksternal</Box>
          <Grid container>
            <Grid item>
              <Box sx={{ margin: '0 1rem 0 1rem', fontSize: '1.5rem' }}>100</Box>
            </Grid>
            <Grid item>
              <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <li style={{ fontSize: '0.8rem' }}>4 Preparasi</li>
                <li style={{ fontSize: '0.8rem' }}>6 Analisa</li>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SummaryLaporan;
