import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { Grid, Button, Box } from '@mui/material';
import SearchBarExternal from './components/SearchBarExternal';
import CustomPagination from '../../components/Pagination/index';
import SummaryLaporan from './components/SummaryLaporan';
import { LoadingModal } from 'components/Modal';
import Result from './resultEksternal';

// utils
// import { ceilTotalData } from 'utils/helper';

// custom hooks
// import usePagination from 'hooks/usePagination';

// services
import { fetchExternal } from 'services/LabService';

export default function ListEksternal({
  isFetchingActivity,
  totalPrepEks,
  totalPrep,
  totalAnalysisEks
}) {
  // const { isShowing, toggle } = useModal();
  const navigate = useNavigate();
  const [searchResultsEksternal, setSearchResultsEksternal] = useState([]);
  const [postsEksternal, setPostsEksternal] = useState([]);
  // const { page, handleChangePage } = usePagination();
  // const row = 5;

  useEffect(() => {
    fetchExternal()
      .then((json) => {
        setPostsEksternal(json);
        return json;
      })
      .then((json) => {
        setSearchResultsEksternal(json);
      });
  }, []);

  const lastUpdate = Object.values(postsEksternal);

  return (
    <>
      {/* <PilihLaporan toggle={toggle} isShowing={isShowing} /> */}

      <div className="app-content">
        <SearchBarExternal posts={postsEksternal} setSearchResults={setSearchResultsEksternal} />
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
              onClick={() => navigate(`/input-laporan-eksternal`)}
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

          <SummaryLaporan
            totalPrepEks={totalPrepEks}
            totalPrep={totalPrep}
            totalAnalysisEks={totalAnalysisEks}
          />
          {/*List Laporan*/}
          {isFetchingActivity && <LoadingModal />}
          <Result searchResults={searchResultsEksternal} lastUpdate={lastUpdate} />

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
