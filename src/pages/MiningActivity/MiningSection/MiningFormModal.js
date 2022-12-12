import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, TextField, MenuItem, Stack, FormControl, Button } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// components
import { CustomModal } from 'components/Modal';

const miningActivityList = [
  {
    label: 'Ore Getting',
    value: 'ore-getting'
  },
  {
    label: 'Ore Hauling Front To ETO',
    value: 'ore-hauling-to-eto'
  },
  {
    label: 'Ore Hauling ETO TO EFO',
    value: 'eto-to-efo'
  }
];

const productList = ['Bijih Nikel Saprolit', 'Bijih Nikel Limonite'];

const blockList = ['Utara', 'Selatan'];

export default function MiningFormModal({ isShowing, toggle }) {
  const { activityType } = useParams();
  const navigate = useNavigate();
  const isShipment = activityType === 'efo-to-shipment';

  const today = new Date();

  const MiningFormSchema = Yup.object().shape({
    activity_type: Yup.string().required('Activity Type is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    product_type: Yup.string().required('Product Type is required'),
    block: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      activity_type: '',
      date: today,
      time: today,
      product_type: '',
      block: 'Utara'
    },
    validationSchema: MiningFormSchema,
    onSubmit: (values) => {
      if (values?.activity_type === 'tambang') {
        navigate(isShipment ? `/shipment/add` : `/mining-tool/add`, {
          state: {
            activity_type: values?.activity_type,
            date: dayjs(values?.date).format('YYYY-MM-DD'),
            time: dayjs(values?.time).format('HH:mm'),
            product_type: values?.product_type,
            block: values?.block
          }
        });
      } else {
        navigate(
          isShipment
            ? `/shipment/${values?.activity_type}/add`
            : `/mining-activity/${values?.activity_type}/add`,
          {
            state: {
              activity_type: values?.activity_type,
              date: dayjs(values?.date).format('YYYY-MM-DD'),
              time: dayjs(values?.time).format('HH:mm'),
              product_type: values?.product_type,
              block: values?.block
            }
          }
        );
      }
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue, values, resetForm } = formik;

  useEffect(() => {
    resetForm();
    setFieldValue('activity_type', activityType || 'tambang');
  }, [activityType, resetForm, setFieldValue]);

  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="40%">
      <center>
        <h2 style={{ marginBottom: '20px' }}>
          {values?.activity_type === 'efo-to-shipment'
            ? 'Input Realisasi Kegiatan Pemasaran'
            : values?.activity_type === 'tambang'
            ? 'Input Laporan Penggunaan Alat Tambang'
            : 'Input Realisasi Kegiatan Produksi Mineral'}
        </h2>
      </center>
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container direction="column" justifyContent="center" alignItems="flex-start">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Stack spacing={2}>
                {values?.activity_type !== 'tambang' && (
                  <FormControl>
                    <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Jenis Kegiatan</h4>
                    <TextField
                      select
                      placeholder="Pilih jenis kegiatan"
                      fullWidth
                      size="small"
                      name="activity_type"
                      {...getFieldProps('activity_type')}
                      error={Boolean(touched.activity_type && errors.activity_type)}
                      helperText={touched.activity_type && errors.activity_type}
                    >
                      {isShipment ? (
                        <MenuItem value="efo-to-shipment">Pemasaran</MenuItem>
                      ) : (
                        miningActivityList.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      )}
                    </TextField>
                  </FormControl>
                )}
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Grid item lg={6} sx={{ pr: 2 }}>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Tanggal Kegiatan</h4>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={values?.date}
                          onChange={(val) => {
                            setFieldValue('date', val);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              size="small"
                              error={Boolean(touched.date && errors.date)}
                              helperText={touched.date && errors.date}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                  <Grid item lg={6}>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>
                        Waktu Kegiatan Dimulai
                      </h4>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          ampm={false}
                          value={values?.time}
                          onChange={(val) => {
                            setFieldValue('time', val);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              size="small"
                              error={Boolean(touched.time && errors.time)}
                              helperText={touched.time && errors.time}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControl>
                  <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Jenis Produk</h4>
                  <TextField
                    select
                    placeholder="Pilih jenis produk"
                    fullWidth
                    size="small"
                    name="product_type"
                    {...getFieldProps('product_type')}
                    error={Boolean(touched.product_type && errors.product_type)}
                    helperText={touched.product_type && errors.product_type}
                  >
                    {productList.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
                {values?.activity_type !== 'shipment' && (
                  <FormControl>
                    <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Block</h4>
                    <TextField
                      select
                      placeholder="Pilih jenis kegiatan"
                      fullWidth
                      size="small"
                      name="block"
                      {...getFieldProps('block')}
                      error={Boolean(touched.block && errors.block)}
                      helperText={touched.block && errors.block}
                    >
                      {blockList.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                )}
              </Stack>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={5}>
            <Grid item lg={6} md={12} sm={12} xs={12} sx={{ marginTop: '25px' }}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" fullWidth onClick={toggle}>
                  Cancel
                </Button>
                <Button variant="contained" fullWidth type="submit">
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </CustomModal>
  );
}

MiningFormModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
