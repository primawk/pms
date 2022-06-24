import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

import ArrowDown from '@iconify-icons/charm/chevron-down';
import { Icon } from '@iconify/react';

import Summary from './Summary';
import ListData from './ListData';

const InventorySection = ({ title, subtitle }) => {
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

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            mb={1}
            mt={2}
            textAlign="center"
            color="#828282"
          >
            SHOW MORE
            <Icon width={25} height={25} icon={ArrowDown} style={{ marginLeft: '0.5em' }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InventorySection;
