import React from 'react';
import { Grid, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import avatarLogo from 'assets/Images/avatar.png';

const ListBankData = () => {
  const navigate = useNavigate();
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
          margin: '0 1rem 0 0',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          cursor: 'pointer',
          overflow: 'auto'
        }}
        spacing={3}
        onClick={() => navigate(`/bank-data/input`)}
        xs={12}
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
            {/* <h4> {i + 1}</h4> */}
            <h4>1</h4>
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
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Masa Berlaku Dokumen</h5>
            </Box>
            <Box sx={{}}>12/04/2022</Box>
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
        <Grid item>
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
        <Grid item>
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
      </Grid>
    </>
  );
};

export default ListBankData;
