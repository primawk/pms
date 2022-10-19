import React from 'react';
import { Grid } from '@mui/material';

const InformasiBox = ({ title, quantity, image }) => {
  return (
    <>
      {/* <Grid item sx={{ margin: '0 16px 0 16px', backgroundColor: 'green' }}> */}
      {/* use grid item container instead container inside item, case where we using padding instead margin */}
      <Grid item xs={3}>
        <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item xs={10}>
              <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                  {title}
                </Grid>
                <Grid item sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}>
                  {quantity}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ padding: '16px 16px 0 0' }} xs={2}>
              <img src={image} alt=""></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default InformasiBox;
