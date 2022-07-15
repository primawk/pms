import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

//components
import Summary from './Summary';
import ListData from './ListData';

const InventorySection = ({ title, subtitle, summary, listData }) => {
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

          <Summary />

          <ListData subtitle={subtitle} />
        </Grid>
      </Grid>
    </div>
  );
};

export default InventorySection;
