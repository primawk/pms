import React from 'react';
import { Grid } from '@mui/material';
import Header from '../../../components/Header';
import SearchBar from '../components/SearchBar';
import ListBankData from './ListBankData';
import CustomPagination from 'components/Pagination';
import InputBankData from '../../../components/Modal/BankData/InputBankData';

// custom hooks
import useModal from '../../../hooks/useModal';

const DataReport = () => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <InputBankData toggle={toggle} isShowing={isShowing} />
      {/* {isFetching && isLoading && <LoadingModal />} */}
      <Header title="KONTRAK" background="dashboard.png" />

      <div className="app-content">
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
          <SearchBar toggle={toggle} />

          {/*List Laporan*/}
          <ListBankData />
          <ListBankData />
          <ListBankData />
          <ListBankData />
          <ListBankData />
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
              <CustomPagination
              // count={ceilTotalData(posts?.data?.pagination?.total_data || 0, 15)}
              // count={ceilTotalData(posts?.data?.pagination?.total_data || 0, 15)}
              // page={page}
              // handleChangePage={handleChangePage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DataReport;
