import React from 'react';

// components
import { Grid, Button, Box } from '@mui/material';
import CustomPagination from '../../components/Pagination/index';
import SearchBar from './components/SearchBar';
import SummaryLaporan from './components/SummaryLaporan';
import ListLaporanInternal from './components/ListLaporanInternal';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';

// custom hooks
import useModal from '../../hooks/useModal';

export default function ListInternal() {
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
            <Box sx={{ margin: '1.5rem 1rem 1.5rem 1.5rem' }}>
              <h3>List Laporan Lab Internal</h3>
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
          <ListLaporanInternal />
          <ListLaporanInternal />
          <ListLaporanInternal />
          <ListLaporanInternal />

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
