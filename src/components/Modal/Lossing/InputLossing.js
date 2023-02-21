import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import CustomModal from 'components/Modal/CustomModal/CustomModal';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

// end icon input
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

// calendar input
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// service
import ModulLossingService from 'services/ModulLossingService';

const InputLossing = ({ isShowing, toggle, hillId }) => {
  const [value, setValue] = useState(new Date());

  const handleChangeDate = (newValue) => {
    setValue(dayjs(newValue).format('YYYY-MM-DD'));
  };

  const [addFormData, setAddFormData] = useState({
    date: '',
    dataEstimate: '',
    hillId: hillId
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      date: value,
      dataEstimate: addFormData.dataEstimate,
      hill_id: hillId
    };
    try {
      await ModulLossingService.inputEstimation(data);
      // setLoading(false);
      // navigate(-1);
      toggle();
    } catch (error) {
      // toast.error(error.response.data.detail_message);
      // setLoading(false);
    }
    toggle();
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
          <form onSubmit={handleSubmit}>
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
                  name="date"
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
                name="dataEstimate"
                // id="Kadar Ni"
                onChange={handleAddFormChange}
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
                  <Button type="submit" variant="contained" sx={{ boxShadow: 0 }}>
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
          </form>
        </Grid>
      </CustomModal>
    </>
  );
};

export default InputLossing;
