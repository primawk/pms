import React from 'react';
import { Grid, Box } from '@mui/material';

const editLog = (data, index) => {
  console.log(data.data);

  return (
    <>
      <Grid
        item
        sx={{
          height: '14%',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          width: '50rem'
        }}
      >
        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box style={{ margin: '1rem 0.5rem 1rem 2rem', fontSize: '1.25rem' }}>12 Juni 2022</Box>
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
              <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
                <img src="/img/avatar1.png" alt=""></img>
              </Grid>
              <Grid item>
                <Box style={{}}>Putri Devina mengedit kadar Nikel 13:21 WITA</Box>
              </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
                <img src="/img/avatar2.png" alt=""></img>
              </Grid>
              <Grid item>
                <Box style={{}}>Nisa mengedit kadar Fe 11:21 WITA</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default editLog;
