import React from 'react';
import { Icon } from '@iconify/react';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import { Grid, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import CustomPagination from '../../components/Pagination/index';
// import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import ListLaporanEksternal from './components/ListLaporanEksternal';
import ListLaporanInternal from './components/ListLaporanInternal';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';

// custom hooks
import useModal from '../../hooks/useModal';

export default function LaporanLab({}) {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <PilihLaporan toggle={toggle} isShowing={isShowing} />
      <Header title="Laporan Lab" background="dashboard.png" />

      <div className="app-content">
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: '9.25rem',
            borderRadius: '8px 8px 8px 8px'
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              height: '4.625rem',
              borderBottom: 1,
              borderBottomColor: '#E0E0E0',
              borderRadius: '8px 8px 0 0'
            }}
          >
            <Grid
              item
              sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1.5rem' }}
              xs={7}
            >
              <TextField
                id="outlined-basic"
                placeholder="Cari Nomor Sample/Nama Perusahaan/Requester"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="il:search" color="#828282" />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Button
              variant="contained"
              sx={{ width: '160px', height: '42px', marginRight: '1.5rem', boxShadow: 0 }}
            >
              Search
            </Button>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              height: '4.625rem',
              borderRadius: '0 0 8px 8px'
            }}
          >
            <Grid
              item
              sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1.5rem' }}
              xs={2}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Jenis Laporan</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Jenis Laporan"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Lihat Semuanya</MenuItem>
                  <MenuItem value={10}>Laporan Internal</MenuItem>
                  <MenuItem value={20}>Laporan Eksternal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1rem' }}
              xs={2}
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
            <Button
              sx={{
                backgroundColor: 'transparent',
                outline: 'none',
                overflow: 'hidden',
                border: 'none',
                marginRight: '1.5rem',
                marginLeft: 'auto'
              }}
            >
              Clear All
            </Button>
          </Grid>
        </Grid>

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
            <Grid
              item
              sx={{
                backgroundColor: 'white',
                border: '1px solid #E0E0E0',
                borderRadius: '0.25rem',
                width: '10rem',
                height: '6.4375rem',
                margin: '1.5rem 1rem 1.5rem 1.5rem '
              }}
              xs={2}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Semua Laporan</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>171</Box>
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
              xs={2}
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
                marginLeft: '1.5rem',
                width: '10rem',
                height: '6.4375rem',
                margin: '1.5rem 1rem 1.5rem 1rem'
              }}
              xs={2}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Eksternal</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>100</Box>
            </Grid>
            <Button
              variant="contained"
              onClick={toggle}
              sx={{
                width: '15.625',
                height: '42px',
                marginRight: '1.5rem',
                marginLeft: 'auto',
                boxShadow: 0
              }}
            >
              Input Laporan Lab
            </Button>
          </Grid>
          <Box sx={{ margin: '0 0 1.5rem 1.5rem' }}>
            <h3>List Laporan Lab</h3>
          </Box>

          {/*List Laporan*/}
          <ListLaporanEksternal />
          <ListLaporanInternal />
          <ListLaporanEksternal />
          <ListLaporanEksternal />
          <ListLaporanInternal />
          <ListLaporanInternal />
          <ListLaporanInternal />
          <ListLaporanEksternal />

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
