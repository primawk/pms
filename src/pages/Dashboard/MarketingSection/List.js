import React from 'react';
import { Grid, Box } from '@mui/material';
import avatarLogo from 'assets/Images/avatar.png';

const List = ({ setDetail }) => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 3,
          padding: '1rem 1rem 1rem 1rem', // ???
          // height: '6.125rem',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          cursor: 'pointer',
          overflow: 'auto'
        }}
        gap={5}
      >
        <Grid item>
          {/* <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem'
        }}
      > */}
          <Grid item>
            <img src="/img/truck.png" alt=""></img>
          </Grid>
          {/* </Grid> */}
        </Grid>
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: ''
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', fontSize: '14px', fontWeight: '700' }}>
              Pemasaran
            </Box>
            <Box sx={{ fontSize: '14px' }}>12 Januari 2022</Box>
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
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>
              Jenis Produk
            </Box>
            <Box>
              <Box sx={{ fontSize: '12px' }}>Bijih Nikel</Box>
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
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>Block</Box>
            <Box>
              <Box sx={{ fontSize: '12px' }}>Utara</Box>
            </Box>
          </Grid>
        </Grid>

        {/* Column 4 */}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>
              Asal Tumpukan
            </Box>
            <Grid item container sx={{ alignItems: 'center' }}>
              <Grid item sx={{ width: '5%', marginRight: '0.5rem' }}>
                <img src="/img/eksternal.png" alt=""></img>
              </Grid>
              <Grid item sx={{ fontSize: '12px' }}>
                Bukit VIII (SM C)
              </Grid>
            </Grid>
            <Grid item container sx={{ alignItems: 'center' }}>
              <Grid item sx={{ width: '5%', marginRight: '0.5rem' }}>
                <img src="/img/eksternal.png" alt=""></img>
              </Grid>
              <Grid item sx={{ fontSize: '12px' }}>
                Bukit VIII (SM C)
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Column Account*/}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>
              Dibuat Oleh
            </Box>
            <Grid item container sx={{ alignItems: 'center' }}>
              <Box sx={{ width: '1.5rem', margin: '0 0.5rem 0 0' }}>
                <img src={avatarLogo} alt=""></img>
              </Box>
              <Box sx={{ margin: '0 0.5rem 0 0.5rem' }}>
                {/* <h5>{data?.account_name}</h5> */}
                <h5>Putri Devina</h5>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Column 5 */}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>
              Tanggal Laporan Dibuat
            </Box>
            <Box>
              <Grid container sx={{ fontSize: '14px', alignItems: 'center' }}>
                <Box>12/04/2022</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 6 */}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>Status</Box>
            <Box>
              <Grid container sx={{ fontSize: '14px', alignItems: 'center' }}>
                <Box>Aktif</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default List;
