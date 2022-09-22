import React from 'react';
import { Grid, Box } from '@mui/material';
import dayjs from 'dayjs';

// services
// import { fetchExternalCompany } from 'services/LabService';
// import LabService from 'services/LabService';

const ListLaporanEksternal = ({ data, index, lastUpdate, setCompanyReport, setCompanyName }) => {
  const lastUpdatev2 = Object.values(lastUpdate);

  const sumPreparation = lastUpdatev2[index].reduce((accumulator, object) => {
    return accumulator + object.preparation;
  }, 0);

  const sumAnalysis = lastUpdatev2[index].reduce((accumulator, object) => {
    return accumulator + object.analysis;
  }, 0);

  const reports = lastUpdatev2?.map((item) => item.length);

  const handleBtn = () => {
    setCompanyReport(true);
    setCompanyName(data);
  };

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
        onClick={handleBtn}
      >
        {/* Column 1 */}
        <Grid item xs={2}>
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
              <h5 style={{ color: '#828282' }}>Tanggal Pembuatan</h5>
            </Box>
            <Box>
              <h5 style={{ fontWeight: '700', fontSize: '14px', color: '#3F48C0' }}>
                Sabtu, 12 Juli 2022
              </h5>
            </Box>
          </Grid>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={3}>
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
              <img src="/img/ikonEksternal.png" alt=""></img>
            </Box>
            <Box>
              <h5>{data}</h5>
            </Box>
          </Grid>
        </Grid>

        {/* Column 3 */}
        <Grid item xs={2}>
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

        {/* Column 4 */}
        <Grid item xs={3}>
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
        {/* Column 5 */}
        <Grid item xs={2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Sample Terakhir</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{dayjs(lastUpdatev2[index][0].updated_at).format('DD/MM/YYYY')}</h5>
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
