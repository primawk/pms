import React from 'react';
import { Grid } from '@mui/material';
import Alert from '../../assets/Images/clock-history.png';

const Banner = () => {
  return (
    <>
      <Grid item xs={6} sm={6} md={6} lg={5.7}>
        <Grid item container sx={{}}>
          <Grid
            item
            sx={{
              backgroundColor: 'red',
              borderRadius: '4px 0 0 4px'
            }}
            xs={0.2}
          ></Grid>
          <Grid
            item
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0.5rem',
              fontSize: '14px',
              backgroundColor: '#FCEFEF',
              alignItems: 'center',
              borderRadius: '0 4px 4px 0'
            }}
            gap={1}
            xs={11.8}
          >
            <Grid item sx={{}}>
              <img src={Alert} alt=""></img>
            </Grid>
            <Grid item sx={{}}>
              Mohon segera perbaharui dan upload dokumen yang sudah diperpanjang
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
