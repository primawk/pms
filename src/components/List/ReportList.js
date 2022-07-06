import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import ArrowUp from '@iconify/icons-ant-design/caret-up-filled';
import ArrowDown from '@iconify/icons-ant-design/caret-down-filled';

// assets
import ExcavatorIcon from 'assets/Images/MiningActivity/ore-getting.png';
import TruckIcon from 'assets/Images/MiningActivity/ore-hauling-to-eto.png';
import avatarLogo from 'assets/Images/avatar.png';

const ReportList = ({ activity_type }) => {
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
          <img
            src={activity_type === 'ore-getting' ? ExcavatorIcon : TruckIcon}
            alt="this-is-logo"
          />
          <Stack>
            <Typography variant="h5">OreGetting</Typography>
            <Typography variant="body1">Bukit 7/ Dome A</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item lg={1.25} md={1.25} xs={3}>
        <Typography variant="body1" color="#828282">
          Jenis Produk
        </Typography>
        <Typography variant="h6">Biji Nikel</Typography>
      </Grid>
      <Grid item lg={1.25} md={1.25} xs={3}>
        <Typography variant="body1" color="#828282">
          Block
        </Typography>
        <Typography variant="h6">Utara</Typography>
      </Grid>
      <Grid item lg={3} md={3} xs={6}>
        <Typography variant="body1" color="#828282">
          Inventory
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Icon width={15} height={15} icon={ArrowUp} color="#27AE60" />
          <Typography variant="body1" style={{ margin: 1 }} color="#27AE60">
            2.4 Ton
          </Typography>
          <Typography variant="body1" style={{ margin: 1 }}>
            &nbsp;• Bukit 9 / Dome 1
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Icon width={15} height={15} icon={ArrowDown} color="#DA4540" />
          <Typography variant="body1" style={{ margin: 1 }} color="#DA4540">
            2.4 Ton
          </Typography>
          <Typography variant="body1" style={{ margin: 1 }}>
            &nbsp;• Bukit 9 / Dome 1
          </Typography>
        </Stack>
      </Grid>
      <Grid item lg={2} md={2} xs={6}>
        <Typography variant="body1" color="#828282">
          Dibuat Oleh
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <img src={avatarLogo} alt={avatarLogo} width={35} height={35} />
          <Typography variant="body1">Putri Devina</Typography>
        </Stack>
      </Grid>
      <Grid item lg={2} md={2} xs={6}>
        <Typography variant="body1" color="#828282">
          Tanggal Laporan Dibuat
        </Typography>
        <Typography variant="h6">12/01/2022</Typography>
      </Grid>
    </Grid>
  );
};

export default ReportList;

ReportList.propTypes = {
  activity_type: PropTypes.string
};
