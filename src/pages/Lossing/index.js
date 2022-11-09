import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import useAuth from 'hooks/useAuth';
import { useQuery } from 'react-query';

// service
import ModulLossingService from '../../services/ModulLossingService';

// components
import Katalog from './Katalog';
import Summary from './Summary';
import Detail from './Detail';

const Lossing = () => {
  useAuth();
  const [page, setPage] = useState('');
  const [id, setId] = useState('');

  const {
    data: dataSummary,
    isLoading: isLoadingSummary,
    isFetching: isFetchingSummary
  } = useQuery(['summary'], () => ModulLossingService.getSummary());

  const {
    data: dataHill,
    isLoading: isLoadingHill,
    isFetching: isFetchingHill
  } = useQuery(['hill', id], () =>
    ModulLossingService.getHill({
      id
    })
  );

  return (
    <>
      {page === 'detail' ? (
        <Detail setPage={setPage} />
      ) : page === 'summary' ? (
        <Summary setPage={setPage} data={dataHill?.data?.data} />
      ) : (
        <Katalog data={dataSummary?.data?.data} setPage={setPage} setId={setId} />
      )}
    </>
  );
};

export default Lossing;
