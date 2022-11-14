import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputBankDataModal from '../../components/Modal/BankData/InputBankData';
import useAuth from 'hooks/useAuth';
import { useQuery } from 'react-query';

// components
// import DataReport from './components/DataReport';
// import InputBankData from './InputBankData';
import Katalog from './Katalog';

// service
import BankDataService from '../../services/BankDataServices';

const BankData = () => {
  useAuth();

  const {
    data: dataSummary,
    isLoading: isLoadingSummary,
    isFetching: isFetchingSummary
  } = useQuery(['summary'], () => BankDataService.getSummary());

  return (
    <>
      <Katalog
        dataSummary={dataSummary?.data?.data}
        isLoading={isLoadingSummary}
        isFetching={isFetchingSummary}
      />
    </>
  );
};

export default BankData;
