import React from 'react';
import { Grid, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import avatarLogo from 'assets/Images/avatar.png';

const List = ({ setDetail }) => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 3,
          margin: '0 0 0 0', // ???
          // height: '6.125rem',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          cursor: 'pointer'
        }}
        spacing={3}
        onClick={() => setDetail(true)}
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
              marginLeft: '1rem'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', fontSize: '14px', fontWeight: '700' }}>
              Pemasaran di Dermaga
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
              <Box sx={{ fontSize: '12px' }}>Biji Nikel</Box>
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
            <Box>
              <Box sx={{ fontSize: '12px' }}>Bukit VIII (SM C)</Box>
            </Box>
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
            <Grid
              item
              sx={{
                fontSize: '12px',
                backgroundColor: '#E5E5FE',
                color: '#3F48C0',
                // width: '58px',
                borderRadius: '4px',
                textAlign: 'center'
              }}
              xs={8}
            >
              Putri Devina
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
                <Box>Provisi</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default List;
