import React from 'react';
import BankDataReport from './BankDataReport';
import { Grid, Box } from '@mui/material';

const Lists = ({
  searchResults,
  jenisLaporan,
  keteranganLaporan,
  setAllEvent,
  allEvent,
  date,
  setDate,
  attachment,
  setAttachment,
  id
}) => {
  const results = searchResults?.map((_data, i) => (
    <BankDataReport
      id={id}
      disabled={searchResults.length > 1 && i + 1 !== searchResults.length}
      index={i}
      data={_data}
      jenisLaporan={jenisLaporan}
      keteranganLaporan={keteranganLaporan}
      allEvent={allEvent}
      setAllEvent={setAllEvent}
      date={date}
      setDate={setDate}
      attachment={attachment}
      setAttachment={setAttachment}
    />
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
        <h3>Input Tidak Ditemukan</h3>
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
