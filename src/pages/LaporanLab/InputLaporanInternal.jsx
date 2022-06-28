import React from 'react';
import { Grid, Box, Button } from '@mui/material';

import Navbar from '../../components/Navbar';
import { textAlign } from '@mui/system';

const InputLaporanInternal = () => {
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
        <Grid item sx={{ height: '7%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <h2 style={{ margin: '1rem 0.5rem 0.5rem 2rem' }}>Input Laporan Internal Lab</h2>
        </Grid>
        <Grid item sx={{ height: '25%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <h4 style={{ margin: '1.5rem 0.5rem 0.5rem 2rem' }}>Informasi Sample</h4>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Tanggal</Box>
              <Box>Tanggal</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Bukit</Box>
              <Box>Pilih Bukit</Box>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Nama Perusahaan</Box>
              <Box>Nomor Kontak Pengaju Sample</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Nama Perusahaan</Box>
              <Box>Nomor Kontak Pengaju Sample</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ height: '50%' }}>
          <h2 style={{ margin: '1rem 0.5rem 0.5rem 2rem' }}>Hasil Analisa </h2>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
            >
              <Box>Kode Sample</Box>
              <Box>Kode sample</Box>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box>Kadar Ni</Box>
              <Box>Nilai Kadar</Box>
              <Box>Nilai Kadar</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ borderTop: 1, borderTopColor: '#E0E0E0' }}>
          <Grid container sx={{ marginTop: '1.5rem', justifyContent: 'center' }}>
            <Button variant="contained">Tambah Data</Button>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          position: 'fixed',
          display: 'flex',
          bottom: '0px',
          backgroundColor: 'white',
          width: '100%',
          height: '4.875rem',
          boxShadow: '4px -10px 24px rgba(0, 0, 0, 0.04)'
        }}
      >
        <Grid
          container
          sx={{ justifyContent: 'flex-end', alignItems: 'center', marginRight: '5rem' }}
        >
          <Grid item xs={0.6}>
            <Button>Back</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ width: '130%' }}>
              Submit Laporan
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InputLaporanInternal;
