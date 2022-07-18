/* eslint-disable no-useless-concat */
import { Grid, Typography } from '@mui/material';
import React from 'react';

const DashboardList = ({ listData }) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        minHeight: '85px',
        padding: '0.5em',
        mb: 1,
        mt: 1
      }}
    >
      <Grid item md={1} xs={12} sx={{ marginLeft: '0.5rem' }}>
        <Typography variant="h4">
          {listData?.index !== undefined ? listData?.index + 1 : '-'}
        </Typography>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={2.5}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Tumpukan
        </Typography>
        <Typography variant="h6">{listData?.dome_name || '-'}</Typography>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={2}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Tonase
        </Typography>
        <Typography variant="h6">{listData?.tonnage_total || '-'}</Typography>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={3}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Kadar Konsentrat
        </Typography>
        <Grid container direction="row">
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ background: '#E5E5FE', padding: '0 0.2em' }}
            mr={1}
          >
            Ni
          </Typography>
          <Typography variant="body1">{`= ${listData?.ni_level || '-'}`}</Typography>
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ background: '#E5E5FE', padding: '0 0.2em' }}
            mr={1}
            ml={2}
          >
            {listData?.activity_type === 'eto-to-efo' ? 'SiMg' : 'Fe'}
          </Typography>
          <Typography variant="body1">
            {listData?.activity_type === 'eto-to-efo'
              ? '= ' + listData?.simgo_level || ''
              : '= ' + listData?.fe_level || ''}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        md={3}
        xs={6}
        height="100%"
      >
        <Typography variant="body1" color="#828282">
          Kegiatan Terakhir
        </Typography>
        <Grid container direction="row">
          <Typography mr={2}>ETO to EFO</Typography>
          <Typography variant="body1" color="#828282">
            • 3j yang lalu
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardList;
