import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

// components
import { Grid, Button, Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import CustomPagination from '../../components/Pagination/index';
import ListLaporanEksternal from './components/ListLaporanEksternal';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';
import SummaryLaporan from './components/SummaryLaporan';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import LabService from 'services/LabService';

export default function ListEksternal() {
  const { isShowing, toggle } = useModal();

  const {
    data,
    isLoading: isLoadingActivity,
    isFetching: isFetchingActivity
  } = useQuery(
    ['report', 'external'],
    () =>
      LabService.getReport({
        report_type: 'external'
      })
    // { keepPreviousData: true }
  );

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
          {data?.data?.data.length > 0 ? (
            <>
              {data?.data?.data.map((_list) => (
                <div key={_list?.id}>
                  <Link
                    to={`/mining-activity/${_list?.activity_type}/detail/${_list.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    key={_list.id}
                  >
                    <ListLaporanEksternal data={_list} />
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <Box sx={{ marginLeft: '25rem' }}>
              <h1>Data tidak ditemukan !</h1>
            </Box>
          )}

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
