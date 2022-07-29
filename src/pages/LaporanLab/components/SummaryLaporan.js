import React from 'react';
import { Grid, Box } from '@mui/material';
import { useQuery } from 'react-query';

// services
import LabService from 'services/LabService';

const SummaryLaporan = ({ preparation, preparationExternal }) => {
  // const [sumPreparationInternal, setPreparationInternal] = useState(0);
  const { data: dataEksternal } = useQuery(
    ['report', 'external'],
    () =>
      LabService.getReport({
        report_type: 'external'
      })
    // { keepPreviousData: true }
  );

  // console.log(preparation[0].preparation);

  // const sumPreparation = (preparation, sumPreparationInternal, setPreparationInternal) => {
  //   var sum = 0;
  //   for (let i = 0; i < preparation?.length; i++) {
  //     sum += preparation[i].preparation;
  //   }
  //   console.log(sum);
  //   return sum;
  // };

  // useEffect(() => {
  //   sumPreparation(preparation);
  // }, [preparation]);
  const sumEksternal = dataEksternal?.data?.data;

  let totalPrepEks = 0;
  let totalPrep = 0;
  const summaryInternal = parseInt(preparation?.length);
  const summaryEksternal = parseInt(dataEksternal?.data?.pagination.total_data);
  const summaryTotal = summaryEksternal + summaryInternal;
  const allPrep = totalPrep + totalPrepEks;

  return (
    <>
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
                <li style={{ fontSize: '0.8rem' }}>6 Analisa</li>
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
              {preparation?.map((prep) => {
                totalPrep += prep.preparation;
              })}
              <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <li style={{ fontSize: '0.8rem' }}>{totalPrep} Preparasi</li>
                <li style={{ fontSize: '0.8rem' }}>{summaryInternal} Analisa</li>
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
              {sumEksternal?.map((prep) => {
                totalPrepEks += prep.preparation;
              })}
              <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <li style={{ fontSize: '0.8rem' }}>{totalPrepEks} Preparasi</li>
                <li style={{ fontSize: '0.8rem' }}>6 Analisa</li>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SummaryLaporan;
