import React from 'react';
import { Grid, Button, Box } from '@mui/material';

const DeleteHome = () => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
        overflow: 'auto', // it makes this container follow the height of its content
        position: 'relative'
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '30rem',
          height: '14.563rem',
          backgroundColor: 'white',
          borderRadius: '4px',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 'auto'
        }}
      >
        <h2>Delete Data</h2>
        <Box sx={{ fontSize: '0.875rem', marginBottom: '3.5rem' }}>
          Apakah anda yakin ingin menghapus data?
        </Box>
        <Grid item>
          <Grid container>
            <Grid item sx={{ marginRight: '1rem' }}>
              <Button variant="outlined" sx={{ fontWeight: '400' }}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{ boxShadow: '0', fontWeight: '400', marginRight: '1.5rem' }}
              >
                Yes
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleteHome;
