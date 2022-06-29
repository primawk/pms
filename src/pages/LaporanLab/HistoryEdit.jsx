import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';

const HistoryEdit = () => {
  return (
    <div
      style={{
        backgroundColor: '#F5F5F5',
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
        <Grid item sx={{ height: '6%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              margin: '1rem 0.5rem 0.3rem 2rem'
            }}
          >
            <Grid item>
              <Button variant="outlined" sx={{ marginRight: '1rem' }}>
                <Icon icon="akar-icons:arrow-back" color="#3f48c0" fontSize={16} />
                <div style={{ marginLeft: '1rem', fontWeight: '400' }}>Back</div>
              </Button>
            </Grid>
            <Grid item>
              <Box>
                <h2>Riwayat Edit 'Laporan Lab - MS12-IO98P'</h2>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ height: '14%', borderBottom: 1, borderBottomColor: '#E0E0E0', width: '30vw' }}
        >
          <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box style={{ margin: '1rem 0.5rem 1rem 2rem', fontSize: '1.25rem' }}>12 Juni 2022</Box>
            <Grid item>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}
              >
                <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
                  <img src="/img/avatar1.png" alt=""></img>
                </Grid>
                <Grid item>
                  <Box style={{}}>Putri Devina mengedit kadar Nikel 13:21 WITA</Box>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
                  <img src="/img/avatar2.png" alt=""></img>
                </Grid>
                <Grid item>
                  <Box style={{}}>Nisa mengedit kadar Fe 11:21 WITA</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ height: '14%', borderBottom: 1, borderBottomColor: '#E0E0E0', width: '30vw' }}
        >
          <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box style={{ margin: '1rem 0.5rem 1rem 2rem', fontSize: '1.25rem' }}>09 Juni 2022</Box>
            <Grid item>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}
              >
                <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
                  <img src="/img/avatar1.png" alt=""></img>
                </Grid>
                <Grid item>
                  <Box style={{}}>Putri Devina mengedit kadar Nikel 13:21 WITA</Box>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
                  <img src="/img/avatar2.png" alt=""></img>
                </Grid>
                <Grid item>
                  <Box style={{}}>Nisa mengedit kadar Fe 11:21 WITA</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HistoryEdit;
