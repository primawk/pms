import React, { useState, useEffect } from 'react';

// components
import { Grid, Box } from '@mui/material';
import CustomPagination from '../../components/Pagination/index';
// import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBarExternal';
import Lists from './resultDetailEksternal';
import { LoadingModal } from 'components/Modal';
import { Icon } from '@iconify/react';

// utils
import { ceilTotalData } from 'utils/helper';

// custom hooks
import usePagination from 'hooks/usePagination';

// services
import { fetchExternalCompany } from 'services/LabService';

export default function CompanyReport({
  companyReport,
  setSearch,
  setCompanyReport,
  companyName,
  dataEksternal,
  isFetching,
  isLoading
}) {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { isShowing, toggle } = useModal();
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  const [keyword, setKeyword] = useState('');
  const { page, handleChangePage, resetPage } = usePagination();

  // const {
  //   data: dataEksternal,
  //   isLoading,
  //   isFetching
  // } = useQuery(
  //   ['external', page, keyword, selectedDates, companyName],
  //   () =>
  //     LabService.getReport({
  //       report_type: 'external',
  //       company_name: companyName,
  //       keyword: keyword,
  //       page: page,
  //       row: row
  //     })
  //   // { keepPreviousData: true }
  // );

  useEffect(() => {
    fetchExternalCompany(companyName)
      .then((response) => {
        setPosts(response);
        return response;
      })
      .then(() => {
        setSearchResults(dataEksternal);
      });
  }, [companyName, dataEksternal]);

  const sumPreparation = posts?.data?.data.reduce((accumulator, object) => {
    return accumulator + object.preparation;
  }, 0);

  const sumAnalysis = posts?.data?.data.reduce((accumulator, object) => {
    return accumulator + object.analysis;
  }, 0);

  const handleBtn = () => {
    setCompanyReport(false);
  };

  return (
    <>
      {isFetching && isLoading && <LoadingModal />}
      <div className="app-content">
        <Header background="headerPerusahaan.png">
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
              // justifyContent: 'center'
            }}
          >
            <Grid
              item
              sx={{
                // marginLeft: '1rem',
                width: '15rem',
                height: '6.4375rem'
                // margin: '1.5rem 4rem 1.5rem 1rem '
              }}
            >
              <Box
                sx={{
                  margin: '1rem 1rem 1rem 0',
                  color: 'black',
                  fontWeight: '700',
                  fontSize: '1rem'
                }}
              >
                Laporan Lab
              </Box>
              <Box
                sx={{
                  margin: '0.75rem 1rem 1rem 0',
                  fontWeight: '700',
                  fontSize: '1rem',
                  color: 'black'
                }}
              >
                <h3>{companyName}</h3>
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
              <Box
                sx={{
                  margin: '1rem 1rem 0.75rem 1rem',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  fontSize: '14px'
                }}
              >
                Jumlah Pengajuan
              </Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem', fontWeight: '700' }}>
                {posts?.data?.data?.length}
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
              <Box
                sx={{
                  margin: '1rem 1rem 0.75rem 1rem',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  fontSize: '14px'
                }}
              >
                Jumlah Analisa
              </Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem', fontWeight: '700' }}>
                {sumAnalysis}
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
              <Box
                sx={{
                  margin: '1rem 1rem 0.75rem 1rem',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  fontSize: '14px'
                }}
              >
                Jumlah Preparasi
              </Box>
              <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem', fontWeight: '700' }}>
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
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ margin: '1.5rem 1rem 1.5rem 1.5rem ' }}>
              <h2>List Laporan Lab</h2>
            </Box>
            <Box>
              <Grid
                container
                sx={{
                  gap: '1rem',
                  paddingRight: '2rem',
                  cursor: 'pointer'
                }}
                onClick={handleBtn}
              >
                <Grid item>
                  <Icon icon="akar-icons:arrow-left" color="#3f48c0" />
                </Grid>
                <Grid item>
                  <h2
                    style={{
                      // margin: '1rem 0.5rem 0.3rem 0',
                      fontWeight: '500',
                      fontSize: '14px'
                    }}
                  >
                    Back
                  </h2>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <SearchBar
            companyReport={companyReport}
            posts={posts?.data?.data}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            setSelectedDates={setSelectedDates}
            selectedDates={selectedDates}
            keyword={keyword}
            setKeyword={setKeyword}
            resetPage={resetPage}
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
              <CustomPagination
                count={ceilTotalData(posts?.data?.pagination?.total_data || 0, 15)}
                page={page}
                handleChangePage={handleChangePage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
