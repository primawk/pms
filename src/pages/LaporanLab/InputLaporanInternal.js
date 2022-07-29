import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';
import LoadingButton from '@mui/lab/LoadingButton';
import { dateToStringPPOBFormatterv2 } from '../../utils/helper';

// custom hooks
import useModal from '../../hooks/useModal';

//  components
import Navbar from '../../components/Navbar';
// import HasilAnalisa from './components/HasilAnalisa';

// services
import LabService from 'services/LabService';

const InputLaporanInternal = () => {
  const internalSchema = Yup.object().shape({
    date: Yup.string().required('Tanggal wajib di isi!'),
    hill_id: Yup.string().required('Bukit wajib di isi!'),
    sample_type: Yup.string().required('Jenis Sample wajib di isi!'),
    dome_id: Yup.string().required('Dome wajib di isi!'),
    sample_code: Yup.string().required('Kode Sample wajib di isi!'),
    preparation: Yup.string().required('Inputan Preparasi wajib di isi!'),
    ni_level: Yup.string().required('Kadar Ni wajib di isi!'),
    mgo_level: Yup.string().required('Kadar MgO wajib di isi!'),
    simgo_level: Yup.string().required('Kadar SImgO wajib di isi!'),
    fe_level: Yup.string().required('Kadar Fe wajib di isi!'),
    sio2_level: Yup.string().required('Kadar SIO2 wajib di isi!'),
    inc: Yup.string().required('Nilai Inc wajib di isi!'),
    co_level: Yup.string().required('Kadar CO wajib di isi!'),
    cao_level: Yup.string().required('Kadar CaO wajib di isi!'),
    tonnage: Yup.string().required('Tonase wajib di isi!')
  });

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(new Date());
  const { isShowing, toggle } = useModal();

  const formik = useFormik({
    initialValues: {
      date: '',
      hill_id: '',
      sample_type: '',
      dome_id: '',
      sample_code: '',
      preparation: '',
      ni_level: '',
      mgo_level: '',
      simgo_level: '',
      fe_level: '',
      sio2_level: '',
      inc: '',
      co_level: '',
      cao_level: '',
      tonnage: ''
    },
    // validationSchema: internalSchema,
    onSubmit: async (values) => {
      console.log('test');
      const formData = new FormData();
      const data = {
        report_type: 'internal',
        analysis: 1,
        date: dateToStringPPOBFormatterv2(value),
        hill_id: parseInt(values.hill_id),
        sample_type: values.sample_type,
        dome_id: parseInt(values.dome_id),
        sample_code: values.sample_code,
        preparation: parseInt(values.preparation),
        ni_level: values.ni_level,
        mgo_level: values.mgo_level,
        simgo_level: values.simgo_level,
        fe_level: values.fe_level,
        sio2_level: values.sio2_level,
        inc: parseInt(values.inc),
        co_level: values.co_level,
        cao_level: values.cao_level,
        tonnage: values.tonnage
      };
      formData.append('data', JSON.stringify(data));
      try {
        console.log('test');
        await LabService.inputReport(formData);
        navigate('/laporan-lab', { replace: true });
      } catch (error) {
        console.log(data);
        console.log(error);
      }
    }
  });

  const navigate = useNavigate();

  const handleOnChange = (newValue) => {
    setValue(newValue);
  };

  const { errors, touched, values, handleSubmit, handleChange } = formik;

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
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                    <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>
                      Input Laporan Internal Lab
                    </h2>
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
                        value={value}
                        onChange={handleOnChange}
                        error={touched.value && Boolean(errors.value)}
                        helperText={touched.value && errors.value}
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
                        value={values.hill_id}
                        label="Pilih Bukit"
                        onChange={formik.handleChange}
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
                        value={values.sample_type}
                        label="Pilih Jenis Sample"
                        onChange={formik.handleChange}
                        size="small"
                      >
                        <MenuItem value={'Sample test PIT'}>Sample test PIT</MenuItem>
                        <MenuItem value={'Sample Spesial Check'}>Sample Spesial Check</MenuItem>
                        <MenuItem value={'Sample Selective Mining'}>
                          Sample Selective Mining
                        </MenuItem>
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
                        value={values.dome_id}
                        label="Pilih Tumpukan/Dome"
                        onChange={formik.handleChange}
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
                      label="Kode Sample"
                      variant="outlined"
                      size="small"
                      value={values.sample_code}
                      onChange={formik.handleChange}
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
                      value={values.preparation}
                      onChange={formik.handleChange}
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
                        value={values.ni_level}
                        onChange={formik.handleChange}
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
                        value={values.mgo_level}
                        onChange={formik.handleChange}
                        error={touched.mgo_level && Boolean(errors.mgo_level)}
                        helperText={touched.mgo_level && errors.mgo_level}
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
                        value={values.simgo_level}
                        onChange={formik.handleChange}
                        error={touched.simgo_level && Boolean(errors.simgo_level)}
                        helperText={touched.simgo_level && errors.simgo_level}
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
                        value={values.fe_level}
                        onChange={formik.handleChange}
                        error={touched.fe_level && Boolean(errors.fe_level)}
                        helperText={touched.fe_level && errors.fe_level}
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
                        value={values.sio2_level}
                        onChange={formik.handleChange}
                        error={touched.sio2_level && Boolean(errors.sio2_level)}
                        helperText={touched.sio2_level && errors.sio2_level}
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
                        id="Inc"
                        value={values.inc}
                        onChange={formik.handleChange}
                        error={touched.inc && Boolean(errors.inc)}
                        helperText={touched.inc && errors.inc}
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
                        value={values.co_level}
                        onChange={formik.handleChange}
                        error={touched.co_level && Boolean(errors.co_level)}
                        helperText={touched.co_level && errors.co_level}
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
                        value={values.cao_level}
                        onChange={formik.handleChange}
                        error={touched.cao_level && Boolean(errors.cao_level)}
                        helperText={touched.cao_level && errors.cao_level}
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
                        value={values.tonnage}
                        onChange={formik.handleChange}
                        error={touched.tonnage && Boolean(errors.tonnage)}
                        helperText={touched.tonnage && errors.tonnage}
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
                  <Button
                    type="submit"
                    variant="contained"
                    // onClick={console.log(formik.date)}
                    // loading={loading}
                    sx={{ width: '130%', boxShadow: '0' }}
                  >
                    Submit Laporan
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </>
  );
};

export default InputLaporanInternal;
