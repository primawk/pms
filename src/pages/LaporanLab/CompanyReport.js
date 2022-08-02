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
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';
import DetailEksternal from 'pages/LaporanLab/components/DetailEksternal';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import { fetchExternal } from 'services/LabService';

export default function CompanyReport() {
  const location = useLocation();
  const { isShowing, toggle } = useModal();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchExternal().then((json) => {
      setPosts(json);
      return json;
    });
    // .then((json) => {
    //   setSearchResults(json);
    // });
  }, []);

  // const groups = posts.reduce((groups, item) => {
  //   const group = groups[item.company_name] || [];
  //   group.push(item);
  //   groups[item.company_name] = group;
  //   return groups;
  // }, {});

  const data = posts[location.state];

  return (
    <>
      <PilihLaporan toggle={toggle} isShowing={isShowing} />

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
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>
                <h2>{data?.company_name}</h2>
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
            <Grid
              item
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
                marginLeft: '1rem',
                width: '20%'
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter Tanggal | Hari ini </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Filter Tanggal | Hari ini"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

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
