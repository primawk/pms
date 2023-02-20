import React from 'react';
import { Grid, Box } from '@mui/material';
import dayjs from 'dayjs';

const List = ({ setPage, data, index, setI }) => {
  const onBtnClick = () => {
    setI(index);
    setPage('detail');
  };
  console.log(data?.['eto-to-efo']);
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 3,
          margin: '0 0 0 0', // ???
          // height: '6.125rem',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          cursor: 'pointer',
          overflow: 'auto'
        }}
        spacing={2}
        onClick={onBtnClick}
      >
        <Grid item>
          <Grid item>
            <img src="/img/truck.png" alt=""></img>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>Tanggal</Box>
            <Box sx={{ fontSize: '12px' }}>{dayjs(data?.date).format('DD MMMM YYYY')}</Box>
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
              <Box sx={{ fontSize: '12px' }}>{data?.dome}</Box>
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
              Data Estimasi
            </Box>

            <Grid
              item
              sx={{
                fontSize: '12px',
                backgroundColor: '#E5E5FE',
                color: '#3F48C0',
                // width: '58px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '0.2rem'
              }}
              xs={12}
            >
              200 Ton
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
              Lossing Estimasi to Front
            </Box>
            <Box>
              <Grid container sx={{ fontSize: '14px', color: '#DA4540', alignItems: 'center' }}>
                <Box>
                  <img src="/img/down.png" alt=""></img>
                </Box>
                <Box sx={{ marginLeft: '0.5rem' }}>{data?.['est-to-ore']} Ton</Box>
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
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>
              Lossing Front to ETO
            </Box>
            <Box>
              <Grid container sx={{ fontSize: '14px', color: '#DA4540', alignItems: 'center' }}>
                <Box>
                  <img src="/img/down.png" alt=""></img>
                </Box>
                <Box sx={{ marginLeft: '0.5rem' }}>{data?.front_to_eto} Ton</Box>
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
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>
              Lossing ETO to EFO
            </Box>
            <Box>
              <Grid container sx={{ fontSize: '14px', color: '#DA4540', alignItems: 'center' }}>
                <Box>
                  <img src="/img/down.png" alt=""></img>
                </Box>
                <Box sx={{ marginLeft: '0.5rem' }}>{data?.['eto-to-efo']} Ton</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 7 */}
        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem', color: '#828282', fontSize: '12px' }}>
              Lossing EFO to Barging
            </Box>
            <Box>
              <Grid container sx={{ fontSize: '14px', color: '#DA4540', alignItems: 'center' }}>
                <Box>
                  <img src="/img/down.png" alt=""></img>
                </Box>
                <Box sx={{ marginLeft: '0.5rem' }}>{data?.['efo-to-shipment']} Ton</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 8 */}
        <Grid item xs={1.7}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '1.5rem',
              borderLeft: 1,
              borderColor: '#E0E0E0'
            }}
          >
            <Box
              sx={{
                marginBottom: '0.5rem',
                color: '#828282',
                fontSize: '12px'
              }}
            >
              Total Lossing
            </Box>

            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '14px',
                color: '#DA4540',
                alignItems: 'center',
                backgroundColor: '#E5E5FE',
                borderRadius: '4px',
                justifyContent: 'center',
                padding: '0.2rem'
              }}
              xs={12}
            >
              <Box>
                <img src="/img/down.png" alt=""></img>
              </Box>
              <Box sx={{ marginLeft: '0.5rem' }}>{data?.total} Ton</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default List;
