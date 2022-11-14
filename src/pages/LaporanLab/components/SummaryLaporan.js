import React from 'react';
import { Grid, Box } from '@mui/material';
import { useQuery } from 'react-query';

// services
import LabService from 'services/LabService';

const SummaryLaporan = ({ totalPrep, totalPrepEks, totalAnalysisEks, menuTab, calendar }) => {
  // const [sumPreparationInternal, setPreparationInternal] = useState(0);
  const { data: dataEksternal } = useQuery(
    ['report', 'external'],
    () =>
      LabService.getReport({
        report_type: 'external'
      })
    // { keepPreviousData: true }
  );

  const { data } = useQuery(
    ['report', 'internal'],
    () =>
      LabService.getReport({
        report_type: 'internal'
      })
    // { keepPreviousData: true }
  );

  const summaryInternal = parseInt(data?.data?.pagination.total_data);
  const summaryEksternal = parseInt(dataEksternal?.data?.pagination.total_data);
  const summaryTotal = summaryEksternal + summaryInternal;
  const allPrep = totalPrep + totalPrepEks;
  const allAnalysis = summaryInternal + totalAnalysisEks;

  return (
    <>
      {menuTab === 'internal' ? (
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              width: '11rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1.5rem '
            }}
          >
            <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Semua Laporan</Box>
            <Grid container>
              <Grid item>
                <Box sx={{ margin: '0 1.5rem 0 1rem', fontSize: '1.5rem' }}>{summaryTotal} </Box>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                  <li style={{ fontSize: '0.8rem' }}>{allPrep} Preparasi</li>
                  <li style={{ fontSize: '0.8rem' }}>{allAnalysis} Analisa</li>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              width: '11rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1.5rem '
            }}
          >
            <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Laporan Internal</Box>
            <Grid container>
              <Grid item>
                <Box sx={{ margin: '0 1.5rem 0 1rem', fontSize: '1.5rem' }}>{summaryInternal}</Box>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                  <li style={{ fontSize: '0.8rem' }}>{totalPrep} Preparasi</li>
                  <li style={{ fontSize: '0.8rem' }}>{summaryInternal} Analisa</li>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : calendar ? (
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              width: '11rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1.5rem '
            }}
          >
            <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Semua Laporan</Box>
            <Grid container>
              <Grid item>
                <Box sx={{ margin: '0 1.5rem 0 1rem', fontSize: '1.5rem' }}>{summaryTotal} </Box>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                  <li style={{ fontSize: '0.8rem' }}>{allPrep} Preparasi</li>
                  <li style={{ fontSize: '0.8rem' }}>{allAnalysis} Analisa</li>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              width: '11rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1.5rem '
            }}
          >
            <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Laporan Eksternal</Box>
            <Grid container>
              <Grid item>
                <Box sx={{ margin: '0 1.5rem 0 1rem', fontSize: '1.5rem' }}>{summaryEksternal}</Box>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                  <li style={{ fontSize: '0.8rem' }}>{totalPrepEks} Preparasi</li>
                  <li style={{ fontSize: '0.8rem' }}>{totalAnalysisEks} Analisa</li>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        // <Grid container sx={{ margin: '0 0 0 0.5rem' }} spacing={2}>
        //   {/* Semua Laporan */}
        //   <Grid item>
        //     <Grid
        //       container
        //       sx={{
        //         display: 'flex'
        //       }}
        //     >
        //       <Box
        //         sx={{
        //           fontSize: '12px',
        //           fontWeight: '500',
        //           borderRadius: '0.25rem 0 0 0.25rem',
        //           padding: '0.5rem',
        //           border: 1,
        //           borderRight: 0,
        //           borderColor: '#E0E0E0'
        //         }}
        //       >
        //         {summaryTotal}
        //       </Box>
        //       <Box
        //         sx={{
        //           fontSize: '12px',
        //           fontWeight: '500',
        //           padding: '0.5rem 1rem 0.5rem 1rem',
        //           border: 1,
        //           borderRadius: ' 0 0.25rem 0.25rem 0',
        //           borderColor: '#E0E0E0'
        //         }}
        //       >
        //         Semua Laporan
        //       </Box>
        //     </Grid>
        //   </Grid>

        //   {/* Laporan Eksternal */}
        //   {/* prioritize using box first it makes the flexbox responsive then grid item */}
        //   <Grid item>
        //     <Grid
        //       container
        //       sx={{
        //         display: 'flex'
        //       }}
        //     >
        //       <Box
        //         sx={{
        //           fontSize: '12px',
        //           fontWeight: '500',
        //           borderRadius: '0.25rem 0 0 0.25rem',
        //           padding: '0.5rem',
        //           border: 1,
        //           borderRight: 0,
        //           borderColor: '#E0E0E0'
        //         }}
        //       >
        //         {summaryEksternal}
        //       </Box>
        //       <Box
        //         sx={{
        //           fontSize: '12px',
        //           fontWeight: '500',
        //           padding: '0.5rem',
        //           border: 1,
        //           padding: '0.5rem 1rem 0.5rem 1rem',
        //           borderRadius: ' 0 0.25rem 0.25rem 0',
        //           borderColor: '#E0E0E0'
        //         }}
        //       >
        //         Laporan Eksternal
        //       </Box>
        //     </Grid>
        //   </Grid>
        // </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              width: '11rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1.5rem '
            }}
          >
            <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Semua Laporan</Box>
            <Grid container>
              <Grid item>
                <Box sx={{ margin: '0 1.5rem 0 1rem', fontSize: '1.5rem' }}>{summaryTotal} </Box>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                  <li style={{ fontSize: '0.8rem' }}>{allPrep} Preparasi</li>
                  <li style={{ fontSize: '0.8rem' }}>{allAnalysis} Analisa</li>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              width: '11rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1.5rem '
            }}
          >
            <Box sx={{ margin: '1rem 1rem 0.5rem 1rem' }}>Laporan Eksternal</Box>
            <Grid container>
              <Grid item>
                <Box sx={{ margin: '0 1.5rem 0 1rem', fontSize: '1.5rem' }}>{summaryEksternal}</Box>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                  <li style={{ fontSize: '0.8rem' }}>{totalPrepEks} Preparasi</li>
                  <li style={{ fontSize: '0.8rem' }}>{totalAnalysisEks} Analisa</li>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SummaryLaporan;
