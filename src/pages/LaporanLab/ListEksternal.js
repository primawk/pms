import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { Grid, Button, Box } from '@mui/material';
import SearchBar from './components/SearchBarExternal';
import CustomPagination from '../../components/Pagination/index';
import ListLaporanEksternal from './components/ListLaporanEksternal';
import SummaryLaporan from './components/SummaryLaporan';
import { LoadingModal } from 'components/Modal';

// services
import { fetchExternal } from 'services/LabService';

export default function ListEksternal({ isFetchingActivity, totalPrepEks, totalPrep }) {
  // const { isShowing, toggle } = useModal();
  const navigate = useNavigate();
  const [searchResultsEksternal, setSearchResultsEksternal] = useState([]);
  const [postsEksternal, setPostsEksternal] = useState([]);

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

  // console.log(postsEksternal['PT Gitar'][0]);

  return (
    <>
      {/* <PilihLaporan toggle={toggle} isShowing={isShowing} /> */}

      <div className="app-content">
        <SearchBar posts={postsEksternal} setSearchResults={setSearchResultsEksternal} />
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

          <SummaryLaporan totalPrepEks={totalPrepEks} totalPrep={totalPrep} />
          {/*List Laporan*/}
          {isFetchingActivity && <LoadingModal />}
          {searchResultsEksternal ? (
            <>
              {Object.keys(searchResultsEksternal).map((item, index) => (
                <ListLaporanEksternal data={item} index={index} lastUpdate={lastUpdate} />
              ))}
            </>
          ) : (
            <>
              <center>
                <h2>data tidak ditemukan!</h2>
              </center>
            </>
          )}
          {/* <Lists searchResults={searchResults} /> */}
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
