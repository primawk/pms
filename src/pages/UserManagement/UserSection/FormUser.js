import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, MenuItem, Stack, FormControl, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// components
import { CustomModal } from 'components/Modal';

const roles = ['Super Admin', 'Komisaris', 'Direksi', 'Admin Lab', 'Admin Operasional'];

export default function FormUser({ isShowing, toggle, id }) {
  return (
    <CustomModal isShowing={isShowing} toggle={toggle}>
      <center>
        <h1 style={{ marginBottom: '20px' }}>{id ? 'Edit User' : 'Tambah User'}</h1>
      </center>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Stack spacing={2}>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Username</h4>
              <TextField placeholder="Username" fullWidth />
            </FormControl>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Nama Lengkap</h4>
              <TextField placeholder="Nama Lengkap" fullWidth />
            </FormControl>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Role</h4>
              <TextField select placeholder="Role" fullWidth>
                {roles.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Stack>
        </Grid>

        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Stack spacing={2}>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Nomor Telepon</h4>
              <TextField placeholder="Nomor Telepon" fullWidth />
            </FormControl>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Tanggal Lahir</h4>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker renderInput={(params) => <TextField {...params} />} />
              </LocalizationProvider>
            </FormControl>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Password</h4>
              <TextField placeholder="Password" fullWidth />
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={5}>
        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ marginTop: '25px' }}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" fullWidth>
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

FormUser.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  id: PropTypes.number
};
