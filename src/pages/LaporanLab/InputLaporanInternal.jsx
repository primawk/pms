import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Icon } from '@iconify/react';

import Navbar from '../../components/Navbar';

const InputLaporanInternal = () => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: '100%',
        overflow: 'auto', // it makes this container follow the height of its content
        position: 'relative'
      }}
    >
      <Navbar />

      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          height: '72.5rem',
          width: '90%',
          marginTop: '6rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 'auto',
          borderRadius: '4px'
        }}
      >
        <Grid item sx={{ height: '6%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <Grid container>
            <Box>
              <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>Input Laporan Internal Lab</h2>
            </Box>
          </Grid>
        </Grid>
        <Grid item sx={{ height: '27%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <h4 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Informasi Sample</h4>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Tanggal</Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} size="small" />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Bukit</Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  Pilih Bukit
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Jenis Sample</Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  Pilih Jenis Sample
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Tumpukan/Dome</Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  Pilih Tumpukan/Dome
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ height: '55%' }}>
          <h2 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Hasil Analisa </h2>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
            >
              <Box sx={{ marginBottom: '1rem' }}>Kode Sample</Box>
              <TextField id="outlined-basic" label="Kode Sample" variant="outlined" size="small" />
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Kadar Ni</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
              <FormControl size="small" variant="outlined">
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
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Kadar MgO</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
              <FormControl size="small" variant="outlined">
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
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Kadar SlmgO</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
              <FormControl size="small" variant="outlined">
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
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Kadar Fe</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
              <FormControl size="small" variant="outlined">
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
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Kadar SIO2</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
              <FormControl size="small" variant="outlined">
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
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Inc</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Inc</Box>
              <FormControl size="small" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Nilai Inc</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  // value={values.password}
                  // onChange={handleChange('password')}
                  label="Nilai Inc"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Kadar CO</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
              <FormControl size="small" variant="outlined">
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
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Kadar CaO</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
              <FormControl size="small" variant="outlined">
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
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>
                <h4>Tonase</h4>
              </Box>
              <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Tonase</Box>
              <FormControl size="small" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Tonase</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  // value={values.password}
                  // onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end" backgroundColor="gray">
                      Ton
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ borderTop: 1, borderTopColor: '#E0E0E0' }}>
          <Grid container sx={{ marginTop: '1.5rem', justifyContent: 'center' }}>
            <Button variant="contained">
              <Box sx={{ margin: '5px 12px 0 0 ' }}>
                <Icon icon="carbon:add-alt" color="white" fontSize={16} />
              </Box>
              Tambah Data
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          position: 'fixed',
          display: 'flex',
          bottom: '0px',
          backgroundColor: 'white',
          width: '100%',
          height: '4.875rem',
          boxShadow: '4px -10px 24px rgba(0, 0, 0, 0.04)',
          zIndex: '1'
        }}
      >
        <Grid
          container
          sx={{ justifyContent: 'flex-end', alignItems: 'center', marginRight: '5rem' }}
        >
          <Grid item sx={{ marginRight: '4rem' }}>
            <Button>Back</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ width: '130%' }}>
              Submit Laporan
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InputLaporanInternal;
