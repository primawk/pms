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

// components
import CustomModal from 'components/Modal/CustomModal/CustomModal';

// services
import ProductionService from 'services/Dashboard';
import { getEdit } from 'services/Dashboard';

const EditData = ({ isShowing, toggle, id }) => {
  const [dataEdit, setDataEdit] = useState([]);
  console.log(id);
  // const {
  //   data: dataTarget
  //   // isLoading: isLoadingOreGetting,
  //   // isFetching: isFetchingOreGetting
  // } = useQuery(['target'], () =>
  //   ProductionService.getTargetDetail({
  //     id: id
  //   })
  // );

  useEffect(() => {
    getEdit(id).then((response) => {
      setDataEdit(response);
      return response;
    });
  }, [id]);

  // const dataEdit = dataTarget?.data?.data;
  // const dataEdit = data?.map((obj) => obj.target_list);

  const [addFormData, setAddFormData] = useState({
    month: dataEdit?.month,
    target: dataEdit?.target,
    year: dataEdit?.year
  });

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
    const data = {
      month: addFormData?.month,
      target: addFormData?.target,
      year: addFormData?.year
    };

    try {
      console.log(id);
      await ProductionService.editTarget(id, data);
      console.log(data);

      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(addFormData.month);

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  // const [value, setValue] = React.useState(new Date(dataEdit?.year));

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
              <Grid item sx={{}}>
                <Box sx={{ fontSize: '0.875rem' }}>Tahun</Box>
              </Grid>
              <Grid item sx={{ width: '22.5rem' }}>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                  <DesktopDatePicker
                    inputFormat="yyyy"
                    openTo="year"
                    value={value}
                    onChange={handleChange}
                    fullWidth
                    renderInput={(params) => <TextField {...params} size="small" />}
                  />
                </LocalizationProvider> */}
                <TextField
                  name="year"
                  id="outlined-basic"
                  // label="Kode Sample"
                  variant="outlined"
                  onChange={handleAddFormChange}
                  defaultValue={dataEdit?.year}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* 1 */}
          <Grid item>
            <Grid container sx={{ alignItems: 'flex-end' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Bulan</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <TextField
                    name="month"
                    id="outlined-basic"
                    // label="Kode Sample"
                    variant="outlined"
                    onChange={handleAddFormChange}
                    defaultValue={dataEdit?.month}
                  />
                </Grid>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ margin: '0 auto 1rem 1.5rem' }}>
                  <Box sx={{ fontSize: '0.875rem' }}>Target</Box>
                </Grid>
                <Grid item sx={{ width: '22.5rem', margin: '0 auto 1rem 1.5rem' }}>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <OutlinedInput
                      required
                      name="target"
                      onChange={handleAddFormChange}
                      defaultValue={dataEdit?.target}
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
          {/* <Grid item>
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
                        defaultValue={dataEdit?.target}
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
                        required
                        name="agustus"
                        onChange={handleAddFormChange}
                        defaultValue={dataEdit?.target}
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
            </Grid> */}

          {/* 3 */}
          {/* <Grid item>
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
                        defaultValue={dataEdit?.target}
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
                        defaultValue={dataEdit?.target}
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
            </Grid> */}

          {/* 4 */}
          {/* <Grid item>
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
                        defaultValue={dataEdit?.target}
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
                        defaultValue={dataEdit?.target}
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
            </Grid> */}
          {/* 5 */}
          {/* <Grid item>
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
                        defaultValue={dataEdit?.target}
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
                        defaultValue={dataEdit?.target}
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
            </Grid> */}

          {/* 6 */}
          {/* <Grid item>
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
                        defaultValue={dataEdit?.target}
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
                        defaultValue={dataEdit?.target}
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
            </Grid> */}

          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem 0 1.5rem 0'
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
          {/* </Grid> */}
        </form>
      </Grid>
    </CustomModal>
  );
};

EditData.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default EditData;
