import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { addDays } from 'date-fns';

// components
import { Grid, Button, Box } from '@mui/material';
import CustomPagination from '../../components/Pagination/index';
import SearchBar from './components/SearchBar';
import SummaryLaporan from './components/SummaryLaporan';
import { LoadingModal } from 'components/Modal';
import Lists from './Lists';

// utils
import { ceilTotalData } from 'utils/helper';

// custom hooks
import usePagination from 'hooks/usePagination';
import useAuth from 'hooks/useAuth';

// services
import { fetchInternal } from 'services/LabService';

export default function ListInternal({
  dataInternal,
  isFetchingActivity,
  isLoadingActivity,
  totalPrepEks,
  totalPrep,
  totalAnalysisEks,
  menuTab
}) {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  const { page, handleChangePage, resetPage } = usePagination(1);
  const { isGranted } = useAuth();

  const row = 5;

  useEffect(() => {
    fetchInternal(selectedDates, page, row)
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json?.data?.data);
      });
  }, [selectedDates, page]);

  return (
    <>
      <div className="app-content">
        <SearchBar
          posts={dataInternal?.data?.data}
          setSearchResults={setSearchResults}
          setSelectedDates={setSelectedDates}
          selectedDates={selectedDates}
          resetPage={resetPage}
        />
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
            {isGranted && (
              <Button
                variant="contained"
                onClick={() => navigate(`/lab-report/input-laporan-internal`)}
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
            )}
          </Grid>

          {/* Summary Laporan */}

          <SummaryLaporan
            preparation={dataInternal?.data?.data}
            totalPrepEks={totalPrepEks}
            totalPrep={totalPrep}
            totalAnalysisEks={totalAnalysisEks}
            menuTab={menuTab}
          />

          {/*List Laporan*/}
          {isFetchingActivity && isLoadingActivity && <LoadingModal />}
          <Lists searchResults={searchResults} />

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
              <CustomPagination
                count={ceilTotalData(posts?.data?.pagination?.total_data || 0, 5)}
                page={page}
                handleChangePage={handleChangePage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
