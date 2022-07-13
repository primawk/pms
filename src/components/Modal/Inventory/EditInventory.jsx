import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom';

// components
import CustomModal2 from 'components/Modal/CustomModal/PilihLaporan';

const PilihLaporan = ({ isShowing, toggle }) => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const navigate = useNavigate();

  const [jenisLaporan, setJenisLaporan] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
                onChange={(e) => setJenisLaporan(e.target.value)}
              >
                <MenuItem value={'laporan-lab'}></MenuItem>
                <MenuItem value={'input-laporan-internal'}>Laporan Internal</MenuItem>
                <MenuItem value={'input-laporan-eksternal'}>Laporan Eksternal</MenuItem>
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
                    padding: '12px'
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
                    borderRadius: '0px 4px 0px 0px'
                  }}
                >
                  Hapus Bukit
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
                    <InputLabel htmlFor="outlined-adornment-password">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Box sx={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
                    <InputLabel htmlFor="outlined-adornment-password">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Box sx={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
                    <InputLabel htmlFor="outlined-adornment-password">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Box sx={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
                    <InputLabel htmlFor="outlined-adornment-password">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Password"
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

PilihLaporan.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default PilihLaporan;