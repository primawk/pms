import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import { Icon } from '@iconify/react';

const SummaryTitle = ({ setPage, hillName, handleDownload }) => {
  return (
    <>
      <Grid
        item
        container
        sx={{
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Grid
          item
          sx={{
            fontWeight: '700',
            fontSize: '24px',
            marginLeft: '24px'
          }}
          xs={12}
          sm={6}
        >
          Summary {hillName}
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
            // padding: '24px 0 24px 24px',
            // marginLeft: '1rem'
          }}
        >
          <Grid
            item
            sx={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Grid item>
              <Icon icon="akar-icons:arrow-left" color="#3f48c0" />
            </Grid>
            <Grid item onClick={() => setPage('')}>
              <h2
                style={{
                  marginLeft: '12px',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                Back
              </h2>
            </Grid>
          </Grid>
          <Grid item sx={{ padding: '24px 0 24px 24px', marginRight: '24px' }} xs={9}>
            <Button sx={{ backgroundColor: '#E5E5FE' }} onClick={handleDownload}>
              <img src="/img/download-loss.png" alt=""></img>
              <Box sx={{ marginLeft: '1rem' }}>Download Laporan </Box>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SummaryTitle;
