/* eslint-disable no-useless-concat */
import { Grid, Typography } from '@mui/material';
import React from 'react';

// util
import { capitalizeFirstLetter, timeDifference, translateTime } from 'utils/helper';

const DashboardList = ({ listData }) => {
  const dateDifference = translateTime(timeDifference(listData?.updated_at, new Date()));
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
        <Typography variant="h6">
          {listData?.activity_type === 'ore-hauling-to-eto'
            ? listData?.hill_name + '/' + listData?.dome_name
            : listData?.hill_name || listData?.dome_name}
        </Typography>
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
        <Typography variant="h6">
          {listData?.tonnage_total && `${parseFloat(listData?.tonnage_total) || 0} Ton`}
        </Typography>
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
          <Typography variant="body1">{`= ${
            listData?.average_ni ? parseFloat(listData?.average_ni).toFixed(2) : '0'
          } %`}</Typography>
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ background: '#E5E5FE', padding: '0 0.2em' }}
            mr={1}
            ml={2}
          >
            Fe
          </Typography>
          <Typography variant="body1">{`= ${
            listData?.average_fe ? parseFloat(listData?.average_fe).toFixed(2) : '0'
          } %`}</Typography>
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
          <Typography mr={2}>{capitalizeFirstLetter(listData?.last_activity || '')}</Typography>
          <Typography variant="body1" color="#828282">
            • {dateDifference || '-'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardList;
