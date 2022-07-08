import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, CssBaseline } from '@mui/material';
import LoginImage from '../../../assets/Images/Login4.png';

export default function LayoutAuth() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${LoginImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid container alignItems="center" justifyContent="center" item xs={12} sm={8} md={6}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
