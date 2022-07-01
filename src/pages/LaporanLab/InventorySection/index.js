import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

import ArrowDown from '@iconify-icons/charm/chevron-down';
import { Icon } from '@iconify/react';

import Summary from './Summary';
import ListData from './ListData';

const InventorySection = ({ title, subtitle }) => {
  return (
    <div className="app-content">
      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          direction: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          position: 'absolute',
          width: '78.625rem',
          height: '9.25rem',
          left: '7.5rem',
          top: '14.188rem'
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            direction: 'row',
            alignItems: 'center',
            padding: '16px 24px',
            gap: '24px',
            width: '1258px',
            height: '74px',
            borderBottom: 1
          }}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              backgroundColor: 'white',
              direction: 'row',
              alignItems: 'center',
              padding: '16px 24px',
              gap: '11px',
              width: '640px',
              height: '42px'
            }}
          >
            <TextField
              id="outlined-basic"
              label="Cari Nomor Sample/Nama Perusahaan/Requester"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InventorySection;
