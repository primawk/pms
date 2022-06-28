import React from 'react';
import { Grid, Box, Button } from '@mui/material';

import Navbar from '../../components/Navbar';

const InputLaporanEksternal = () => {
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
        <Grid item sx={{ backgroundColor: 'blue', height: '7%' }}>
          <h2 style={{ margin: '1rem 0.5rem 0.5rem 2rem', fontSize: '1.2vw' }}>
            Input Laporan Eksternal Lab
          </h2>
        </Grid>
        <Grid item sx={{ backgroundColor: 'red', height: '25%' }}>
          <h4 style={{ margin: '1.5rem 0.5rem 0.5rem 2rem', fontSize: '0.8vw' }}>
            Informasi Sample
          </h4>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Tanggal</Box>
              <Box>Tanggal</Box>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Nama Pengaju Sample</Box>
              <Box>Nama Pengaju Sample</Box>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Nama Perusahaan</Box>
              <Box>Nomor Kontak Pengaju Sample</Box>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Nama Perusahaan</Box>
              <Box>Nomor Kontak Pengaju Sample</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ backgroundColor: 'green' }}>
          <h2>Preparasi dan Analisa </h2>

          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Tanggal</Box>
              <Box>Tanggal</Box>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Nama Pengaju Sample</Box>
              <Box>Nama Pengaju Sample</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ backgroundColor: 'yellow' }}>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>Tanggal</Box>
              <Grid
                item
                sx={{
                  backgroundColor: '#E5E5FE',
                  width: '27.25rem',
                  height: '14.563rem',
                  border: '1px dashed #3F48C0',
                  borderRadius: '8px'
                }}
              >
                test
              </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>File Laporan</Box>
              <Grid
                item
                sx={{
                  backgroundColor: 'white',
                  width: '7.438rem',
                  height: '9.063rem',
                  border: '1px solid #3F48C0',
                  borderRadius: '4px'
                }}
              >
                test
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
        <Grid container sx={{ justifyContent: 'flex-end' }}>
          <Button>Back</Button>
          <Button variant="contained">Submit Laporan</Button>
        </Grid>
      </div>
    </div>
  );
};

export default InputLaporanEksternal;
