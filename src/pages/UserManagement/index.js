import React from 'react';
import { Grid } from '@mui/material';

// components
import Header from 'components/Header';
import { Filter } from './UserSection';

export default function UserManagement() {
  return (
    <>
      <Header title="USER MANAGEMENT" background="user-management.png" />

      <div className="app-content">
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Filter />
        </Grid>
        <h4 style={{ marginTop: '100px' }}>ANJAY</h4>
      </div>
    </>
  );
}
