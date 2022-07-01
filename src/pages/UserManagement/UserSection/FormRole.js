import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  MenuItem,
  Stack,
  FormControl,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material';

// components
import { CustomModal } from 'components/Modal';

const roles = ['Super Admin', 'Komisaris', 'Direksi', 'Admin Lab', 'Admin Operasional'];

export default function FormRole({ isShowing, toggle, id }) {
  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="80%">
      <center>
        <h2 style={{ marginBottom: '20px' }}>Role & Hak Akses</h2>
      </center>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={5}>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <Stack spacing={2}>
            <FormControl>
              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Role</h4>
              <TextField select placeholder="Role" fullWidth size="small">
                {roles.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Stack>
        </Grid>

        <Grid item lg={7} md={12} sm={12} xs={12}>
          <Stack spacing={2}>
            <h4>Hak Akses</h4>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
              <Grid item lg={6}>
                <h4>Dashboard</h4>
              </Grid>
              <Grid item container lg={6}>
                <center>
                  <FormControl>
                    <RadioGroup
                      row
                      name="dashboard"
                      style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                    >
                      <FormControlLabel value="view only" control={<Radio />} label="View Only" />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Edit & Delete"
                        style={{ marginRight: '0' }}
                      />
                    </RadioGroup>
                  </FormControl>
                </center>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
              <Grid item lg={6}>
                <h4>Manajemen Pengguna</h4>
              </Grid>
              <Grid item container lg={6}>
                <center>
                  <FormControl>
                    <RadioGroup
                      row
                      name="manajemen_pengguna"
                      style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                    >
                      <FormControlLabel value="view only" control={<Radio />} label="View Only" />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Edit & Delete"
                        style={{ marginRight: '0' }}
                      />
                    </RadioGroup>
                  </FormControl>
                </center>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
              <Grid item lg={6}>
                <h4>Kegiatan Tambang</h4>
              </Grid>
              <Grid item container lg={6}>
                <center>
                  <FormControl>
                    <RadioGroup
                      row
                      name="kegiatan_tambang"
                      style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                    >
                      <FormControlLabel value="view only" control={<Radio />} label="View Only" />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Edit & Delete"
                        style={{ marginRight: '0' }}
                      />
                    </RadioGroup>
                  </FormControl>
                </center>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
              <Grid item lg={6}>
                <h4>Inventory</h4>
              </Grid>
              <Grid item container lg={6}>
                <center>
                  <FormControl>
                    <RadioGroup
                      row
                      name="inventory"
                      style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                    >
                      <FormControlLabel value="view only" control={<Radio />} label="View Only" />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Edit & Delete"
                        style={{ marginRight: '0' }}
                      />
                    </RadioGroup>
                  </FormControl>
                </center>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
              <Grid item lg={6}>
                <h4>Laporan Lab</h4>
              </Grid>
              <Grid item container lg={6}>
                <center>
                  <FormControl>
                    <RadioGroup
                      row
                      name="lab"
                      style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                    >
                      <FormControlLabel value="view only" control={<Radio />} label="View Only" />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Edit & Delete"
                        style={{ marginRight: '0' }}
                      />
                    </RadioGroup>
                  </FormControl>
                </center>
              </Grid>
            </Grid>
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

FormRole.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  id: PropTypes.number
};
