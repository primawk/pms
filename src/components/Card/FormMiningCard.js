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
import { toast } from 'react-toastify';

// custom hooks
import useLoading from 'hooks/useLoading';

// components
import Footer from 'components/Footer';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';
import InventoryService from 'services/InventoryService';

const measurementType = ['Sumlot SM', 'Dump Truck', 'Timbangan'];

export default function FormMiningCard() {
  const { activityType, id } = useParams();
  const navigate = useNavigate();
  const prevState = useLocation().state;

  const { isLoadingAction, toggleLoading } = useLoading();

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
    co_metal_equivalent: Yup.number().required('Co equivalent is required'),
    simgo_level: Yup.number().required('Simgo level is required'),
    simgo_metal_equivalent: Yup.number().required('Simgo equivalent is required'),
    hill_id: Yup.string().required('Hill destination is required').nullable()
  });

  const OreHaulingToEtoSchema = Yup.object().shape({
    measurement_type: Yup.string().required('Measurement type is required'),
    partner: Yup.string().required('Partner is required').nullable(),
    ritase_total: Yup.number().required('Retase total is required'),
    tonnage_total: Yup.number().required('Tonnage total is required'),
    ni_level: Yup.number().required('Ni level is required'),
    ni_metal_equivalent: Yup.number().required('Ni equivalent is required'),
    fe_level: Yup.number().required('Fe level is required'),
    fe_metal_equivalent: Yup.number().required('Fe equivalent is required'),
    co_level: Yup.number().required('Co level is required'),
    co_metal_equivalent: Yup.number().required('Co equivalent is required'),
    simgo_level: Yup.number().required('Simgo level is required'),
    simgo_metal_equivalent: Yup.number().required('Simgo equivalent is required'),
    hill_origin_id: Yup.string().required('Hill origin is required').nullable(),
    hill_id: Yup.string().required('Dome destination is required').nullable(),
    dome_id: Yup.string().required('Dome destination is required').nullable()
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
    co_metal_equivalent: Yup.number().required('Co equivalent is required'),
    simgo_level: Yup.number().required('Simgo level is required'),
    simgo_metal_equivalent: Yup.number().required('Simgo equivalent is required'),
    hill_origin_id: Yup.string().required('Hill origin is required').nullable(),
    dome_origin_id: Yup.string().required('Dome origin is required').nullable(),
    dome_id: Yup.string().required('Dome destination is required').nullable()
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      activity_type: id ? detailActivity?.activity_type : prevState?.activity_type,
      activity_code: id ? detailActivity?.activity_code : null,
      date: id ? detailActivity?.date : prevState?.date,
      time: id ? detailActivity?.time : prevState?.time,
      product_type: id ? detailActivity?.product_type : prevState?.product_type,
      block: id ? detailActivity?.block : prevState?.block,
      measurement_type: id ? detailActivity?.measurement_type : '',
      hill_id: id ? detailActivity?.hill_id : null,
      dome_id: id ? detailActivity?.dome_id : null,
      partner: id ? detailActivity?.partner : null,
      sublot_total: id ? parseFloat(detailActivity?.sublot_total) : 0,
      tonnage_total: id ? parseFloat(detailActivity?.tonnage_total) : 0,
      ritase_total: id ? parseFloat(detailActivity?.ritase_total) : 0,
      eto_id: id ? detailActivity?.eto_id : null,
      ni_level: id ? parseFloat(detailActivity?.ni_level) : 0,
      ni_metal_equivalent: id ? parseFloat(detailActivity?.ni_metal_equivalent) : 0,
      fe_level: id ? parseFloat(detailActivity?.fe_level) : 0,
      fe_metal_equivalent: id ? parseFloat(detailActivity?.fe_metal_equivalent) : 0,
      co_level: id ? parseFloat(detailActivity?.co_level) : 0,
      co_metal_equivalent: id ? parseFloat(detailActivity?.co_metal_equivalent) : 0,
      simgo_level: id ? parseFloat(detailActivity?.simgo_level) : 0,
      simgo_metal_equivalent: id ? parseFloat(detailActivity?.simgo_metal_equivalent) : 0,
      hill_origin_id: id ? detailActivity?.hill_origin_id : null,
      dome_origin_id: id ? detailActivity?.dome_origin_id : null
    },
    validationSchema:
      activityType === 'ore-getting'
        ? OreGettingSchema
        : activityType === 'eto-to-efo'
        ? EtoToEfoSchema
        : OreHaulingToEtoSchema,
    onSubmit: (values) => {
      toggleLoading(true);
      if (id) {
        MiningActivityService.editActivity(values, id)
          .then(() => {
            toggleLoading(false);
            toast.success('Data berhasil diubah!');
            toast.clearWaitingQueue();
            navigate(-1);
          })
          .catch((err) => {
            toast.error(
              err?.response?.data?.detail_message?.message || err?.response?.data?.message
            );
            toggleLoading(false);
            toast.clearWaitingQueue();
          });
      } else {
        MiningActivityService.createActivity(values)
          .then(() => {
            toggleLoading(false);
            toast.success('Data berhasil ditambahkan !');
            toast.clearWaitingQueue();
            navigate(-1);
          })
          .catch((err) => {
            toggleLoading(false);
            toast.error(
              err?.response?.data?.detail_message?.message || err?.response?.data?.message
            );
            toast.clearWaitingQueue();
          });
      }
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
    }
  }, []);

  const originInventoryType =
    activityType === 'ore-getting'
      ? 'undefined'
      : activityType === 'ore-hauling-to-eto'
      ? 'inventory-sm'
      : 'inventory-eto';

  const destinationInventoryType =
    activityType === 'ore-getting'
      ? 'inventory-sm'
      : activityType === 'ore-hauling-to-eto'
      ? 'inventory-eto'
      : 'inventory-efo';

  const { data: dataHillOrigin, isFetching: isFetchingHillOrigin } = useQuery(
    ['inventory', 'hill', 'origin', originInventoryType],
    () => InventoryService.getHill({ inventory_type: originInventoryType }),
    { keepPreviousData: true }
  );

  const { data: dataDomeOrigin, isFetching: isFetchingDomeOrigin } = useQuery(
    ['inventory', 'dome', 'origin', originInventoryType],
    () => InventoryService.getDome({ inventory_type: originInventoryType }),
    { keepPreviousData: true }
  );

  const domeOrigin = dataDomeOrigin?.data?.data?.filter(
    (_data) => _data?.id === values?.hill_origin_id
  );

  const { data: dataHillDestination, isFetching: isFetchingHillDestination } = useQuery(
    ['inventory', 'hill', 'destination', destinationInventoryType],
    () => InventoryService.getHill({ inventory_type: destinationInventoryType }),
    { keepPreviousData: true }
  );

  const { data: dataDomeDestination, isFetching: isFetchingDomeDestination } = useQuery(
    ['inventory', 'dome', 'destination', destinationInventoryType],
    () => InventoryService.getDome({ inventory_type: destinationInventoryType }),
    { keepPreviousData: true }
  );

  const domeDestination = dataDomeDestination?.data?.data?.filter(
    (_data) => _data?.id === values?.hill_id
  );

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
      {isFetching &&
        isFetchingDomeDestination &&
        isFetchingDomeOrigin &&
        isFetchingHillDestination &&
        isFetchingHillOrigin && <LoadingModal />}
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
                  {id ? (
                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                      <Grid item container lg={6} xs={6} direction="column">
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Jenis Pengukuran
                        </Typography>
                        <Typography variant="body1">{detailActivity?.measurement_type}</Typography>
                      </Grid>
                      {activityType === 'ore-hauling-to-eto' && (
                        <Grid item container lg={6} xs={6} direction="column">
                          <Typography variant="h6" sx={{ mb: 3 }}>
                            Nama Mitra
                          </Typography>
                          <Typography variant="body1">{detailActivity?.partner}</Typography>
                        </Grid>
                      )}
                    </Grid>
                  ) : (
                    <>
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
                    </>
                  )}
                  {id ? (
                    <>
                      {activityType !== 'ore-getting' && (
                        <>
                          <Typography variant="h5" sx={{ mb: 3 }}>
                            Bukit Asal
                          </Typography>
                          <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                          >
                            <Grid item container lg={6} xs={6} direction="column">
                              <Typography variant="h6" sx={{ mb: 3 }}>
                                Bukit Asal
                              </Typography>
                              <Typography variant="body1">
                                {detailActivity?.hill_origin_name || ''}
                              </Typography>
                            </Grid>
                            {activityType === 'eto-to-efo' && (
                              <Grid item container lg={6} xs={6} direction="column">
                                <Typography variant="h6" sx={{ mb: 3 }}>
                                  Dome Asal
                                </Typography>
                                <Typography variant="body1">
                                  {detailActivity?.dome_origin_name}
                                </Typography>
                              </Grid>
                            )}
                          </Grid>
                        </>
                      )}
                      <Typography variant="h5" sx={{ mb: 3 }}>
                        Bukit Tujuan
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                      >
                        {activityType !== 'eto-to-efo' && (
                          <Grid item container lg={6} xs={6} direction="column">
                            <Typography variant="h6" sx={{ mb: 3 }}>
                              Bukit Tujuan
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                              {detailActivity?.hill_name || ''}
                            </Typography>
                          </Grid>
                        )}

                        {activityType !== 'ore-getting' && (
                          <Grid item container lg={6} xs={6} direction="column">
                            <Typography variant="h6" sx={{ mb: 3 }}>
                              Dome Tujuan
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                              {detailActivity?.dome_name || ''}
                            </Typography>
                          </Grid>
                        )}
                      </Grid>
                    </>
                  ) : (
                    <>
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
                                name="hill_origin_id"
                                {...getFieldProps('hill_origin_id')}
                                error={Boolean(touched.hill_origin_id && errors.hill_origin_id)}
                                helperText={touched.hill_origin_id && errors.hill_origin_id}
                              >
                                {activityType === 'ore-hauling-to-eto'
                                  ? dataHillOrigin?.data?.data?.map((option) => (
                                      <MenuItem key={option} value={option?.id}>
                                        {option?.name}
                                      </MenuItem>
                                    ))
                                  : dataDomeOrigin?.data?.data?.map((option) => (
                                      <MenuItem key={option} value={option?.id}>
                                        {option?.name}
                                      </MenuItem>
                                    ))}
                              </TextField>
                            </FormControl>
                          </Stack>
                        </>
                      )}
                      {activityType === 'eto-to-efo' && (
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
                              name="dome_origin_id"
                              {...getFieldProps('dome_origin_id')}
                              error={Boolean(touched.dome_origin_id && errors.dome_origin_id)}
                              helperText={touched.dome_origin_id && errors.dome_origin_id}
                            >
                              {activityType !== 'eto-to-efo'
                                ? dataDomeOrigin?.data?.data?.map((option) => (
                                    <MenuItem key={option} value={option?.id}>
                                      {option?.name}
                                    </MenuItem>
                                  ))
                                : domeOrigin?.[0]?.dome_list?.map((option) => (
                                    <MenuItem key={option} value={option?.dome_id}>
                                      {option?.dome_name}
                                    </MenuItem>
                                  ))}
                            </TextField>
                          </FormControl>
                        </Stack>
                      )}
                      <Typography variant="h5" sx={{ mb: 3 }}>
                        Bukit Tujuan
                      </Typography>
                      {activityType !== 'eto-to-efo' && (
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
                              name="hill_id"
                              {...getFieldProps('hill_id')}
                              error={Boolean(touched.hill_id && errors.hill_id)}
                              helperText={touched.hill_id && errors.hill_id}
                            >
                              {activityType === 'ore-getting'
                                ? dataHillDestination?.data?.data?.map((option) => (
                                    <MenuItem key={option} value={option?.id}>
                                      {option?.name}
                                    </MenuItem>
                                  ))
                                : dataDomeDestination?.data?.data?.map((option) => (
                                    <MenuItem key={option} value={option?.id}>
                                      {option?.name}
                                    </MenuItem>
                                  ))}
                            </TextField>
                          </FormControl>
                        </Stack>
                      )}
                      {activityType !== 'ore-getting' && (
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
                              {...getFieldProps('dome_id')}
                              error={Boolean(touched.dome_id && errors.dome_id)}
                              helperText={touched.dome_id && errors.dome_id}
                            >
                              {activityType === 'eto-to-efo'
                                ? dataDomeDestination?.data?.data?.map((option) => (
                                    <MenuItem key={option} value={option?.id}>
                                      {option?.name}
                                    </MenuItem>
                                  ))
                                : domeDestination?.[0]?.dome_list?.map((option) => (
                                    <MenuItem key={option} value={option?.dome_id}>
                                      {option?.dome_name}
                                    </MenuItem>
                                  ))}
                            </TextField>
                          </FormControl>
                        </Stack>
                      )}
                    </>
                  )}
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
                            onChange={(e) => {
                              handleChangeNumber(e, 'tonnage_total');
                            }}
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
            <Footer handleBack={() => navigate(-1)} loading={isLoadingAction} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}

FormMiningCard.propTypes = {
  prevState: PropTypes.object.isRequired
};
