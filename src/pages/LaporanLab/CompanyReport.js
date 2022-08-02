import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLocation } from 'react-router-dom';

// components
import { Grid, Box } from '@mui/material';
import CustomPagination from '../../components/Pagination/index';
// import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import DetailEksternal from 'pages/LaporanLab/components/DetailEksternal';
import SearchBar from './components/SearchBar';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import { fetchExternal } from 'services/LabService';

export default function CompanyReport() {
  const location = useLocation();
  const { isShowing, toggle } = useModal();
  const [posts, setPosts] = useState([]);
  // const [searchResultsEksternal, setSearchResultsEksternal] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});

  useEffect(() => {
    fetchExternal().then((json) => {
      setPosts(json);
      return json;
    });
    // .then((json) => {
    //   setSearchResults(json);
    // });
  }, []);

  const data = posts[location.state];

  console.log(data);

  // const companyName = posts['0'].company_name;

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
              // margin: '0 0 1rem 10rem'
            }}
          >
            <Grid
              item
              sx={{
                marginLeft: '1rem',
                width: '15rem',
                height: '6.4375rem',
                margin: '1.5rem 4rem 1.5rem 1rem '
              }}
            >
              <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Lab</Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1rem' }}>
                <h3></h3>
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
                {data?.length}
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
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
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
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
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
            setSearchResults={setPosts}
            setSelectedDates={setSelectedDates}
            selectedDates={selectedDates}
          />

          {/*List Laporan*/}
          {data ? (
            <>
              {data?.map((data, i) => (
                <DetailEksternal data={data} i={i} />
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
