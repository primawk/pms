import React from 'react';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ListDome = () => {
  const navigate = useNavigate();

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
          gap: '4.5rem',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/list-detail-eksternal')}
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
                <h3 style={{ color: '#27ae60' }}>2,4 Ton</h3>
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
              <h5>Biji Nikel</h5>
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
                  <h5>Utara</h5>
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
                  <h5>Ore Hauling ETO to EFO</h5>
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
