import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function LayoutAuth() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Outlet />
    </Grid>
  );
}
