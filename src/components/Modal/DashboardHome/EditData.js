import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import { LoadingModal } from 'components/Modal';
import { toast } from 'react-toastify';

// components
import CustomModal from 'components/Modal/CustomModal/CustomModal';

// services
import ProductionService from 'services/Dashboard';

const EditData = ({ isShowing, toggle, year, dataEdit, id, dataTarget }) => {
  const [loading, setLoading] = useState(false);
  const [idEdit, setIdEdit] = useState([]);
  const data = Object.values(dataEdit).map((item, i) => item?.target_list[1]);

  useEffect(() => {
    setIdEdit(id);
  });

  // const result = data?.map(({ month, target, i }) => {
  //   console.log(`${month} with quantity ${target} with price ${i} `);
  // });

  const dataTargetv2 = String(dataTarget);

  console.log(dataTarget);

  const [addFormData, setAddFormData] = useState([
    {
      month: 'Januari',
      target: dataTarget[0],
      year: 1996
    },
    {
      month: 'Februari',
      target: dataTarget[1],
      year: 1996
    },
    {
      month: 'Maret',
      target: dataTarget[2],
      year: 1996
    },
    {
      month: 'April',
      target: dataTarget[3],
      year: 1996
    },
    {
      month: 'Mei',
      target: dataTarget[4],
      year: 1996
    },
    {
      month: 'Juni',
      target: dataTarget[5],
      year: 1996
    },
    {
      month: 'Juli',
      target: dataTarget[6],
      year: 1996
    },
    {
      month: 'Agustus',
      target: dataTarget[7],
      year: 1996
    },
    {
      month: 'September',
      target: dataTarget[8],
      year: 1996
    },
    {
      month: 'Oktober',
      target: dataTarget[9],
      year: 1996
    },
    {
      month: 'November',
      target: dataTarget[10],
      year: 1996
    },
    {
      month: 'Desember',
      target: dataTarget[11],
      year: 1996
    }
  ]);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    const data = [
      {
        month: 'Januari',
        target: addFormData.Januari,
        year: '1996'
      },
      {
        month: 'Februari',
        target: addFormData.Februari,
        year: '1996'
      },
      {
        month: 'Maret',
        target: addFormData.Maret,
        year: '1996'
      },
      {
        month: 'April',
        target: addFormData.April,
        year: '1996'
      },
      {
        month: 'Mei',
        target: addFormData.Mei,
        year: '1996'
      },
      {
        month: 'Juni',
        target: addFormData.Juni,
        year: '1996'
      },
      {
        month: 'Juli',
        target: addFormData.Juli,
        year: '1996'
      },
      {
        month: 'Agustus',
        target: addFormData.Agustus,
        year: '1996'
      },
      {
        month: 'September',
        target: addFormData.September,
        year: '1996'
      },
      {
        month: 'Oktober',
        target: addFormData.Oktober,
        year: '1996'
      },
      {
        month: 'November',
        target: addFormData.November,
        year: '1996'
      },
      {
        month: 'Desember',
        target: addFormData.Desember,
        year: '1996'
      }
    ];

    try {
      await idEdit?.forEach((_id, index) => {
        ProductionService.editTarget(_id, data[index]);
      });

      console.log('success');
    } catch (error) {
      console.log(error);
    }
    // event.preventDefault();
    // console.log('sukses');
    // idEdit
    //   .forEach((_id, index) => {
    //     // ProductionService.editTarget(_id, addFormData[index]);
    //     console.log(_id, addFormData[index]);
    //   })
    //   .then(() => {
    //     toast.success('Data berhasil ditambah!');
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.detail_message);
    //     setLoading(false);
    //   });
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(new Date());

  return (
    <>
      {/* {isFetchingOreGetting && <LoadingModal />} */}
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
          <form onSubmit={handleEditFormSubmit}>
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
                <h2>Edit Target</h2>
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
                          // required
                          name="Januari"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[0]}
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
                          // required
                          name="Juli"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[6]}
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
                          // required
                          name="Februari"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[1]}
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
                          // required
                          name="Agustus"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[7]}
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
                          // required
                          name="Maret"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[2]}
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
                          // required
                          name="September"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[8]}
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
                          // required
                          name="April"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[3]}
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
                          // required
                          name="Oktober"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[9]}
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
                          // required
                          name="Mei"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[4]}
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
                          // required
                          name="November"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[10]}
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
                          // required
                          name="Juni"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[5]}
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
                          // required
                          name="Desember"
                          onChange={handleAddFormChange}
                          defaultValue={dataTarget[11]}
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
    </>
  );
};

EditData.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default EditData;
