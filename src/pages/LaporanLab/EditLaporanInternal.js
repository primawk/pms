import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useLocation } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';
import { dateToStringPPOBFormatterv2 } from '../../utils/helper';

// custom hooks
import useModal from '../../hooks/useModal';

//  components
import Navbar from '../../components/Navbar';
// import HasilAnalisa from './components/HasilAnalisa';

// services
import LabService from 'services/LabService';

const EditLaporanInternal = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const dataEdit = location.state;

  const [addFormData, setAddFormData] = useState({
    date: dataEdit?.date,
    hill_id: dataEdit?.hill_id,
    sample_type: dataEdit?.sample_type,
    dome_id: dataEdit?.dome_id,
    sample_code: dataEdit?.sample_code,
    preparation: dataEdit?.preparation,
    ni_level: dataEdit?.ni_level,
    mgo_level: dataEdit?.mgo_level,
    simgo_level: dataEdit?.simgo_level,
    fe_level: dataEdit?.fe_level,
    sio2_level: dataEdit?.sio2_level,
    inc: dataEdit?.inc,
    co_level: dataEdit?.co_level,
    cao_level: dataEdit?.cao_level,
    tonnage: dataEdit?.tonnage,
    report_type: 'internal'
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
    setLoading(true);
    event.preventDefault();
    const data = {
      date: dateToStringPPOBFormatterv2(value),
      hill_id: addFormData.hill_id,
      sample_type: addFormData.sample_type,
      dome_id: addFormData.dome_id,
      sample_code: addFormData.sample_code,
      preparation: addFormData.preparation,
      ni_level: addFormData.ni_level,
      mgo_level: addFormData.mgo_level,
      simgo_level: addFormData.simgo_level,
      fe_level: addFormData.fe_level,
      sio2_level: addFormData.sio2_level,
      inc: addFormData.inc,
      co_level: addFormData.co_level,
      cao_level: addFormData.cao_level,
      tonnage: addFormData.tonnage,
      report_type: 'internal',
      analysis: 1
    };

    try {
      const id = dataEdit?.id;
      await LabService.editReport(data, id);
      setLoading(false);
      toggle();
      // navigate('/laporan-lab');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [value, setValue] = React.useState(new Date(dataEdit?.date));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const { isShowing, toggle } = useModal();

  return (
    <>
      <EditedModal isShowing={isShowing} toggle={toggle} width={'29.563'} />
      <div
        style={{
          backgroundColor: '#F5F5F5',
          width: '100%',
          height: '100%',
          overflowY: 'auto', // it makes this container follow the height of its content
          position: 'relative'
        }}
      >
        <Navbar />
        {/* {isFetchingActivity && <LoadingModal />} */}
        <form onSubmit={handleEditFormSubmit}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              height: 'auto',
              width: '90%',
              marginTop: '6rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '6rem',
              borderRadius: '4px'
            }}
          >
            <Grid item sx={{ height: '6%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
              <Grid container>
                <Box>
                  <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>Edit Laporan Internal Lab</h2>
                </Box>
              </Grid>
            </Grid>

            <Grid item sx={{ height: '27%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
              <h4 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Informasi Sample</h4>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Tanggal</Box>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="dd/MM/yyyy"
                      name="date"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Bukit</Box>
                  <FormControl fullWidth>
                    <InputLabel id="Bukit" size="small">
                      Pilih Bukit
                    </InputLabel>
                    <Select
                      name="hill_id"
                      label="Pilih Bukit"
                      defaultValue={dataEdit.hill_id}
                      onChange={handleAddFormChange}
                      size="small"
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Jenis Sample</Box>
                  <FormControl fullWidth>
                    <InputLabel id="Jenis Sample" size="small">
                      Pilih Jenis Sample
                    </InputLabel>
                    <Select
                      name="sample_type"
                      labelId="Jenis Sample"
                      id="Jenis Sample"
                      label="Pilih Jenis Sample"
                      defaultValue={dataEdit.sample_type}
                      onChange={handleAddFormChange}
                      size="small"
                    >
                      <MenuItem value={'Sample test PIT'}>Sample test PIT</MenuItem>
                      <MenuItem value={'Sample Spesial Check'}>Sample Spesial Check</MenuItem>
                      <MenuItem value={'Sample Selective Mining'}>Sample Selective Mining</MenuItem>
                      <MenuItem value={'Sample ETO'}>Sample ETO</MenuItem>
                      <MenuItem value={'Sample EFO'}>Sample EFO</MenuItem>
                      <MenuItem value={'Sample Barging'}>Sample Barging</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Tumpukan/Dome</Box>
                  <FormControl fullWidth>
                    <InputLabel id="tumpukan" size="small">
                      Pilih Tumpukan/Dome
                    </InputLabel>
                    <Select
                      name="dome_id"
                      labelId="tumpukan"
                      id="tumpukan"
                      defaultValue={dataEdit.dome_id}
                      label="Pilih Tumpukan/Dome"
                      onChange={handleAddFormChange}
                      size="small"
                    >
                      <MenuItem value={'1'}>1</MenuItem>
                      <MenuItem value={'2'}>2</MenuItem>
                      <MenuItem value={'3'}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                height: '55%',
                borderBottom: 1,
                borderBottomColor: '#E0E0E0',
                paddingBottom: '1.5rem'
              }}
            >
              <h2 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Hasil Analisa </h2>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Kode Sample</Box>
                  <TextField
                    name="sample_code"
                    id="outlined-basic"
                    // label="Kode Sample"
                    variant="outlined"
                    onChange={handleAddFormChange}
                    defaultValue={dataEdit?.sample_code}
                  />
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Inputan Preparasi</Box>
                  <TextField
                    name="preparation"
                    id="outlined-basic"
                    label="Inputan Preparasi"
                    variant="outlined"
                    size="small"
                    defaultValue={dataEdit.preparation}
                    onChange={handleAddFormChange}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar Ni</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar Ni">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      name="ni_level"
                      id="Kadar Ni"
                      onChange={handleAddFormChange}
                      defaultValue={dataEdit.ni_level}
                      // error={touched.ni_level && Boolean(errors.ni_level)}
                      // helperText={touched.ni_level && errors.ni_level}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Nilai Kadar"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar MgO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar MgO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="mgo_level"
                      id="Kadar MgO"
                      defaultValue={dataEdit.mgo_level}
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar MgO"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar SImgO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar SImgO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="simgo_level"
                      id="Kadar SImgO"
                      defaultValue={dataEdit.simgo_level}
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar SImgO"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar Fe</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar Fe">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="fe_level"
                      id="Kadar Fe"
                      onChange={handleAddFormChange}
                      defaultValue={dataEdit.fe_level}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar Fe"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar SIO2</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar SIO2">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="sio2_level"
                      id="Kadar SIO2"
                      defaultValue={dataEdit.sio2_level}
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar SIO2"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Inc</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Inc</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Inc">Nilai Inc</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="inc"
                      defaultValue={dataEdit.inc}
                      id="Inc"
                      onChange={handleAddFormChange}
                      label="Nilai Inc"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar CO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar CO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="co_level"
                      id="Kadar CO"
                      defaultValue={dataEdit.co_level}
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar CO"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar CaO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar CaO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="cao_level"
                      id="Kadar CaO"
                      defaultValue={dataEdit.cao_level}
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar CaO"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Tonase</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Tonase</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Tonase">Tonase</InputLabel>
                    <OutlinedInput
                      // type="number"
                      name="tonnage"
                      id="Tonase"
                      defaultValue={dataEdit.tonnage}
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          Ton
                        </InputAdornment>
                      }
                      label="Tonase"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* submit */}
          <div
            style={{
              position: 'fixed',
              display: 'flex',
              bottom: '0px',
              backgroundColor: 'white',
              width: '100%',
              height: '4.875rem',
              marginRight: '5rem',
              boxShadow: '4px -10px 24px rgba(0, 0, 0, 0.04)',
              zIndex: '1'
            }}
          >
            <Grid
              container
              sx={{ justifyContent: 'flex-end', alignItems: 'center', marginRight: '5rem' }}
            >
              <Grid item sx={{ marginRight: '4rem' }}>
                <Button onClick={() => navigate(-1)}>Back</Button>
              </Grid>
              <Grid item>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={loading}
                  // onClick={console.log(formik.date)}
                  // loading={loading}
                  sx={{ width: '130%', boxShadow: '0' }}
                >
                  Edit Laporan
                </LoadingButton>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditLaporanInternal;
