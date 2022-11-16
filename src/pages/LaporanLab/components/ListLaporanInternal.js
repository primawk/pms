import React from 'react';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import avatarLogo from 'assets/Images/avatar.png';
import dayjs from 'dayjs';

const ListLaporanInternal = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 0 0 0',
        height: '6.125rem',
        paddingTop: 1,
        borderBottom: 1,
        borderBottomColor: '#E0E0E0',
        cursor: 'pointer',
        overflowX: 'auto'
      }}
      gap={4}
      onClick={() => navigate(`/lab-report/detail/internal/${data.id}`)}
    >
      <Grid item sx={{ margin: '0 0 0 1.5rem' }} xs={3.2}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Box>
            <img src="/img/Icon Laporan.png" alt="" />
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
                <h5>{data?.sample_type}</h5>
              </Box>
              <Box>
                <h5 style={{ color: '#828282' }}>{data?.sample_code}</h5>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Column 2 */}
      <Grid item sx={{}} xs={2}>
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
            <h5>{data?.hill_name}</h5>
          </Box>
        </Grid>
      </Grid>

      {/* Column 3 */}
      <Grid item sx={{}} xs={2}>
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
              {data?.dome_name}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Column 4 */}
      <Grid item sx={{}} xs={2}>
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
                <h5>{data?.account_name}</h5>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Column 5 */}
      <Grid item sx={{}} xs={2}>
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
                <h5>{dayjs(data?.date).format('DD/MM/YYYY')}</h5>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListLaporanInternal;
