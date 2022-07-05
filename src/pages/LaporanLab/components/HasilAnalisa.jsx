import React from 'react';
import { Grid, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const HasilAnalisa = () => {
  return (
    <Grid
      item
      sx={{ height: '55%', borderBottom: 1, borderBottomColor: '#E0E0E0', paddingBottom: '1.5rem' }}
    >
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
  );
};

export default HasilAnalisa;
