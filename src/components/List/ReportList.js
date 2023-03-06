import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Stack, Avatar, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import ArrowUp from '@iconify/icons-ant-design/caret-up-filled';
import ArrowDown from '@iconify/icons-ant-design/caret-down-filled';

// assets
import ExcavatorIcon from 'assets/Images/MiningActivity/ore-getting.png';
import TruckIcon from 'assets/Images/MiningActivity/ore-hauling-to-eto.png';

// custom hooks
import useAuth from 'hooks/useAuth';
import { useShipmentContext } from 'context/ShipmentContext';

// utils
import { capitalizeFirstLetter } from 'utils/helper';

const ReportList = ({ listData }) => {
  const { roleName } = useAuth();
  const navigate = useNavigate();
  const { setStep } = useShipmentContext();

  const handleCoa = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    setStep(3);
    navigate(`/shipment/efo-to-shipment/edit/${id}`);
  };

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
            src={listData?.activity_type === 'ore-getting' ? ExcavatorIcon : TruckIcon}
            alt="this-is-logo"
          />
          <Stack>
            <Typography variant="h5">
              {listData?.activity_type ? capitalizeFirstLetter(listData?.activity_type) : ''}
            </Typography>
            <Typography variant="body1" color="#828282">
              {listData?.activity_code}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item lg={1.5} md={1.5} xs={3}>
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
      {listData?.activity_type !== 'efo-to-shipment' ? (
        <Grid item lg={2.5} md={2.5} xs={6}>
          <Typography variant="body1" color="#828282">
            Inventory
          </Typography>
          {listData?.tonnage_difference < 0 ? (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Icon width={15} height={15} icon={ArrowDown} color="#DA4540" />
              <Typography variant="body1" style={{ margin: 1 }} color="#DA4540">
                {listData?.tonnage_difference &&
                  `${parseFloat(listData?.tonnage_difference) || 0} Ton`}
              </Typography>
              <Typography variant="body1" style={{ margin: 1 }}>
                &nbsp;•{' '}
                {listData?.activity_type === 'ore-hauling-to-eto'
                  ? listData?.hill_name + '/' + listData?.dome_name
                  : listData?.hill_name || listData?.dome_name}
              </Typography>
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Icon width={15} height={15} icon={ArrowUp} color="#27AE60" />
              <Typography variant="body1" style={{ margin: 1 }} color="#27AE60">
                {listData?.tonnage_difference &&
                  `${parseFloat(listData?.tonnage_difference) || 0} Ton`}
              </Typography>
              <Typography variant="body1" style={{ margin: 1 }}>
                &nbsp;•{' '}
                {listData?.activity_type === 'ore-hauling-to-eto'
                  ? listData?.hill_name + '/' + listData?.dome_name
                  : listData?.hill_name || listData?.dome_name}
              </Typography>
            </Stack>
          )}
        </Grid>
      ) : (
        <Grid item lg={1.25} md={1.25} xs={6}>
          <Typography variant="body1" color="#828282">
            Asal Tumpukan
          </Typography>
          {listData?.dome_origin_id?.length > 0 &&
            listData?.dome_origin_id?.map((item, i) => (
              <Stack direction="row" alignItems="center" spacing={2} key={item}>
                <Typography variant="body1" style={{ margin: 1 }}>
                  &nbsp;• {listData?.dome_origin_name?.[i]}
                </Typography>
              </Stack>
            ))}
        </Grid>
      )}
      <Grid
        item
        lg={listData?.activity_type !== 'efo-to-shipment' ? 2.5 : 1.5}
        md={listData?.activity_type !== 'efo-to-shipment' ? 2.5 : 1.5}
        xs={6}
      >
        <Typography variant="body1" color="#828282">
          Dibuat Oleh
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 35, height: 35, bgcolor: '#3F48C0' }}>
            {listData?.account_name.substring(0, 1)}
          </Avatar>
          <Typography variant="body1">{listData?.account_name}</Typography>
        </Stack>
      </Grid>
      <Grid item lg={2} md={2} xs={6}>
        <Typography variant="body1" color="#828282">
          Tanggal Laporan Dibuat
        </Typography>
        <Typography variant="h6">{dayjs(listData?.date).format('DD/MM/YYYY')}</Typography>
      </Grid>
      {listData?.activity_type === 'efo-to-shipment' && (
        <Grid item lg={1.25} md={1.25} xs={3}>
          <Typography variant="body1" color="#828282">
            Status
          </Typography>
          <Typography variant="h6">{capitalizeFirstLetter(listData?.status)}</Typography>
        </Grid>
      )}
      {listData?.activity_type === 'efo-to-shipment' && (
        <Grid item lg={1} md={1} xs={3}>
          {(roleName === 'komisaris' || roleName === 'superadmin') &&
            listData?.status === 'provisi' && (
              <Button variant="contained" onClick={(e) => handleCoa(e, listData?.id)}>
                Ubah COA
              </Button>
            )}
        </Grid>
      )}
    </Grid>
  );
};

export default ReportList;

ReportList.propTypes = {
  listData: PropTypes.object
};
