import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { Grid, Button, Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import CustomPagination from '../../components/Pagination/index';
import ListLaporanEksternal from './components/ListLaporanEksternal';
import SummaryLaporan from './components/SummaryLaporan';
import { LoadingModal } from 'components/Modal';

// services
import { fetchExternal } from 'services/LabService';

export default function ListEksternal({ isFetchingActivity, totalPrepEks, totalPrep }) {
  // const { isShowing, toggle } = useModal();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchExternal()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  console.log(searchResults);

  return (
    <>
      {/* <PilihLaporan toggle={toggle} isShowing={isShowing} /> */}

      <div className="app-content">
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
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
          {searchResults ? (
            <>
              {Object.keys(searchResults).map((item, index) => (
                <ListLaporanEksternal data={item} index={index} />
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
