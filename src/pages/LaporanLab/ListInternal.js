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
// import usePagination from 'hooks/usePagination';
import useAuth from 'hooks/useAuth';

// services
// import { fetchInternal } from 'services/LabService';

export default function ListInternal({
  dataInternal,
  isFetchingActivity,
  isLoadingActivity,
  totalPrepEks,
  totalPrep,
  totalAnalysisEks,
  menuTab,
  keyword,
  setKeyword,
  page,
  handleChangePage,
  resetPage,
  setSelectedDates,
  selectedDates
}) {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  // const [posts, setPosts] = useState([]);

  // const { page, handleChangePage, resetPage } = usePagination(1);
  const { isGranted } = useAuth();

  useEffect(() => {
    setSearchResults(dataInternal?.data?.data);
  }, [dataInternal]);

  return (
    <>
      <div className="app-content">
        <SearchBar
          posts={dataInternal?.data?.data}
          setSearchResults={setSearchResults}
          setSelectedDates={setSelectedDates}
          selectedDates={selectedDates}
          resetPage={resetPage}
          keyword={keyword}
          setKeyword={setKeyword}
        />
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'flex-start',
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
                count={ceilTotalData(dataInternal?.data?.pagination?.total_data || 0, 15)}
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
