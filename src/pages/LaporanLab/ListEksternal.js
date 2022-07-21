import React from 'react';

// components
import { Grid, Button, Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import CustomPagination from '../../components/Pagination/index';
import ListLaporanEksternal from './components/ListLaporanEksternal';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';
import SummaryLaporan from './components/SummaryLaporan';

// custom hooks
import useModal from '../../hooks/useModal';

export default function ListEksternal() {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <PilihLaporan toggle={toggle} isShowing={isShowing} />

      <div className="app-content">
        <SearchBar />
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
              <h3>List Laporan Lab Eksternal</h3>
            </Box>

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

          {/* Summary Laporan */}
          <SummaryLaporan />

          {/*List Laporan*/}
          <ListLaporanEksternal />
          <ListLaporanEksternal />
          <ListLaporanEksternal />
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
