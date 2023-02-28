/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Typography,
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Stack,
  InputAdornment,
  Chip,
  Autocomplete,
  Select
} from '@mui/material';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { NumericFormat } from 'react-number-format';

// services
import MiningActivityService from 'services/MiningActivityService';
import InventoryService from 'services/InventoryService';

// custom hooks with context
import { useShipmentContext } from 'context/ShipmentContext';

// components
import Footer from 'components/Footer';

export default function FirstStep() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleContinue, value } = useShipmentContext();

  const [selectedDome, setSelectedDome] = useState([]);

  // shipment schema
  const ShipmentSchema = Yup.object().shape({});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: value,
    validationSchema: ShipmentSchema,
    onSubmit: (values) => {
      handleContinue(values);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue, values } = formik;

  const { data: dataProvince } = useQuery(['province'], () => MiningActivityService.getProvince(), {
    keepPreviousData: true
  });

  const listProvince = dataProvince?.data?.data;

  const idProvince = listProvince?.find((item) => item?.wilayah === values?.dest_loc_prov)?.id;

  const { data: dataRegency } = useQuery(
    ['regency', idProvince],
    () => MiningActivityService.getRegency({ id_provinsi: idProvince }),
    {
      keepPreviousData: true,
      enabled: !!idProvince
    }
  );
  const listRegency = values?.dest_loc_prov ? dataRegency?.data?.data : [];

  const onlyTime = values?.time?.split(':');

  const valueTime = dayjs(new Date()).set('hour', onlyTime?.[0]).set('minute', onlyTime?.[1]);

  const { data: dataDome } = useQuery(
    ['inventory', 'inventory-efo'],
    () =>
      InventoryService.getDome({
        inventory_type: 'inventory-efo'
      }),
    { keepPreviousData: true }
  );

  const listDome = dataDome?.data?.data;

  const totalTonnage =
    values?.tonnage_total?.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0) || 0;

  const handleChangeNumber = (value, level, equivalent) => {
    if (value <= 100) {
      const _equivalent = (value / 100) * totalTonnage;
      setFieldValue(level, value);
      setFieldValue(equivalent, _equivalent);
    }
  };

  useEffect(() => {
    if (value?.dome_origin_id?.length === 0) {
      setSelectedDome([]);
    } else {
      const oldValue = selectedDome;
      value?.dome_origin_id?.forEach((item, i) => {
        oldValue[i] = {
          ...listDome?.find((_item) => _item?.id?.toString() === item?.toString()),
          tonnage_totals: value?.tonnage_total?.[i] || null
        };
      });
      setSelectedDome(oldValue);
    }
  }, [listDome, value, location?.pathname]);

  useEffect(() => {
    if (selectedDome?.length > 0) {
      setFieldValue(
        'tonnage_total',
        selectedDome?.map((item) => item?.tonnage_totals)
      );
    } else {
      setFieldValue('tonnage_total', []);
    }
  }, [selectedDome]);

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
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Tanggal Kegiatan
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={values?.date}
                        onChange={(val) => {
                          setFieldValue('date', dayjs(val).format('YYYY-MM-DD'));
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
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Waktu Kegiatan Dimulai
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        ampm={false}
                        value={valueTime}
                        onChange={(val) => {
                          setFieldValue('time', dayjs(val).format('HH:mm'));
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
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jenis Produk
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.product_type}
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Block
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.block}
                    </Typography>
                  </Grid>
                </Grid>
                <Stack direction="column" spacing={3}>
                  <Typography variant="h6">Nomor Urut Pengapalan</Typography>
                  <FormControl>
                    <TextField
                      fullWidth
                      size="small"
                      name="shipment_number"
                      {...getFieldProps('shipment_number')}
                      error={Boolean(touched?.shipment_number && errors?.shipment_number)}
                      helperText={touched?.shipment_number && errors?.shipment_number}
                    />
                  </FormControl>
                  <Typography variant="h6">Jenis Pemasaran</Typography>
                  <FormControl>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      SelectProps={{
                        displayEmpty: true
                      }}
                      name="shipment_type"
                      {...getFieldProps('shipment_type')}
                      error={Boolean(touched?.shipment_type && errors?.shipment_type)}
                      helperText={touched?.shipment_type && errors?.shipment_type}
                    >
                      <MenuItem value="">Pilih Jenis Pemasaran</MenuItem>
                      <MenuItem value="Ekspor">Ekspor</MenuItem>
                      <MenuItem value="Domestik">Domestik</MenuItem>
                    </TextField>
                  </FormControl>
                  <Typography variant="h6">Jenis Penjualan</Typography>
                  <FormControl>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      SelectProps={{
                        displayEmpty: true
                      }}
                      name="sales_type"
                      {...getFieldProps('sales_type')}
                      error={Boolean(touched?.sales_type && errors?.sales_type)}
                      helperText={touched?.sales_type && errors?.sales_type}
                    >
                      <MenuItem value="">Pilih Jenis Penjualan</MenuItem>
                      <MenuItem value="Cost Insurance Freight Barge">
                        Cost Insurance Freight Barge
                      </MenuItem>
                      <MenuItem value="Cost Insurance Freight Vessel">
                        Cost Insurance Freight Vessel
                      </MenuItem>
                      <MenuItem value="FOB Barge">FOB Barge</MenuItem>
                      <MenuItem value="FOB Vessel">FOB Vessel</MenuItem>
                      <MenuItem value="Satu Pulau Angkutan Darat">
                        Satu Pulau Angkutan Darat
                      </MenuItem>
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
                  name="pbm_name"
                  {...getFieldProps('pbm_name')}
                  error={Boolean(touched?.pbm_name && errors?.pbm_name)}
                  helperText={touched?.pbm_name && errors?.pbm_name}
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
                        name="buyer_name"
                        {...getFieldProps('buyer_name')}
                        error={Boolean(touched?.buyer_name && errors?.buyer_name)}
                        helperText={touched?.buyer_name && errors?.buyer_name}
                      />
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Lokasi Titik Serah (Provinsi)
                    </Typography>
                    <FormControl>
                      <Select
                        name="dest_loc_prov"
                        value={values?.dest_loc_prov}
                        onChange={(e) => {
                          setFieldValue('dest_loc_prov', e.target.value);
                          setFieldValue('dest_loc_city', '');
                        }}
                        size="small"
                        displayEmpty
                        fullWidth
                      >
                        <MenuItem value={null}>Provinsi</MenuItem>
                        {listProvince?.map((_prov, i) => (
                          <MenuItem value={_prov?.wilayah}>{_prov?.wilayah}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Nama Jenis Pengiriman
                    </Typography>
                    <FormControl>
                      <TextField
                        select
                        fullWidth
                        size="small"
                        SelectProps={{
                          displayEmpty: true
                        }}
                        name="shipping_type"
                        {...getFieldProps('shipping_type')}
                        error={Boolean(touched?.shipping_type && errors?.shipping_type)}
                        helperText={touched?.shipping_type && errors?.shipping_type}
                      >
                        <MenuItem value="">Pilih Jenis Pengiriman</MenuItem>
                        <MenuItem value="Tongkang">Tongkang</MenuItem>
                        <MenuItem value="Truk">Truk</MenuItem>
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
                        name="dest_loc"
                        {...getFieldProps('dest_loc')}
                        error={Boolean(touched?.dest_loc && errors?.dest_loc)}
                        helperText={touched?.dest_loc && errors?.dest_loc}
                      />
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Lokasi Titik Serah (Kabupaten/Kota)
                    </Typography>
                    <FormControl>
                      <Select
                        name="dest_loc_city"
                        value={values?.dest_loc_city}
                        onChange={(e) => setFieldValue('dest_loc_city', e.target.value)}
                        size="small"
                        displayEmpty
                        fullWidth
                      >
                        <MenuItem value={null}>Kab/Kota</MenuItem>
                        {listRegency?.map((_reg, i) => (
                          <MenuItem value={_reg?.wilayah}>{_reg?.wilayah}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                      Nama Alat Pengiriman
                    </Typography>
                    <FormControl>
                      <TextField
                        placeholder="Tuliskan Alat Pengiriman"
                        fullWidth
                        size="small"
                        name="shipping_name"
                        {...getFieldProps('shipping_name')}
                        error={Boolean(touched?.shipping_name && errors?.shipping_name)}
                        helperText={touched?.shipping_name && errors?.shipping_name}
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
                  alignItems="flex-start"
                  spacing={3}
                >
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Asal Tumpukan EFO
                    </Typography>
                    <FormControl>
                      <Autocomplete
                        multiple
                        size="small"
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        options={listDome || []}
                        getOptionLabel={(option) => option.name}
                        value={selectedDome}
                        onChange={(e, val) => {
                          setSelectedDome(val);
                          setFieldValue(
                            'dome_origin_id',
                            val?.map((item) => item?.id)
                          );
                        }}
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option?.name}
                              size="small"
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => <TextField size="small" {...params} />}
                      />
                    </FormControl>
                    <Typography variant="h6" sx={{ mb: 3, mt: 2 }}>
                      Volume Pengiriman
                    </Typography>
                    <Typography variant="p" sx={{ mb: 3 }}>
                      {totalTonnage?.toLocaleString() || '0'} Ton
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    {selectedDome?.map((item, i) => (
                      <>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Volume Pengiriman {item?.name}
                        </Typography>
                        <FormControl>
                          <NumericFormat
                            required
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            valueIsNumericString
                            customInput={TextField}
                            placeholder="Volume Pengiriman"
                            fullWidth
                            onValueChange={(_values) => {
                              const newValue = [...selectedDome];
                              newValue[i]['tonnage_totals'] = _values?.value;
                              setSelectedDome(newValue);
                            }}
                            value={selectedDome?.[i]?.tonnage_totals}
                            error={
                              selectedDome?.[0]?.tonnage_totals &&
                              selectedDome?.[i]?.tonnage_totals < 0
                            }
                            helperText={
                              selectedDome?.[0]?.tonnage_totals &&
                              selectedDome?.[i]?.tonnage_totals < 0 &&
                              'Volume cannot empty'
                            }
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
                      </>
                    ))}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Kadar NI"
                        fullWidth
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'ni_level', 'ni_metal_equivalent')
                        }
                        value={values.ni_level}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values.fe_level}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'fe_level', 'fe_metal_equivalent')
                        }
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Kadar NI"
                        fullWidth
                        value={values?.co_level}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'co_level', 'co_metal_equivalent')
                        }
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
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
              </Grid>
            </Grid>
            <Footer handleBack={() => navigate(-1)} step={1} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}
