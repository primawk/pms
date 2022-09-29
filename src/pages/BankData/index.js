import React from 'react';
import { Grid } from '@mui/material';

// components
import Header from 'components/Header';

const BankData = () => {
  return (
    <>
      <Header title="BANK DATA" background="dashboard.png" />
      <div className="app-content">
        <Grid sx={{ background: 'white' }}>Test </Grid>
      </div>
    </>
  );
};

export default BankData;
