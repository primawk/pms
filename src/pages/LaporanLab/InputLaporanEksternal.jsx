import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Icon } from '@iconify/react';

import Navbar from '../../components/Navbar';

const InputLaporanEksternal = () => {
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
          //   alignItems: 'flex-start',
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
              <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>Input Laporan Eksternal Lab</h2>
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
              <Box sx={{ marginBottom: '1rem' }}>Nama Pengaju Sample</Box>
              <TextField
                id="outlined-basic"
                label="Nama Pengaju Sample"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Nama Perusahaan</Box>
              <TextField
                id="outlined-basic"
                label="Nama Perusahaan"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Nomor Kontak Pengaju Sample</Box>
              <FormControl size="small" variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-password"
                  // value={values.password}
                  // onChange={handleChange('password')}
                  startAdornment={
                    <InputAdornment position="start" backgroundColor="gray">
                      +62
                    </InputAdornment>
                  }
                  placeholder="Nomor Kontak Pengaju Sample"
                  fullWidth
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ height: '55%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <h2 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Preparasi dan Analisa </h2>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
            >
              <Box sx={{ marginBottom: '1rem' }}>Preparasi</Box>
              <TextField id="outlined-basic" label="Preparasi" variant="outlined" size="small" />
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
            >
              <Box sx={{ marginBottom: '1rem' }}>Analisa</Box>
              <TextField id="outlined-basic" label="Analisa" variant="outlined" size="small" />
            </Grid>
          </Grid>
          <Grid item sx={{ margin: '1.5rem 0.5rem 0 2rem' }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
              <Grid sx={{ display: 'flex', flexDirection: 'column', marginRight: '2rem' }}>
                <Box sx={{ marginBottom: '1rem' }}>
                  <h3>Upload Laporan</h3>
                </Box>
                <Grid
                  item
                  sx={{
                    backgroundColor: '#E5E5FE',
                    width: '27.25rem',
                    height: '14.563rem',
                    border: '1px dashed #3F48C0',
                    borderRadius: '8px'
                  }}
                >
                  <Grid
                    container // container to make the justify content works
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginTop: '1.5rem'
                    }}
                  >
                    <Grid item sx={{ margin: 'auto' }}>
                      <Icon icon="bi:cloud-upload" color="#3f48c0" fontSize={70} />
                    </Grid>
                    <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                      Upload file .pdf untuk laporan
                    </Grid>
                    <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                      eksternal disini. Ukuran max
                    </Grid>
                    <Grid item sx={{ margin: 'auto', marginBottom: '1rem' }} fontSize={'0.875rem'}>
                      laporan 1mb.
                    </Grid>
                    <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                      <Button variant="contained">Upload File</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ marginBottom: '1rem' }}>File Laporan</Box>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    width: '7.438rem',
                    height: '9.063rem',
                    border: '1px solid #3F48C0',
                    borderRadius: '4px'
                  }}
                >
                  <Grid
                    container // container to make the justify content works
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginTop: '0.5rem'
                    }}
                  >
                    <Grid item sx={{ marginLeft: '5rem' }}>
                      <Icon icon="ion:close-circle-sharp" color="#e0e0e0" fontSize={24} />
                    </Grid>
                    <Grid item sx={{ margin: 'auto' }} fontSize={80}>
                      <Icon icon="ph:file-pdf-duotone" color="#3f48c0" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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

export default InputLaporanEksternal;
