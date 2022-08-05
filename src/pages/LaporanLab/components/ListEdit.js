import React from 'react';
import { Grid, Box } from '@mui/material';

const ListEdit = (data, name) => {
  return (
    <>
      <Grid item>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          {/* Activity */}
          <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
            <img src="/img/avatar1.png" alt=""></img>
          </Grid>
          <Grid item>
            {data?.data.map((item) => (
              <Box style={{ fontSize: '1rem' }}>Putri Devina {item}</Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListEdit;
