import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, CssBaseline } from '@mui/material';

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
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid container alignItems="center" justifyContent="center" item xs={12} sm={8} md={6}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
