import React from 'react';
import { Grid, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import avatarLogo from 'assets/Images/avatar.png';

const ListBankData = () => {
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
          margin: '0 1rem 0 0',
          width: '100%',
          // height: '6.125rem',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          cursor: 'pointer'
        }}
        spacing={3}
        //   onClick={() => navigate(`/lab-report/detail/eksternal/${id}`, { state: data })}
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
        <Grid item xs={1.2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '1rem'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>Tanggal</Box>
            <Box sx={{ fontSize: '12px' }}>12 Januari 2022</Box>
          </Grid>
        </Grid>

        {/* Column 2 */}
        <Grid item md={1.5} xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Jenis Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>Kontrak</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 3 */}
        <Grid item md={2} xs={2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Keterangan Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box sx={{}}>
                  <h5>Kontrak Pembayaran</h5>
                </Box>
              </Grid>
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
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Attachment</h5>
            </Box>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Icon icon="ph:file-pdf-duotone" color="#3f48c0" fontSize={24} />
              <Box sx={{ marginLeft: '0.5rem', fontSize: '0.5rem' }}>Kontrak__mitra.pdf</Box>
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
        <Grid item md={2} xs={2}>
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
                  {/* <h5>{dayjs(data?.date).format('DD/MM/YYYY')}</h5> */}
                  12/04/2022
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 6 */}
        <Grid item md={1.5} xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Jenis Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>Kontrak</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 7 */}
        <Grid item md={1.5} xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Jenis Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>Kontrak</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 8 */}
        <Grid item md={1.5} xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Jenis Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>Kontrak</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListBankData;
