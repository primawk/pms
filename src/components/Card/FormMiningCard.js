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
  InputAdornment
} from '@mui/material';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// components
import Footer from 'components/Footer';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

const measurementType = ['Sumlot SM', 'Dump Truck', 'Timbangan'];

const hillList = ['Bukit I', 'Bukit IX'];

export default function FormMiningCard() {
  const { activityType, id } = useParams();
  const navigate = useNavigate();
  const prevState = useLocation().state;

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailActivity = data?.data?.data;

  // mining activity schema
  const OreGettingSchema = Yup.object().shape({
    measurement_type: Yup.string().required('Measurement type is required'),
    sublot_total: Yup.number().required('Sublot total is required'),
    tonnage_total: Yup.number().required('Tonnage total is required'),
    ni_level: Yup.number().required('Ni level is required'),
    ni_metal_equivalent: Yup.number().required('Ni equivalent is required'),
    fe_level: Yup.number().required('Fe level is required'),
    fe_metal_equivalent: Yup.number().required('Fe equivalent is required'),
    co_level: Yup.number().required('Co level is required'),
    co_level_equivalent: Yup.number().required('Co equivalent is required'),
    simgo_level: Yup.number().required('Simgo level is required'),
    simgo_level_equivalent: Yup.number().required('Simgo equivalent is required'),
    hill_destination: Yup.string().required('Hill destination is required'),
    dome_destination: Yup.string().required('Dome destination is required')
  });

  const OreHaulingToEtoSchema = Yup.object().shape({
    measurement_type: Yup.string().required('Measurement type is required'),
    partner: Yup.string().required('Partner is required'),
    ritase_total: Yup.number().required('Retase total is required'),
    tonnage_total: Yup.number().required('Tonnage total is required'),
    ni_level: Yup.number().required('Ni level is required'),
    ni_metal_equivalent: Yup.number().required('Ni equivalent is required'),
    fe_level: Yup.number().required('Fe level is required'),
    fe_metal_equivalent: Yup.number().required('Fe equivalent is required'),
    co_level: Yup.number().required('Co level is required'),
    co_level_equivalent: Yup.number().required('Co equivalent is required'),
    simgo_level: Yup.number().required('Simgo level is required'),
    simgo_level_equivalent: Yup.number().required('Simgo equivalent is required'),
    hill_origin: Yup.string().required('Hill origin is required'),
    dome_origin: Yup.string().required('Dome origin is required'),
    hill_destination: Yup.string().required('Dome destination is required'),
    dome_destination: Yup.string().required('Dome destination is required')
  });

  const EtoToEfoSchema = Yup.object().shape({
    measurement_type: Yup.string().required('Measurement type is required'),
    sublot_total: Yup.number().required('Sublot total is required'),
    tonnage_total: Yup.number().required('Tonnage total is required'),
    ni_level: Yup.number().required('Ni level is required'),
    ni_metal_equivalent: Yup.number().required('Ni equivalent is required'),
    fe_level: Yup.number().required('Fe level is required'),
    fe_metal_equivalent: Yup.number().required('Fe equivalent is required'),
    co_level: Yup.number().required('Co level is required'),
    co_level_equivalent: Yup.number().required('Co equivalent is required'),
    simgo_level: Yup.number().required('Simgo level is required'),
    simgo_level_equivalent: Yup.number().required('Simgo equivalent is required'),
    hill_origin: Yup.string().required('Hill origin is required'),
    dome_origin: Yup.string().required('Dome origin is required'),
    hill_destination: Yup.string().required('Dome destination is required'),
    dome_destination: Yup.string().required('Dome destination is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      activity_type: id ? detailActivity?.activity_type : prevState?.activity_code,
      activity_code: null,
      date: id ? detailActivity?.date : prevState?.date,
      time: id ? detailActivity?.time : prevState?.time,
      product_type: id ? detailActivity?.product_type : prevState?.product_type,
      block: id ? detailActivity?.block : prevState?.block,
      measurement_type: id ? detailActivity?.measurement_type : '',
      hill_id: id ? detailActivity?.hill_id : '',
      dome_id: id ? detailActivity?.dome_id : '',
      partner: id ? detailActivity?.partner : null,
      sublot_total: id ? detailActivity?.sublot_total : 0,
      tonnage_total: id ? detailActivity?.tonnage_total : 0,
      ritase_total: id ? detailActivity?.ritase_total : 0,
      eto_id: id ? detailActivity?.eto_id : null,
      ni_level: id ? detailActivity?.ni_level : 0,
      ni_metal_equivalent: id ? detailActivity?.ni_metal_equivalent : 0,
      fe_level: id ? detailActivity?.fe_level : 0,
      fe_metal_equivalent: id ? detailActivity?.fe_metal_equivalent : 0,
      co_level: id ? detailActivity?.co_level : 0,
      co_metal_equivalent: id ? detailActivity?.co_metal_equivalent : 0,
      simgo_level: id ? detailActivity?.simgo_level : 0,
      simgo_metal_equivalent: id ? detailActivity?.simgo_metal_equivalent : 0,
      hill_origin: id ? detailActivity?.hill_origin : '',
      dome_origin: id ? detailActivity?.dome_origin : '',
      hill_destination: id ? detailActivity?.hill_destination : '',
      dome_destination: id ? detailActivity?.dome_destination : ''
    },
    validationSchema:
      activityType === 'ore-getting'
        ? OreGettingSchema
        : activityType === 'eto-to-efo'
        ? EtoToEfoSchema
        : OreHaulingToEtoSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue, values } = formik;

  const handleChangeNumber = (e, name) => {
    const _val = e.target.value.replace(/[^0-9.]/g, '');
    if (_val.split('.').length > 2) {
      const _doubleDot = _val.slice(0, -1);
      setFieldValue(name, _doubleDot);
    } else {
      setFieldValue(name, _val);
    }
  };

  useEffect(() => {
    if (id === undefined && !values?.activity_type && !values?.date) {
      navigate(-1);
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
                  alignItems="center"
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
                  <Grid item container lg={3} xs={4} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Block
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.block}
                    </Typography>
                  </Grid>
                </Grid>
                <Stack direction="column" spacing={3}>
                  <Stack>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jenis Pengukuran
                    </Typography>
                    <FormControl>
                      <TextField
                        select
                        placeholder="Pilih jenis kegiatan"
                        fullWidth
                        size="small"
                        name="measurement_type"
                        {...getFieldProps('measurement_type')}
                        error={Boolean(touched.measurement_type && errors.measurement_type)}
                        helperText={touched.measurement_type && errors.measurement_type}
                      >
                        {measurementType.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Stack>
                  {activityType === 'ore-hauling-to-eto' && (
                    <>
                      <Stack>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Nama Mitra
                        </Typography>
                        <FormControl>
                          <TextField
                            placeholder="Nama Mitra"
                            fullWidth
                            size="small"
                            name="partner"
                            {...getFieldProps('partner')}
                            error={Boolean(touched.partner && errors.partner)}
                            helperText={touched.partner && errors.partner}
                          />
                        </FormControl>
                      </Stack>
                    </>
                  )}
                  {activityType !== 'ore-getting' && (
                    <>
                      <Typography variant="h5" sx={{ mb: 3 }}>
                        Bukit Asal
                      </Typography>
                      <Stack>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Bukit Asal
                        </Typography>
                        <FormControl>
                          <TextField
                            select
                            placeholder="Pilih jenis kegiatan"
                            fullWidth
                            size="small"
                            name="hill_origin"
                            {...getFieldProps('hill_origin')}
                            error={Boolean(touched.hill_origin && errors.hill_origin)}
                            helperText={touched.hill_origin && errors.hill_origin}
                          >
                            {hillList.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </Stack>
                      <Stack>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Dome Asal
                        </Typography>
                        <FormControl>
                          <TextField
                            select
                            placeholder="Pilih jenis kegiatan"
                            fullWidth
                            size="small"
                            name="dome_origin"
                            {...getFieldProps('dome_origin')}
                            error={Boolean(touched.dome_origin && errors.dome_origin)}
                            helperText={touched.dome_origin && errors.dome_origin}
                          >
                            {hillList.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </Stack>
                    </>
                  )}
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Bukit Tujuan
                  </Typography>
                  <Stack>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Bukit Tujuan
                    </Typography>
                    <FormControl>
                      <TextField
                        select
                        placeholder="Pilih jenis kegiatan"
                        fullWidth
                        size="small"
                        name="hill_destination"
                        {...getFieldProps('hill_destination')}
                        error={Boolean(touched.hill_destination && errors.hill_destination)}
                        helperText={touched.hill_destination && errors.hill_destination}
                      >
                        {hillList.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Stack>
                  <Stack>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Dome Tujuan
                    </Typography>
                    <FormControl>
                      <TextField
                        select
                        placeholder="Pilih jenis kegiatan"
                        fullWidth
                        size="small"
                        {...getFieldProps('dome_destination')}
                        error={Boolean(touched.dome_destination && errors.dome_destination)}
                        helperText={touched.dome_destination && errors.dome_destination}
                      >
                        {hillList.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item lg={7} xs={12}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Jumlah Produksi
                </Typography>
                {activityType !== 'ore-hauling-to-eto' ? (
                  <>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid item container lg={6} xs={6} direction="column">
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Jumlah Sublot
                        </Typography>
                        <FormControl>
                          <TextField
                            placeholder="Jumlah Sublot"
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
                                    borderTopRightRadius: (theme) =>
                                      theme.shape.borderRadius + 'px',
                                    borderBottomRightRadius: (theme) =>
                                      theme.shape.borderRadius + 'px'
                                  }}
                                >
                                  Lot
                                </InputAdornment>
                              )
                            }}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item container lg={6} xs={6} direction="column">
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Jumlah Tonase
                        </Typography>
                        <FormControl>
                          <TextField
                            placeholder="Jumlah Tonase"
                            fullWidth
                            value={values.tonnage_total}
                            onChange={(e) => handleChangeNumber(e, 'tonnage_total')}
                            error={Boolean(touched.tonnage_total && errors.tonnage_total)}
                            helperText={touched.tonnage_total && errors.tonnage_total}
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
                                    borderTopRightRadius: (theme) =>
                                      theme.shape.borderRadius + 'px',
                                    borderBottomRightRadius: (theme) =>
                                      theme.shape.borderRadius + 'px'
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
                  </>
                ) : (
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item container lg={6} xs={6} direction="column">
                      <Typography variant="h6" sx={{ mb: 3 }}>
                        Jumlah Retase
                      </Typography>
                      <FormControl>
                        <TextField
                          placeholder="Jumlah Retase"
                          fullWidth
                          value={values.ritase_total}
                          onChange={(e) => handleChangeNumber(e, 'ritase_total')}
                          error={Boolean(touched.ritase_total && errors.ritase_total)}
                          helperText={touched.ritase_total && errors.ritase_total}
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
                                  borderBottomRightRadius: (theme) =>
                                    theme.shape.borderRadius + 'px'
                                }}
                              >
                                Retase
                              </InputAdornment>
                            )
                          }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item container lg={6} xs={6} direction="column">
                      <Typography variant="h6" sx={{ mb: 3 }}>
                        Jumlah Tonase
                      </Typography>
                      <FormControl>
                        <TextField
                          placeholder="Jumlah Retase"
                          fullWidth
                          value={values.tonnage_total}
                          onChange={(e) => handleChangeNumber(e, 'tonnage_total')}
                          error={Boolean(touched.tonnage_total && errors.tonnage_total)}
                          helperText={touched.tonnage_total && errors.tonnage_total}
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
                                  borderBottomRightRadius: (theme) =>
                                    theme.shape.borderRadius + 'px'
                                }}
                              >
                                Tonase
                              </InputAdornment>
                            )
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
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
                        onChange={(e) => handleChangeNumber(e, 'ni_level')}
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
                        onChange={(e) => handleChangeNumber(e, 'ni_metal_equivalent')}
                        error={Boolean(touched.ni_metal_equivalent && errors.ni_metal_equivalent)}
                        helperText={touched.ni_metal_equivalent && errors.ni_metal_equivalent}
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
                        onChange={(e) => handleChangeNumber(e, 'fe_level')}
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
                        onChange={(e) => handleChangeNumber(e, 'fe_metal_equivalent')}
                        error={Boolean(touched.fe_metal_equivalent && errors.fe_metal_equivalent)}
                        helperText={touched.fe_metal_equivalent && errors.fe_metal_equivalent}
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
                        onChange={(e) => handleChangeNumber(e, 'co_level')}
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
                        value={values.fe_metal_equivalent}
                        onChange={(e) => handleChangeNumber(e, 'fe_metal_equivalent')}
                        error={Boolean(touched.fe_metal_equivalent && errors.fe_metal_equivalent)}
                        helperText={touched.fe_metal_equivalent && errors.fe_metal_equivalent}
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
                        onChange={(e) => handleChangeNumber(e, 'simgo_level')}
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
                        onChange={(e) => handleChangeNumber(e, 'simgo_metal_equivalent')}
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
            <Footer handleBack={() => navigate(-1)} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}

FormMiningCard.propTypes = {
  prevState: PropTypes.object.isRequired
};
