import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// components
import { Grid, Box } from '@mui/material';
import CustomPagination from '../../components/Pagination/index';
// import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Lists from './resultDetailEksternal';

// custom hooks
// import useModal from '../../hooks/useModal';

// services
import { fetchExternalCompany } from 'services/LabService';

export default function CompanyReport() {
  const location = useLocation();
  // const { isShowing, toggle } = useModal();
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  const companyName = location.state;

  useEffect(() => {
    fetchExternalCompany(companyName)
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, [selectedDates, companyName]);

  const sumPreparation = posts?.reduce((accumulator, object) => {
    return accumulator + object.preparation;
  }, 0);

  const sumAnalysis = posts?.reduce((accumulator, object) => {
    return accumulator + object.analysis;
  }, 0);

  return (
    <>
      <div className="app-content">
        <Header background="dashboard.png">
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Grid
              item
              sx={{
                marginLeft: '1rem',
                width: '15rem',
                height: '6.4375rem'
                // margin: '1.5rem 4rem 1.5rem 1rem '
              }}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem', color: 'white' }}>Laporan Lab</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1rem', color: 'white' }}>
                <h3>{location.state}</h3>
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
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>
                {posts?.length}
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
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Jumlah Analisa</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>{sumAnalysis}</Box>
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
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>
                {sumPreparation}
              </Box>
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

          <SearchBar
            posts={posts}
            setSearchResults={setSearchResults}
            setSelectedDates={setSelectedDates}
            selectedDates={selectedDates}
          />

          {/*List Laporan*/}
          {/* {searchResults ? (
            <>
              {searchResults?.map((data, i) => (
                <DetailEksternal data={data} i={i} />
              ))}
            </>
          ) : (
            <Box sx={{ marginLeft: '25rem' }}>
              <h1>Data tidak ditemukan !</h1>
            </Box>
          )} */}
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
              <CustomPagination />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
