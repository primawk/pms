import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';
import dayjs from 'dayjs';
import { Icon } from '@iconify/react';

const ListEdit = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1rem 0 1rem',
          margin: '0 2rem 1rem 2rem',
          border: '1px solid #F2F2F2',
          borderRadius: '4px'
        }}
      >
        {/* Column 1 */}
        <Grid item xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{}}>
              <h5 style={{ color: '#828282' }}>Jenis Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>{data?.report_type}</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 2 */}
        <Grid item xs={2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{}}>
              <h5 style={{ color: '#828282' }}>Keterangan</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>{data?.description}</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 3 */}
        <Grid item xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{}}>
              <h5 style={{ color: '#828282' }}>Masa Berlaku</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  {/* <h5>{data?.report_type}</h5> */}
                  {dayjs(data?.date).format('DD MMMM YYYY')}
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 4 */}
        <Grid item xs={2.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{}}>
              <h5 style={{ color: '#828282' }}>File</h5>
            </Box>
            {/* <Box>
              <Grid
                container
                sx={{ alignItems: 'center', backgroundColor: 'yellow', width: '60%' }}
              >
                <Box sx={{ fontSize: '14px', width: '60%' }}>{data?.attachment}</Box>
              </Grid>
            </Box> */}
            {data?.attachment.map(
              (
                item // there is difference mapping using () and {}
              ) => (
                <Grid
                  item
                  container
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap'
                  }}
                >
                  <Grid item xs={1.5}>
                    <Icon icon="ph:file-pdf-duotone" color="#3f48c0" fontSize={24} />
                  </Grid>
                  <Grid item sx={{ marginLeft: '0.5rem', fontSize: '0.5rem' }} xs={10}>
                    {item}
                  </Grid>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
        {/* Column 4 */}
        <Grid item xs={2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{}}>
              <h5 style={{ color: '#828282' }}>Tanggal & Waktu Upload</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  {/* <h5>{data?.report_type}</h5> */}
                  {dayjs(data?.created_at).format('DD MMMM YYYY, hh:mm')}
                  {/* {data?.created_at} */}
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Column 5 */}
        <Grid item xs={1}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Button
              sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
              fullWidth
              variant="contained"
              onClick={() => navigate(`/bank-data/edit/${data?.id}`, { state: data })}
            >
              {/* <Icon style={{ fontSize: '17px', marginRight: '0.5rem' }} /> */}
              Edit File
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListEdit;
