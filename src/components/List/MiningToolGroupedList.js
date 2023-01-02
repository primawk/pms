/* eslint-disable no-useless-concat */
import { Grid, Typography, Avatar, Stack } from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';

// util

const MiningToolGroupedList = ({ listData }) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      justifyContent="flex-start"
      sx={{
        borderBottom: '1px solid #E0E0E0',
        background: 'white',
        minHeight: '85px',
        padding: '0.5em'
      }}
    >
      <Grid item md={0.5}>
        <Typography variant="h4" sx={{ textAlign: 'center', alignSelf: 'center' }}>
          {listData?.index !== undefined ? listData?.index + 1 : '-'}
        </Typography>
      </Grid>
      <Grid item md={2} container direction="column" justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Jenis Peralatan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          {listData?.tool_kind}
        </Typography>
      </Grid>
      <Grid item md={1} container direction="column" justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Tipe
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          {listData?.tool_type}
        </Typography>
      </Grid>
      <Grid item md={1.25} container direction="column" justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Jumlah Peralatan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          {listData?.tool_total}
        </Typography>
      </Grid>
      <Grid item md={1.25} container direction="column" justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Produktifitas
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          {listData?.productivity} Ton / Jam
        </Typography>
      </Grid>
      <Grid item md={1.5} container direction="column" justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Rasio Bahan Bakar
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          {listData?.fuel_ratio} Ltr / Jam
        </Typography>
      </Grid>
      <Grid item md={1.5} container direction="column" justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Jenis Kegiatan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          {listData?.activity_type}
        </Typography>
      </Grid>
      <Grid item md={1.5}>
        <Typography variant="body1" color="#828282">
          Dibuat Oleh
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 35, height: 35, bgcolor: '#3F48C0' }}>
            {listData?.account_name && listData?.account_name.substring(0, 1)}
          </Avatar>
          <Typography variant="body1">{listData?.account_name || '-'}</Typography>
        </Stack>
      </Grid>
      <Grid item md={1.5} container direction="column" justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Tanggal Laporan Dibuat
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          <Typography variant="h6">{dayjs(listData?.created_at).format('DD/MM/YYYY')}</Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MiningToolGroupedList;
