import React from 'react';
import { Grid, Box } from '@mui/material';
import { Icon } from '@iconify/react';

// util
import { capitalizeFirstLetter } from 'utils/helper';

const ListDome = ({ data }) => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '0 1.5rem 0 1.5rem',
          width: '96.5%',
          height: '6.125rem',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          gap: '4.5rem'
        }}
      >
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0.2rem 0 0 1rem'
            }}
          >
            <Box sx={{ marginBottom: '0.3rem' }}>
              <h5 style={{ color: '#828282' }}>Inventory</h5>
            </Box>
            <Grid container>
              <Box sx={{ margin: '0.3rem 0.3rem 0 0' }}>
                <Icon icon="bxs:up-arrow" color="#27ae60" />
              </Box>
              <Box>
                <h3 style={{ color: '#27ae60' }}>{`${data?.tonnage_difference} Ton`}</h3>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Column 2 */}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Jenis Produk</h5>
            </Box>
            <Box>
              <h5>{data?.product_type}</h5>
            </Box>
          </Grid>
        </Grid>

        {/* Column 3 */}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Block</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{data?.block}</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 3 */}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Kegiatan Terakhir</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{capitalizeFirstLetter(data?.activity_type)}</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListDome;
