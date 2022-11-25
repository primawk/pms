import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from '../../components/BankData/Header';
import SearchBar from '../../components/BankData/SearchBar';
import CustomPagination from 'components/Pagination';
import InputBankData from '../../components/Modal/BankData/InputBankData';
import { LoadingModal } from 'components/Modal';
import { useQuery } from 'react-query';
import Lists from '../../components/BankData/ResultBankData';

// custom hooks
import useModal from '../../hooks/useModal';
import usePagination from 'hooks/usePagination';

// service
import BankDataService from '../../services/BankDataServices';

// utils
import { ceilTotalData } from 'utils/helper';

const DataReport = () => {
  const { isShowing, toggle } = useModal();
  const location = useLocation();
  const { page, handleChangePage } = usePagination(1);
  const [sort, setSort] = useState('');
  const limit = 5;
  const [keyword, setKeyword] = useState('');

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedSearch = useDebounce(keyword, 1000);

  const { data, isLoading, isFetching } = useQuery(
    ['data', location?.state?.title, page, limit, sort, debouncedSearch],
    () =>
      BankDataService.getBankData({
        page,
        limit,
        sort: sort,
        reportType: location?.state?.title,
        description: debouncedSearch
      })
  );

  return (
    <>
      <InputBankData toggle={toggle} isShowing={isShowing} />

      <Header title={location?.state?.title} background="dashboard.png" />

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
          <SearchBar
            toggle={toggle}
            sort={sort}
            setSort={setSort}
            keyword={keyword}
            setKeyword={setKeyword}
          />

          {/*List Laporan*/}
          {isFetching && isLoading && <LoadingModal />}
          <Lists searchResults={data?.data?.data} pagination={data?.data?.pagination} />

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
                count={ceilTotalData(data?.data?.pagination?.total_data || 0, limit)}
                page={page}
                handleChangePage={handleChangePage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DataReport;
