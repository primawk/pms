import React from 'react';
import { Grid, Button } from '@mui/material';
import useAuth from 'hooks/useAuth';

// components
import Katalog from './components/Katalog';
import Summary from './components/Summary';

const Lossing = () => {
  useAuth();
  return (
    <>
      <Summary />
    </>
  );
};

export default Lossing;
