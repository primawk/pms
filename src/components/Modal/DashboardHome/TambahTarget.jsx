import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const PilihLaporan = () => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
        overflow: 'auto', // it makes this container follow the height of its content
        position: 'relative'
      }}
    >
      <Grid
        container
        sx={{
          width: '52.125rem',
          height: '48.063rem',
          backgroundColor: 'white',
          borderRadius: '4px',
          margin: 'auto'
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
          <Grid item sx={{ margin: '1rem auto 1rem auto' }}>
            <h2>Tambah Target</h2>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
              <Box sx={{ fontSize: '0.875rem' }}>Tahun</Box>
            </Grid>
            <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                <DesktopDatePicker
                  inputFormat="yyyy"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  renderInput={(params) => <TextField {...params} size="small" />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          {/* 1 */}
          <Grid item>
            <Grid container sx={{ alignItems: 'flex-end' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Januari</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Juli</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* 2 */}
          <Grid item>
            <Grid container sx={{ alignItems: 'flex-end' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Februari</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Agustus</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* 3 */}
          <Grid item>
            <Grid container sx={{ alignItems: 'flex-end' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Maret</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>September</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* 4 */}
          <Grid item>
            <Grid container sx={{ alignItems: 'flex-end' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>April</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Oktober</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* 5 */}
          <Grid item>
            <Grid container sx={{ alignItems: 'flex-end' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Mei</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>November</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* 6 */}
          <Grid item>
            <Grid container sx={{ alignItems: 'flex-end' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Juni</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Desember</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      // value={values.password}
                      // onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          <Grid
                          //     sx={{
                          //       backgroundColor: '#E0E0E0',
                          //       height: '2.5rem',
                          //       border: '1px solid #E0E0E0',
                          //       borderRadius: '0px 4px 4px 0px',
                          //   width
                          //     }}
                          >
                            Ton
                          </Grid>
                        </InputAdornment>
                      }
                      placeholder="0,00"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
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
              <Button variant="outlined" sx={{ fontWeight: '400' }}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{ boxShadow: '0', fontWeight: '400', marginRight: '1.5rem' }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PilihLaporan;
