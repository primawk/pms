import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import { Grid, Box } from '@mui/material';
import CustomPagination from '../../components/Pagination/index';
// import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';
import DetailEksternal from 'pages/LaporanLab/components/DetailEksternal';

// custom hooks
import useModal from '../../hooks/useModal';

export default function ListDetailEksternal() {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <PilihLaporan toggle={toggle} isShowing={isShowing} />

      <div className="app-content">
        <Header background="dashboard.png">
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
              // margin: '0 0 1rem 10rem'
            }}
          >
            <Grid
              item
              sx={{
                marginLeft: '1rem',
                width: '15rem',
                height: '6.4375rem',
                margin: '1.5rem 4rem 1.5rem 1rem '
              }}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Lab</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>
                PT Mandala Jaya
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: 'white',
                border: '1px solid #E0E0E0',
                borderRadius: '0.25rem',
                marginLeft: '1rem',
                width: '11rem',
                height: '6.4375rem',
                margin: '1.5rem 1rem 1.5rem 1rem '
              }}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Jumlah Pengajuan</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: 'white',
                border: '1px solid #E0E0E0',
                borderRadius: '0.25rem',
                marginLeft: '1rem',
                width: '11rem',
                height: '6.4375rem',
                margin: '1.5rem 1rem 1.5rem 1rem '
              }}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Jumlah Analisa</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: 'white',
                border: '1px solid #E0E0E0',
                borderRadius: '0.25rem',
                marginLeft: '1rem',
                width: '11rem',
                height: '6.4375rem',
                margin: '1.5rem 1rem 1.5rem 1rem '
              }}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Jumlah Preparasi</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
            </Grid>
          </Grid>
        </Header>
        {/*  */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: 'auto',
            marginTop: '1.125rem'
          }}
        >
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
            <Box sx={{ margin: '1.5rem 1rem 1.5rem 1.5rem ' }}>
              <h2>List Laporan Lab</h2>
            </Box>
          </Grid>
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
                borderRadius: '4px',
                marginLeft: '1rem',
                width: '20%'
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

          {/*List Laporan*/}
          <DetailEksternal />
          <DetailEksternal />
          <DetailEksternal />
          <DetailEksternal />
          <DetailEksternal />
          <DetailEksternal />
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
}
