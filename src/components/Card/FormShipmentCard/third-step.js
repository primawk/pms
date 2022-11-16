/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Typography, Grid, InputAdornment, TextField, FormControl } from '@mui/material';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// custom hooks

// components
import Footer from 'components/Footer';
import CustomDropzone from './CustomDropzone';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function ThirdStep({ handleBack, handleContinue }) {
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
      product_type: id ? detailActivity?.product_type : prevState?.product_type,
      shipment_instruction: []
    },
    validationSchema: ShipmentSchema,
    onSubmit: (values) => {
      handleContinue(values);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue, values } = formik;

  const handleChangeImage = (e, name) => {
    setFieldValue(name, [...values[name], ...e.target?.files]);
  };

  const handleRemoveImage = (index, name) => {
    const _value = [...values[name]];
    _value.splice(index, 1);
    setFieldValue(name, [..._value]);
  };

  const handleOnDrop = (value, name) => {
    setFieldValue(name, [...values[name], ...value]);
  };

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
              <Grid item lg={6} xs={12}>
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
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jadwal Kegiatan
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {`${values && dayjs(values?.date).format('DD MMMM YYYY')}, ${
                        values && values?.time
                      }`}
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jenis Produk
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.product_type}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Informasi Pengiriman
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={10}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nama PBM
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      PT. Nama PBM
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nama Pembeli
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      PT. Nama Pembeli
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                  COA MUAT
                </Typography>
                <CustomDropzone
                  name="shipment_instruction"
                  value={values?.shipment_instruction}
                  handleOnDrop={handleOnDrop}
                  onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                  onRemove={handleRemoveImage}
                />
                <p>*Dokumen ini hanya bisa diupload oleh direktur utama/direktur keuangan</p>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                  COA BONGKAR
                </Typography>
                <CustomDropzone
                  name="shipment_instruction"
                  value={values?.shipment_instruction}
                  handleOnDrop={handleOnDrop}
                  onChange={(e) => handleChangeImage(e, 'shipment_instruction')}
                  onRemove={handleRemoveImage}
                />
                <p>*Dokumen ini hanya bisa diupload oleh direktur utama/direktur keuangan</p>
              </Grid>
              <Grid item md={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Jumlah Tonase
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Realisasi Tonase
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Realisasi Tonase"
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
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Jumlah Tonase
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Realisasi Tonase
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Realisasi Tonase"
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
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Kadar Ni
                    </Typography>
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
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Kadar Ni
                    </Typography>
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
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Kadar Fe
                    </Typography>
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
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Kadar Fe
                    </Typography>
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
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Kadar CO
                    </Typography>
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
                    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                      Kadar CO
                    </Typography>
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
                </Grid>
              </Grid>
            </Grid>
            <Footer handleBack={handleBack} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}
