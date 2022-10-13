import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputBankDataModal from '../../components/Modal/BankData/InputBankData';
import useAuth from 'hooks/useAuth';

// components
// import DataReport from './components/DataReport';
// import InputBankData from './InputBankData';
import Katalog from './Katalog';

const BankData = () => {
  useAuth();

  // const [inputBankData, setBankData] = useState(false);
  // const [dataReport, setDataReport] = useState(false);

  return (
    <>
      <Katalog />
    </>
  );
};

export default BankData;
