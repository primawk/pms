import React from 'react';
import List from './components/DetailEksternal';
import { Grid, Box } from '@mui/material';

const Lists = ({ searchResults }) => {
  console.log(searchResults);
  const results = Object.values(searchResults).map((item, index) => (
    <List data={item} i={index} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <Grid
      container
      sx={{
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ margin: '1.5rem auto 1.5rem auto' }}>
        <h3>Pencarian Tidak Ditemukan</h3>
      </Box>
      <Box sx={{ margin: 'auto' }}>
        <img src="/img/datanotfound.png" alt=""></img>
      </Box>
      <Box sx={{ margin: '1.5rem auto 0 auto' }}>
        <Box sx={{ fontSize: '1rem', margin: 'auto' }}>
          Mohon maaf, data yang anda cari tidak ditemukan.
        </Box>
      </Box>
      <Box sx={{ fontSize: '1rem', margin: '0 auto 1.5rem auto' }}>
        Silahkan cek kembali pencarian anda.
      </Box>
    </Grid>
  );
  return <main>{content}</main>;
};

export default Lists;
