import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import Navbar from '../../components/Navbar';

const DetailInternal = () => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
        overflow: 'auto', // it makes this container follow the height of its content
        position: 'relative'
      }}
    >
      <Navbar />

      <Grid
        container
        sx={{
          display: 'flex',
          //   alignItems: 'flex-start',
          flexDirection: 'column',
          backgroundColor: 'white',
          height: '72.5rem',
          width: '90%',
          marginTop: '6rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 'auto',
          borderRadius: '4px'
        }}
      >
        <Grid item sx={{ backgroundColor: 'red', height: '5%' }}>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box>Back</Box>
            <Box>Download Laporan</Box>
          </Grid>
        </Grid>
        <Grid item sx={{ backgroundColor: 'green' }}>
          <h4>Laporan Internal Lab</h4>
          <h2>MS12-IO98P</h2>
          <h2>MS12-IO98P</h2>
          <h5>Terakhir diedit oleh Putri Devina, pada 12 Juni 2022, 12:21 WITA</h5>
          <Button variant="contained" sx={{ backgroundColor: '#3F48C0' }}>
            Edit Laporan
          </Button>
        </Grid>
        <Grid item sx={{ backgroundColor: 'yellow' }}>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Informasi Sample</Box>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid item>
                  <h5>Tanggal</h5>
                  <h5>12/02/2021</h5>
                </Grid>
                <Grid item>
                  <h5>Jenis Sample</h5>
                  <h5>12/02/2021</h5>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid item>
                  <h5>Tanggal</h5>
                  <h5>12/02/2021</h5>
                </Grid>
                <Grid item>
                  <h5>Jenis Sample</h5>
                  <h5>12/02/2021</h5>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'purple' }}>
              <Box>Hasil</Box>
              <Grid sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'purple' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'purple' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'purple' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'purple' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '10rem',
                    height: '6.4375rem',
                    margin: '1.5rem 1rem 1.5rem 1rem '
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
                  <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          position: 'fixed',
          bottom: '0px',
          backgroundColor: 'green',
          width: '100%'
        }}
      >
        Test
      </div>
    </div>
  );
};

export default DetailInternal;
