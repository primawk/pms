import React from 'react';
import List from './components/ListLaporanEksternalv2';
import { Grid, Box } from '@mui/material';

const resultEksternal = ({ searchResults, setCompanyReport, companyName, setCompanyName }) => {
  const searchResultsv2 = searchResults?.reduce((groups, item) => {
    const group = groups[item.company_name] || [];
    group.push(item);
    groups[item.company_name] = group;
    return groups;
  }, {});

  const results = searchResults
    ? Object.values(searchResults).map((item, index) => (
        <List
          data={item}
          index={index}
          lastUpdate={searchResultsv2}
          setCompanyReport={setCompanyReport}
          companyName={companyName}
          setCompanyName={setCompanyName}
        />
      ))
    : null;

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

export default resultEksternal;
