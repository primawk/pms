import React from 'react';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import avatarLogo from 'assets/Images/avatar.png';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';

const DetailEksternal = ({ data, i }) => {
  const navigate = useNavigate();

  const id = data?.id;

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
          gap: '2rem',
          cursor: 'pointer'
        }}
        onClick={() => navigate(`/detail/eksternal/${id}`)}
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
          <Grid item md={1} xs={12} sx={{ marginLeft: '0.5rem' }}>
            <h4> {i + 1}</h4>
          </Grid>
          {/* </Grid> */}
        </Grid>
        {/* Column 2 */}
        <Grid item sx={{ width: '20%' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Informasi Sample</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{data.preparation} Preparasi</h5>
                </Box>
                <Box sx={{ width: '5%', margin: '0 0.5rem 0 0.5rem' }}>
                  <img src="/img/eksternal.png" alt=""></img>
                </Box>
                <Box>
                  <h5>{data.analysis} Analisa</h5>
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
              <h5 style={{ color: '#828282' }}>Dibuat Oleh</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box sx={{ width: '1.5rem', margin: '0 0.5rem 0 0' }}>
                  <img src={avatarLogo} alt=""></img>
                </Box>
                <Box sx={{ margin: '0 0.5rem 0 0.5rem' }}>
                  <h5>{data.account_name}</h5>
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
              <Box sx={{ marginLeft: '1rem', fontSize: '0.5rem' }}>{data.attachment}</Box>
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
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Tanggal Laporan Dibuat</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{dayjs(data.created_at).format('DD/MM/YYYY')}</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailEksternal;
