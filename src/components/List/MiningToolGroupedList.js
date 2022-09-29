/* eslint-disable no-useless-concat */
import { Grid, Typography, Avatar, Stack } from '@mui/material';
import React from 'react';

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
      <Grid item md={1}>
        <Typography variant="h4" sx={{ textAlign: 'center', alignSelf: 'center' }}>
          1
        </Typography>
      </Grid>
      <Grid item md={1.5} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Jenis Peralatan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end'
          }}
        >
          Alat Muat Konstruksi
        </Typography>
      </Grid>
      <Grid item md={1} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Tipe
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end'
          }}
        >
          Pc. 20201029
        </Typography>
      </Grid>
      <Grid item md={1} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Jumlah Peralatan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end'
          }}
        >
          2
        </Typography>
      </Grid>
      <Grid item md={1.5} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Produktifitas
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end'
          }}
        >
          4 Ton / Jam
        </Typography>
      </Grid>
      <Grid item md={1.5} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Rasio Bahan Bakar
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end'
          }}
        >
          4 Ltr / Jam
        </Typography>
      </Grid>
      <Grid item md={1.5} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Jenis Kegiatan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end'
          }}
        >
          Kegiatan K3
        </Typography>
      </Grid>
      <Grid item md={1.5} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Dibuat Oleh
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 35, height: 35, bgcolor: '#3F48C0' }}>A</Avatar>
          <Typography variant="body1">Dena</Typography>
        </Stack>
      </Grid>
      <Grid item md={1.5} container justifyContent="space-between">
        <Typography variant="body1" color="#828282">
          Tanggal Laporan Dibuat
        </Typography>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            alignSelf: 'flex-end'
          }}
        >
          12/01/2022
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MiningToolGroupedList;
