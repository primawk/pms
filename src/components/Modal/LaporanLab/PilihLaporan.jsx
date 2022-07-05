import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useNavigate } from 'react-router-dom';

// components
import { CustomModal } from 'components/Modal';

const PilihLaporan = ({ isShowing, toggle, width }) => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const navigate = useNavigate();

  const [jenisLaporan, setJenisLaporan] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width={'29rem'}>
      <Grid
        container
        sx={{
          width: '25.5rem',
          height: '36.875rem',
          backgroundColor: 'white',
          borderRadius: '4px',
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
            <h2>Input Laporan Lab</h2>
          </Grid>
          <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
            <Box sx={{ fontSize: '0.875rem' }}>Jenis Laporan Lab</Box>
          </Grid>
          <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Jenis Laporan</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Jenis Laporan"
                id="demo-simple-select"
                onChange={(e) => setJenisLaporan(e.target.value)}
              >
                <MenuItem value={'input-laporan-internal'}>Laporan Internal</MenuItem>
                <MenuItem value={'input-laporan-eksternal'}>Laporan Eksternal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
            <Box sx={{ fontSize: '0.875rem' }}>Tanggal</Box>
          </Grid>
          <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
              <DesktopDatePicker
                inputFormat="dd/MM/yyyy"
                value={value}
                onChange={handleChange}
                fullWidth
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
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
              <Button variant="outlined" sx={{ fontWeight: '400' }} onClick={toggle}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{ boxShadow: '0', fontWeight: '400', marginRight: '1.5rem' }}
                onClick={() => navigate(`/${jenisLaporan}`)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </div> */}
    </CustomModal>
  );
};

PilihLaporan.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default PilihLaporan;
