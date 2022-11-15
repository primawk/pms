import React from 'react';
import { Grid, Typography, Stack, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// assets
import TruckIcon from 'assets/Images/MiningActivity/ore-hauling-to-eto.png';

// utils
// import { capitalizeFirstLetter } from 'utils/helper';

const MiningToolReportList = ({ listData }) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        borderBottom: '1px solid #F2F2F2',
        borderRadius: '4px',
        minHeight: '85px',
        padding: '0.8em',
        mb: 1
      }}
      className="bg-white"
    >
      <Grid item lg={2.5} md={2.5} xs={6}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <img src={TruckIcon} alt="this-is-logo" />
          <Stack>
            <Typography variant="h5">{listData?.company_name}</Typography>
            <Typography variant="body1" color="#828282">
              {dayjs(listData?.date).format('DD/MM/YYYY')}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item lg={1} md={1} xs={3}>
        <Typography variant="body1" color="#828282">
          Jenis Produk
        </Typography>
        <Typography variant="h6">{listData?.product_type}</Typography>
      </Grid>
      <Grid item lg={1} md={1} xs={3}>
        <Typography variant="body1" color="#828282">
          Block
        </Typography>
        <Typography variant="h6">{listData?.block}</Typography>
      </Grid>
      <Grid item lg={1.5} md={1.5} xs={3}>
        <Typography variant="body1" color="#828282">
          Tipe
        </Typography>
        <Typography variant="h6">{listData?.tool_type}</Typography>
      </Grid>
      <Grid item lg={2.5} md={2.5} xs={6}>
        <Typography variant="body1" color="#828282">
          Inventory
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pr: 3 }}>
          <Typography variant="body1" style={{ margin: 1 }}>
            •&nbsp;Produktifitas
          </Typography>
          <Typography variant="body1" style={{ margin: 1 }}>
            {listData?.productivity}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pr: 3 }}>
          <Typography variant="body1" style={{ margin: 1 }}>
            •&nbsp;Rasio Bahan Bakar
          </Typography>
          <Typography variant="body1" style={{ margin: 1 }}>
            {listData?.fuel_ratio}
          </Typography>
        </Stack>
      </Grid>
      <Grid item lg={2} md={2} xs={6}>
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
      <Grid item lg={1.5} md={1.5} xs={6}>
        <Typography variant="body1" color="#828282">
          Laporan Terakhir Dibuat
        </Typography>
        <Typography variant="h6">{dayjs(listData?.created_at).format('DD/MM/YYYY')}</Typography>
      </Grid>
    </Grid>
  );
};

export default MiningToolReportList;

MiningToolReportList.propTypes = {
  listData: PropTypes.object
};
