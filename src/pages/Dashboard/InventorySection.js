import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import InventoryCard from 'components/Card/InventoryCard';

const InventorySection = ({ title }) => {
  return (
    <div className="app-content">
      <Grid sx={{ background: 'white' }}>
        <Grid sx={{ padding: '1em 1.5em' }}>
          <Grid container direction="row" alignItems="center" justifyContent="flex-start" mb={3}>
            <Typography mr={5} variant="h4">
              {title}
            </Typography>
            <Button variant="text">Lihat Selengkapnya</Button>
          </Grid>

          <Grid container direction="row" alignItems="center" justifyContent="space-between">
            <Grid item md={3} xs={6}>
              <InventoryCard />
            </Grid>
            <Grid item md={3} xs={6}>
              <InventoryCard />
            </Grid>
            <Grid item md={3} xs={6}>
              <InventoryCard />
            </Grid>
            <Grid item md={3} xs={6}>
              <InventoryCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InventorySection;
