import React from 'react';
import { Grid } from '@mui/material';

const InformasiBox = ({ title, quantity }) => {
  return (
    <>
      <Grid
        item
        container
        sx={{
          justifyContent: 'space-between',
          border: 1,
          borderColor: 'lightGray',
          borderRadius: '4px',
          marginBottom: { xs: '0.5rem' }
        }}
        xs={12}
        sm={5}
        md={2.3}

      >
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          xs={10}
        >
          <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
            {title}
          </Grid>
          <Grid
            item
            sx={{
              margin: '0 0 16px 16px',
              fontWeight: '700',
              fontSize: '28px',
              color: '#DA4540'
            }}
          >
            <Grid container>
              <Grid item sx={{ padding: '16px 16px 0 0' }} xs={2}>
                <img src="/img/down.png" alt=""></img>
              </Grid>
              <Grid item>{quantity}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default InformasiBox;
