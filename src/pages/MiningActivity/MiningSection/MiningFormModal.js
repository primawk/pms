import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, MenuItem, Stack, FormControl, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// components
import { CustomModal } from 'components/Modal';

const miningActivityList = [
  {
    label: 'Ore Getting',
    value: 'ore-getting'
  },
  {
    label: 'Ore Hauling Front To ETO',
    value: 'ore-hauling-to-eto'
  },
  {
    label: 'Ore Hauling ETO TO EFO',
    value: 'eto-to-efo'
  }
];

const productList = ['Biji Nikel'];

const blockList = ['Utara', 'Selatan'];

export default function MiningFormModal({ isShowing, toggle }) {
  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="40%">
      <center>
        <h2 style={{ marginBottom: '20px' }}>Input Realisasi Kegiatan Produksi Mineral</h2>
      </center>
      <Grid container direction="column" justifyContent="center" alignItems="flex-start">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Stack spacing={2}>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Jenis Kegiatan</h4>
              <TextField select placeholder="Pilih jenis kegiatan" fullWidth size="small">
                {miningActivityList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item lg={6} sx={{ pr: 2 }}>
                <FormControl>
                  <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Tanggal Kegiatan</h4>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker renderInput={(params) => <TextField {...params} size="small" />} />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item lg={6}>
                <FormControl>
                  <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Waktu Kegiatan</h4>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      ampm={false}
                      renderInput={(params) => <TextField {...params} size="small" />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Jenis Produk</h4>
              <TextField select placeholder="Pilih jenis produk" fullWidth size="small">
                {productList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Jenis Kegiatan</h4>
              <TextField select placeholder="Pilih jenis kegiatan" fullWidth size="small">
                {blockList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={5}>
        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ marginTop: '25px' }}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" fullWidth onClick={toggle}>
              Cancel
            </Button>
            <Button variant="contained" fullWidth>
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </CustomModal>
  );
}

MiningFormModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
