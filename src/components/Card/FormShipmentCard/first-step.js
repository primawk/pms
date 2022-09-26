/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Stack,
  InputAdornment,
  Chip,
  Autocomplete
} from '@mui/material';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// custom hooks

// components
import Footer from 'components/Footer';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function FirstStep({ handleContinue }) {
  const { activityType, id } = useParams();
  const navigate = useNavigate();
  const prevState = useLocation().state;

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailActivity = data?.data?.data;

  // shipment schema
  const ShipmentSchema = Yup.object().shape({});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      activity_type: id ? detailActivity?.activity_type : prevState?.activity_type,
      activity_code: id ? detailActivity?.activity_code : null,
      date: id ? detailActivity?.date : prevState?.date,
      time: id ? detailActivity?.time : prevState?.time,
      product_type: id ? detailActivity?.product_type : prevState?.product_type
    },
    validationSchema: ShipmentSchema,
    onSubmit: (values) => {
      handleContinue(values);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue, values } = formik;

  const handleGetLevel = (level) => (isNaN(values?.[level] / 100) ? 0 : values?.[level] / 100);

  const handleChangeNumber = (e, name, equivalent) => {
    const _val = e.target.value.replace(/[^0-9.]/g, '');
    if (_val.split('.').length > 2) {
      const _doubleDot = _val.slice(0, -1);
      setFieldValue(name, _doubleDot);
      if (name !== 'tonnage_total' && name.includes('level')) {
        const _equivalent = (_doubleDot / 100) * values?.tonnage_total;
        setFieldValue(equivalent, _equivalent);
      } else if (name === 'tonnage_total') {
        setFieldValue('ni_metal_equivalent', handleGetLevel('ni_level') * _doubleDot);
        setFieldValue('fe_metal_equivalent', handleGetLevel('fe_level') * _doubleDot);
        setFieldValue('co_metal_equivalent', handleGetLevel('co_level') * _doubleDot);
        setFieldValue('simgo_metal_equivalent', handleGetLevel('simgo_level') * _doubleDot);
      }
    } else {
      setFieldValue(name, _val);
      if (name !== 'tonnage_total' && name.includes('level') && equivalent !== undefined) {
        const _equivalent = (_val / 100) * values?.tonnage_total;
        setFieldValue(equivalent, _equivalent);
      } else if (name === 'tonnage_total') {
        setFieldValue('ni_metal_equivalent', handleGetLevel('ni_level') * _val);
        setFieldValue('fe_metal_equivalent', handleGetLevel('fe_level') * _val);
        setFieldValue('co_metal_equivalent', handleGetLevel('co_level') * _val);
        setFieldValue('simgo_metal_equivalent', handleGetLevel('simgo_level') * _val);
      }
    }
  };

  useEffect(() => {
    if (id === undefined && !values?.activity_type && !values?.date) {
      navigate(-1);
      navigate(0);
    }
  }, []);

  return (
    <div
      style={{
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px',
        borderBottom: '1px solid #E0E0E0',
        paddingBottom: '60px'
      }}
      className="bg-white"
    >
      {isFetching && <LoadingModal />}
      <>
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ mb: 3 }}
              spacing={5}
            >
              <Grid item lg={5} xs={12}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Informasi Umum Kegiatan
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={10}
                >
                  <Grid item container lg={4.5} xs={4.5} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jadwal Kegiatan
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {`${values && dayjs(values?.date).format('DD MMMM YYYY')}, ${
                        values && values?.time
                      }`}
                    </Typography>
                  </Grid>
                  <Grid item container lg={4.5} xs={4.5} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jenis Produk
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.product_type}
                    </Typography>
                  </Grid>
                </Grid>
                <Stack direction="column" spacing={3}>
                  <Typography variant="h6">Nomor Urut Pengapalan</Typography>
                  <FormControl>
                    <TextField
                      fullWidth
                      size="small"
                      //   name=""
                      //   {...getFieldProps('')}
                      // error={Boolean(touched. && errors.)}
                      // helperText={touched. && errors.}
                    />
                  </FormControl>
                  <Typography variant="h6">Jenis Pemasaran</Typography>
                  <FormControl>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      //   name=""
                      //   {...getFieldProps('')}
                      // error={Boolean(touched. && errors.)}
                      // helperText={touched. && errors.}
                    >
                      <MenuItem value="">Pilih Jenis Pemasaran</MenuItem>
                    </TextField>
                  </FormControl>
                  <Typography variant="h6">Jenis Penjualan</Typography>
                  <FormControl>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      //   name=""
                      //   {...getFieldProps('')}
                      // error={Boolean(touched. && errors.)}
                      // helperText={touched. && errors.}
                    >
                      <MenuItem value="">Pilih Jenis Penjualan</MenuItem>
                    </TextField>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item lg={7} xs={12}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Informasi Pengiriman
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Nama PBM
                </Typography>
                <TextField
                  placeholder="Tuliskan PBM"
                  fullWidth
                  size="small"
                  //   name=""
                  //   {...getFieldProps('')}
                  // error={Boolean(touched. && errors.)}
                  // helperText={touched. && errors.}
                />
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ mb: 3 }}
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Nama Pembeli
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Tuliskan Nama Pembeli"
                        fullWidth
                        size="small"
                        //   name=""
                        //   {...getFieldProps('')}
                        // error={Boolean(touched. && errors.)}
                        // helperText={touched. && errors.}
                      />
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Lokasi Titik Serah (Provinsi)
                    </Typography>
                    <FormControl>
                      <Autocomplete
                        size="small"
                        placeholder="Pilih Provinsi"
                        option={{}}
                        // options={top100Films.map((option) => option.title)}
                        // defaultValue={[top100Films[13].title]}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Nama Jenis Pengiriman
                    </Typography>
                    <FormControl>
                      <TextField
                        select
                        fullWidth
                        size="small"
                        //   name=""
                        //   {...getFieldProps('')}
                        // error={Boolean(touched. && errors.)}
                        // helperText={touched. && errors.}
                      >
                        <MenuItem value="">Pilih Jenis Pengiriman</MenuItem>
                      </TextField>
                    </FormControl>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Lokasi Tujuan
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Tuliskan Nama Pabrik Tujuan"
                        fullWidth
                        size="small"
                        //   name=""
                        //   {...getFieldProps('')}
                        // error={Boolean(touched. && errors.)}
                        // helperText={touched. && errors.}
                      />
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Lokasi Titik Serah (Kabupaten/Kota)
                    </Typography>
                    <FormControl>
                      <Autocomplete
                        size="small"
                        placeholder="Pilih Kabupaten/Kota"
                        option={{}}
                        // options={top100Films.map((option) => option.title)}
                        // defaultValue={[top100Films[13].title]}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Nama Alat Pengiriman
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Tuliskan Alat Pengiriman"
                        fullWidth
                        size="small"
                        //   name=""
                        //   {...getFieldProps('')}
                        // error={Boolean(touched. && errors.)}
                        // helperText={touched. && errors.}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Jumlah Pemasaran
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Volume Pengiriman
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Jumlah Tonase"
                        fullWidth
                        value={values.sublot_total}
                        onChange={(e) => handleChangeNumber(e, 'sublot_total')}
                        error={Boolean(touched.sublot_total && errors.sublot_total)}
                        helperText={touched.sublot_total && errors.sublot_total}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              Ton
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Asal Tumpukan EFO
                    </Typography>
                    <FormControl>
                      <Autocomplete
                        multiple
                        size="small"
                        option={{}}
                        // options={top100Films.map((option) => option.title)}
                        // defaultValue={[top100Films[13].title]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                          ))
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                  Kadar Ni
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nilai Kadar
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values.ni_level}
                        onChange={(e) => {
                          handleChangeNumber(e, 'ni_level', 'ni_metal_equivalent');
                        }}
                        error={Boolean(touched.ni_level && errors.ni_level)}
                        helperText={touched.ni_level && errors.ni_level}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              %
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Ekuivalen Logam
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Ekuivalen Logam"
                        fullWidth
                        value={values.ni_metal_equivalent}
                        error={Boolean(touched.ni_metal_equivalent && errors.ni_metal_equivalent)}
                        helperText={touched.ni_metal_equivalent && errors.ni_metal_equivalent}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              Ton
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                  Kadar Fe
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nilai Kadar
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values.fe_level}
                        onChange={(e) => {
                          handleChangeNumber(e, 'fe_level', 'fe_metal_equivalent');
                        }}
                        error={Boolean(touched.fe_level && errors.fe_level)}
                        helperText={touched.fe_level && errors.fe_level}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              %
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Ekuivalen Logam
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Ekuivalen Logam"
                        fullWidth
                        value={values.fe_metal_equivalent}
                        error={Boolean(touched.fe_metal_equivalent && errors.fe_metal_equivalent)}
                        helperText={touched.fe_metal_equivalent && errors.fe_metal_equivalent}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              Ton
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                  Kadar CO
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nilai Kadar
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values.co_level}
                        onChange={(e) => {
                          handleChangeNumber(e, 'co_level', 'co_metal_equivalent');
                        }}
                        error={Boolean(touched.co_level && errors.co_level)}
                        helperText={touched.co_level && errors.co_level}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              %
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Ekuivalen Logam
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Ekuivalen Logam"
                        fullWidth
                        value={values.co_metal_equivalent}
                        error={Boolean(touched.co_metal_equivalent && errors.co_metal_equivalent)}
                        helperText={touched.co_metal_equivalent && errors.co_metal_equivalent}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              Ton
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                  Kadar SiMgO
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nilai Kadar
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values.simgo_level}
                        onChange={(e) => {
                          handleChangeNumber(e, 'simgo_level', 'simgo_metal_equivalent');
                        }}
                        error={Boolean(touched.simgo_level && errors.simgo_level)}
                        helperText={touched.simgo_level && errors.simgo_level}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              %
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Ekuivalen Logam
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Ekuivalen Logam"
                        fullWidth
                        value={values.simgo_metal_equivalent}
                        error={Boolean(
                          touched.simgo_metal_equivalent && errors.simgo_metal_equivalent
                        )}
                        helperText={touched.simgo_metal_equivalent && errors.simgo_metal_equivalent}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        size="small"
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              Ton
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Footer handleBack={() => navigate(-1)} step={1} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}
