import React from 'react';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const ListLaporanEksternal = ({ data, index, lastUpdate }) => {
  const navigate = useNavigate();

  const sumPreparation = lastUpdate[index].reduce((accumulator, object) => {
    return accumulator + object.preparation;
  }, 0);

  const sumAnalysis = lastUpdate[index].reduce((accumulator, object) => {
    return accumulator + object.analysis;
  }, 0);

  const reports = lastUpdate.map((item) => item.length);

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
        onClick={() => navigate('/lab-report/laporan-perusahaan', { state: data })}
      >
        <Grid item sx={{ margin: '0 0 0 1.5rem', width: '26%' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer'
            }}
          >
            <Box>
              <img src="/img/eksternal.png" alt=""></img>
            </Box>
            <Grid item>
              <Box>
                <h5>{data}</h5>
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
              <h5 style={{ color: '#828282' }}>Jumlah Pengajuan</h5>
            </Box>
            <Box>
              <h5>{reports[index]}</h5>
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
              <h5 style={{ color: '#828282' }}>Informasi Sample</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{sumPreparation} Preparasi</h5>
                </Box>
                <Box sx={{ width: '5%', margin: '0 0.5rem 0 0.5rem' }}>
                  <img src="/img/eksternal.png" alt=""></img>
                </Box>
                <Box>
                  <h5>{sumAnalysis} Analisa</h5>
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
              <h5 style={{ color: '#828282' }}>Terakhir di Edit</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{dayjs(lastUpdate[index][0].updated_at).format('DD/MM/YYYY')}</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListLaporanEksternal;
