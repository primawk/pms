import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';

// components
import CustomModal2 from 'components/Modal/CustomModal/PilihLaporan';

const EditInventory = ({ isShowing, toggle }) => {
  return (
    <CustomModal2 isShowing={isShowing} toggle={toggle}>
      <Grid
        container
        sx={{
          width: '31.563rem',
          height: '51.313rem',
          backgroundColor: 'white',
          borderRadius: '4px'
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Grid item sx={{ margin: '1.875rem auto 4.063rem auto' }}>
            <h2>Edit Inventory</h2>
          </Grid>
          <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
            <Box sx={{ fontSize: '0.875rem' }}>Inventory</Box>
          </Grid>
          <Grid item sx={{ width: '20rem', margin: '0 auto 1rem 1.5rem' }}>
            <FormControl sx={{ width: '20rem' }} size="small">
              <InputLabel id="demo-simple-select-label">Jenis Inventory</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Jenis Laporan"
                id="demo-simple-select"
                // onChange={(e) => setJenisLaporan(e.target.value)}
              >
                <MenuItem value={'laporan-lab'}></MenuItem>
                <MenuItem value={'input-laporan-internal'}>Inventory SM</MenuItem>
                <MenuItem value={'input-laporan-eksternal'}>Inventory ETO</MenuItem>
                <MenuItem value={'input-laporan-eksternal'}>Inventory EFO</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
            <Box
              sx={{
                height: '28.875rem',
                width: '28.563rem',
                fontSize: '0.875rem',
                // backgroundColor: 'blue',
                border: '1px solid #E0E0E0',
                borderRadius: '4px 4px 0px 0px'
              }}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  border: '1px solid #E0E0E0',
                  borderBottom: '1',
                  justifyContent: 'flex-end'
                }}
              >
                <Grid item sx={{ margin: '0.7rem auto 0.5rem 1rem' }}>
                  Bukit I
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: '#3F48C0',
                    paddingTop: '0.5rem',
                    color: 'white',
                    fontSize: '0.875rem',
                    padding: '12px',
                    cursor: 'pointer'
                  }}
                >
                  + Tambah Bukit
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: '#E5E5FE',
                    paddingTop: '0.5rem',
                    color: '#3F48C0',
                    fontSize: '0.875rem',
                    padding: '12px',
                    border: '1px solid #3F48C0',
                    borderRadius: '0px 4px 0px 0px',
                    cursor: 'pointer'
                  }}
                >
                  <Grid container>
                    <Grid item>
                      <Icon icon="ant-design:delete-filled" color="#3f48c0" />
                    </Grid>
                    <Grid item sx={{ marginLeft: '0.5rem' }}>
                      Hapus Bukit
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '1.5rem'
                }}
              >
                <Grid item>
                  <Box sx={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Dome</Box>
                  <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
                    <InputLabel>Dome</InputLabel>
                    <OutlinedInput
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <IconButton>
                          <Icon icon="ant-design:delete-filled" color="#3f48c0" />
                        </IconButton>
                      }
                      label="Dome"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Box sx={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Dome</Box>
                  <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
                    <InputLabel>Dome</InputLabel>
                    <OutlinedInput
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <IconButton>
                          <Icon icon="ant-design:delete-filled" color="#3f48c0" />
                        </IconButton>
                      }
                      label="Dome"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Box sx={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Dome</Box>
                  <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
                    <InputLabel>Dome</InputLabel>
                    <OutlinedInput
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          backgroundColor="gray"
                          sx={{ cursor: 'pointer' }}
                        >
                          <IconButton>
                            <Icon icon="ant-design:delete-filled" color="#3f48c0" />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Dome"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Box sx={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Dome</Box>
                  <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
                    <InputLabel>Dome</InputLabel>
                    <OutlinedInput
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <IconButton>
                          <Icon icon="ant-design:delete-filled" color="#3f48c0" />
                        </IconButton>
                      }
                      label="Dome"
                    />
                  </FormControl>
                </Grid>
                <Grid item sx={{ margin: '1rem 3.2rem 1rem auto' }}>
                  <Button
                    variant="outlined"
                    sx={{ fontWeight: '400', width: '10.813rem', backgroundColor: '#E5E5FE' }}
                    // onClick={toggle}
                  >
                    + Tambah Dome
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 'auto 0 1.5rem 0'
            }}
          >
            <Grid item sx={{ marginRight: '1rem' }}>
              <Button
                variant="outlined"
                sx={{ fontWeight: '400', width: '10.813rem' }}
                onClick={toggle}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  boxShadow: '0',
                  fontWeight: '400',
                  marginRight: '1.5rem',
                  width: '10.813rem'
                }}
                // onClick={() => navigate(`/${jenisLaporan}`)}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomModal2>
  );
};

EditInventory.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default EditInventory;
