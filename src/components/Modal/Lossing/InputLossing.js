import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import CustomModal from 'components/Modal/CustomModal/CustomModal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

// end icon input
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

// calendar input
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const InputLossing = ({ isShowing, toggle, targetDate }) => {
  const [age, setAge] = useState('');
  const [value, setValue] = useState(new Date());

  const handleChangeDate = (newValue) => {
    // setValue(dayjs(newValue).format('YYYY-MM-DD'));
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <CustomModal isShowing={isShowing} toggle={toggle} width="408px">
        <Grid
          container
          sx={{
            height: 'auto',
            backgroundColor: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column'
            // padding: 2
          }}
        >
          <Grid
            item
            sx={{
              fontWeight: '700',
              fontSize: '24px',
              margin: '0 1rem 0 1rem',
              textAlign: 'center',
              padding: 1
            }}
          >
            Input Estimasi Lossing Kegiatan Tambang
          </Grid>
          <Grid item sx={{ fontSize: '14px', margin: '24px' }}>
            Tanggal Estimasi Kegiatan
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
              <DesktopDatePicker
                required
                inputFormat="dd/MM/yyyy"
                // name="date"
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item sx={{ fontSize: '14px', margin: '0 24px 24px 24px' }}>
            Data Estimasi
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <OutlinedInput
              fullWidth
              required
              number
              // name="ni_level"
              // id="Kadar Ni"
              // onChange={handleAddFormChange}
              // error={touched.ni_level && Boolean(errors.ni_level)}
              // helperText={touched.ni_level && errors.ni_level}
              placeholder="0,00"
              endAdornment={
                <InputAdornment position="end" backgroundColor="gray">
                  Ton
                </InputAdornment>
              }
              // label="Nilai Kadar"
            />
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <Grid item container spacing={2} sx={{ flexDirection: 'row-reverse' }}>
              <Grid item>
                <Button variant="contained" sx={{ boxShadow: 0 }} onClick={toggle}>
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={toggle}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  );
};

export default InputLossing;
