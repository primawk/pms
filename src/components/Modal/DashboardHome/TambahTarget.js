import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import dayjs from 'dayjs';

// components
import CustomModal from 'components/Modal/CustomModal/CustomModal';
import ProductionService from 'services/Dashboard';

const TambahTarget = ({ isShowing, toggle, width }) => {
  const [addFormData, setAddFormData] = useState({
    year: '2021',
    target_list: [
      {
        month: 'Januari',
        month_number: 1,
        target: 70000
      },
      {
        month: 'Februari',
        month_number: 2,
        target: 10000
      },
      {
        month: 'Maret',
        month_number: 3,
        target: 20000
      },
      {
        month: 'April',
        month_number: 4,
        target: 50000
      },
      {
        month: 'Mei',
        month_number: 5,
        target: 70000
      },
      {
        month: 'Juni',
        month_number: 6,
        target: 15000
      },
      {
        month: 'Juli',
        month_number: 7,
        target: 25000
      },
      {
        month: 'Agustus',
        month_number: 8,
        target: 30000
      },
      {
        month: 'September',
        month_number: 9,
        target: 60000
      },
      {
        month: 'Oktober',
        month_number: 10,
        target: 10000
      },
      {
        month: 'November',
        month_number: 11,
        target: 40000
      },
      {
        month: 'Desember',
        month_number: 12,
        target: 35000
      }
    ]
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      year: dayjs(value).format('YYYY'),
      target_list: [
        {
          month: 'Desember',
          month_number: 12,
          target: addFormData.desember
        },
        {
          month: 'November',
          month_number: 11,
          target: addFormData.november
        },
        {
          month: 'Oktober',
          month_number: 10,
          target: addFormData.oktober
        },
        {
          month: 'September',
          month_number: 9,
          target: addFormData.september
        },
        {
          month: 'Agustus',
          month_number: 8,
          target: addFormData.agustus
        },
        {
          month: 'Juli',
          month_number: 7,
          target: addFormData.juli
        },
        {
          month: 'Juni',
          month_number: 6,
          target: addFormData.juni
        },
        {
          month: 'Mei',
          month_number: 5,
          target: addFormData.mei
        },
        {
          month: 'April',
          month_number: 4,
          target: addFormData.april
        },
        {
          month: 'Maret',
          month_number: 3,
          target: addFormData.maret
        },
        {
          month: 'Februari',
          month_number: 2,
          target: addFormData.februari
        },
        {
          month: 'Januari',
          month_number: 1,
          target: addFormData.januari
        }
      ]
    };

    try {
      await ProductionService.addTarget(data);
      console.log(data);

      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(new Date());

  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="52.125rem">
      <Grid
        container
        sx={{
          height: '48.063rem',
          backgroundColor: 'white',
          borderRadius: '4px',
          margin: 'auto'
        }}
      >
        <form onSubmit={handleAddFormSubmit}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '1rem'
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
              <Grid item sx={{ margin: '0 auto 1rem 25.5rem' }}>
                <Box sx={{ fontSize: '0.875rem' }}>Tahun</Box>
              </Grid>
              <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 25.5rem' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                  <DesktopDatePicker
                    inputFormat="yyyy"
                    openTo="year"
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
                        required
                        name="januari"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="juli"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="februari"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="agustus"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="maret"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="september"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="april"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="oktober"
                        onChange={handleAddFormChange}
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
                        required
                        name="mei"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="november"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="juni"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                        required
                        name="desember"
                        onChange={handleAddFormChange}
                        endAdornment={
                          <InputAdornment position="end" backgroundColor="gray">
                            <Grid>Ton</Grid>
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
                  type="submit"
                  variant="contained"
                  sx={{
                    boxShadow: '0',
                    fontWeight: '400',
                    marginRight: '3.1rem',
                    width: '10.813rem'
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </CustomModal>
  );
};

TambahTarget.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default TambahTarget;
