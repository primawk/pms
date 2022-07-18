import React from 'react';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import avatarLogo from 'assets/Images/avatar.png';

const ListLaporanInternal = () => {
  const navigate = useNavigate();

  return (
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
      onClick={() => navigate('/detail-internal')}
    >
      <Grid item sx={{ margin: '0 0 0 1.5rem', width: '18%' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Box>
            <img src="/img/eksternal.png" alt=""></img>
          </Box>

          <Grid item>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ marginBottom: '0.5rem' }}>
                <h5>Sample Test PIT</h5>
              </Box>
              <Box>
                <h5 style={{ color: '#828282' }}>MS102-1098P</h5>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Column 2 */}
      <Grid item sx={{ width: '6%' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ marginBottom: '0.5rem' }}>
            <h5 style={{ color: '#828282' }}>Bukit</h5>
          </Box>
          <Box>
            <h5>Bukit IV</h5>
          </Box>
        </Grid>
      </Grid>

      {/* Column 3 */}
      <Grid item sx={{ width: '17%' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ marginBottom: '0.5rem' }}>
            <h5 style={{ color: '#828282' }}>Dome/Tumpukan</h5>
          </Box>
          <Box>
            <Grid container sx={{ alignItems: 'center' }}>
              <Box>
                <h5>2 Preparasi</h5>
              </Box>
              <Box sx={{ width: '5%', margin: '0 0.5rem 0 0.5rem' }}>
                <img src="/img/eksternal.png" alt=""></img>
              </Box>
              <Box>
                <h5>4 Analisa</h5>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Column 4 */}
      <Grid item sx={{ width: '14%' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ marginBottom: '0.5rem' }}>
            <h5 style={{ color: '#828282' }}>Dibuat Oleh</h5>
          </Box>
          <Box>
            <Grid container sx={{ alignItems: 'center' }}>
              <Box sx={{ width: '1.5rem', margin: '0 0.5rem 0 0' }}>
                <img src={avatarLogo} alt=""></img>
              </Box>
              <Box sx={{ margin: '0 0.5rem 0 0.5rem' }}>
                <h5>Putri Devina</h5>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Column 5 */}
      <Grid item sx={{ width: '11%' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ marginBottom: '0.5rem' }}>
            <h5 style={{ color: '#828282' }}>Tanggal Laporan Dibuat</h5>
          </Box>
          <Box>
            <Grid container sx={{ alignItems: 'center' }}>
              <Box>
                <h5>12/01/2022</h5>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListLaporanInternal;
