import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InfoSection from './InventorySection/InfoSection';
import ListDome from './ListDome';
import CustomPagination from '../../components/Pagination/index';

const DetailDome = () => {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '90%',
            marginTop: '2.5rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            borderRadius: '4px'
          }}
        >
          <Grid item>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                margin: '1rem 0.5rem 0.3rem 2rem',
                alignItems: 'center'
              }}
            >
              <Grid item>
                <Button variant="outlined" sx={{ marginRight: '1rem' }}>
                  <Icon icon="akar-icons:arrow-back" color="#3f48c0" fontSize={16} />
                  <div style={{ marginLeft: '1rem', fontWeight: '400' }}>Back</div>
                </Button>
              </Grid>
              <Grid item>
                <h2>Bukit 7 / DOME A</h2>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  margin: '0 0 1rem 1rem',
                  width: '14rem',
                  height: '3rem'
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Filter Tanggal | Hari ini </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    label="Filter Tanggal | Hari ini"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              height: '14%'
            }}
          >
            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
              <InfoSection />
            </Grid>
          </Grid>
        </Grid>

        {/* List Dome */}
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '90%',
            marginTop: '2.5rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            borderRadius: '4px'
          }}
        >
          <Box sx={{ margin: '1rem 1rem 1rem 2rem' }}>
            <h3>Kegiatan Terakhir (32)</h3>
          </Box>
          <ListDome />
          <ListDome />
          <ListDome />
          <ListDome />
          <ListDome />

           {/* Pagination */}
           <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginRight: '3rem'
            }}
          >
            <Grid item sx={{ width: '100%' }}>
              <CustomPagination />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DetailDome;
