/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Grid, InputAdornment, TextField, FormControl } from '@mui/material';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';

// service
import MiningActivityService from 'services/MiningActivityService';

// custom hooks and context\
import useAuth from 'hooks/useAuth';
import useLoading from 'hooks/useLoading';
import { useShipmentContext } from 'context/ShipmentContext';

// components
import Footer from 'components/Footer';
import CustomDropzone from './CustomDropzone';

export default function ThirdStep() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoadingAction, toggleLoading } = useLoading();
  const { handleBack, value, setStep, setValue } = useShipmentContext();
  const { roleName } = useAuth();

  // shipment schema
  const ShipmentSchema = Yup.object().shape({});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: value,
    validationSchema: ShipmentSchema,
    onSubmit: (values) => {
      toggleLoading(true);
      if (id) {
        Object.keys(values?.file_change).forEach(() => {
          MiningActivityService.deleteShipmentFiles(id, values?.file_change);
        });
        MiningActivityService.editShipment(values, id)
          .then(() => {
            toggleLoading(false);
            toast.success('Data berhasil diedit!');
            toast.clearWaitingQueue();
            setStep(1);
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
        MiningActivityService.createShipment(values)
          .then(() => {
            toggleLoading(false);
            toast.success('Data berhasil ditambahkan!');
            toast.clearWaitingQueue();
            setStep(1);
            navigate(-1);
            setValue({});
          })
          .catch((err) => {
            toast.error(
              err?.response?.data?.detail_message?.message || err?.response?.data?.message
            );
            toggleLoading(false);
            toast.clearWaitingQueue();
          });
      }
    }
  });

  const { errors, touched, handleSubmit, setFieldValue, values } = formik;

  const handleChangeNumber = (val, name) => setFieldValue(name, val);

  const handleChangeImage = (e, name) => {
    setFieldValue(name, [...values[name], ...e.target?.files]);
  };

  const handleRemoveImage = (e, index, name) => {
    e.preventDefault();
    e.stopPropagation();
    const _value = [...values[name]];
    if (typeof _value[index] === 'string') {
      const _oldFileChange = values?.file_change;
      if (values?.file_change[name]?.length > 0) {
        _oldFileChange[name].push(values[name][index]);
      } else {
        _oldFileChange[name] = [values[name][index]];
        setFieldValue('file_change', _oldFileChange);
      }
    }
    _value.splice(index, 1);
    setFieldValue(name, [..._value]);
  };

  const handleOnDrop = (value, name) => {
    setFieldValue(name, [...values[name], ...value]);
  };

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
                      {values?.pbm_name || '-'}
                    </Typography>
                  </Grid>
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nama Pembeli
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {values?.buyer_name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                  COA MUAT
                </Typography>
                {(roleName === 'komisaris' || roleName === 'superadmin') && (
                  <CustomDropzone
                    name="coa_muat"
                    value={values?.coa_muat}
                    handleOnDrop={handleOnDrop}
                    onChange={(e) => handleChangeImage(e, 'coa_muat')}
                    onRemove={handleRemoveImage}
                  />
                )}
                <p>*Dokumen ini hanya bisa diupload oleh direktur utama/direktur keuangan</p>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                  COA BONGKAR
                </Typography>
                {(roleName === 'komisaris' || roleName === 'superadmin') && (
                  <CustomDropzone
                    name="coa_bongkar"
                    value={values?.coa_bongkar}
                    handleOnDrop={handleOnDrop}
                    onChange={(e) => handleChangeImage(e, 'coa_bongkar')}
                    onRemove={handleRemoveImage}
                  />
                )}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Jumlah Tonase"
                        fullWidth
                        value={values?.muat_tonnage_total}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'muat_tonnage_total')
                        }
                        error={Boolean(touched.muat_tonnage_total && errors.muat_tonnage_total)}
                        helperText={touched.muat_tonnage_total && errors.muat_tonnage_total}
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
                              Tonase
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Jumlah Tonase"
                        fullWidth
                        value={values?.bongkar_tonnage_total}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'bongkar_tonnage_total')
                        }
                        error={Boolean(
                          touched.bongkar_tonnage_total && errors.bongkar_tonnage_total
                        )}
                        helperText={touched.bongkar_tonnage_total && errors.bongkar_tonnage_total}
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
                              Tonase
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Kadar NI"
                        fullWidth
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'muat_ni_level')
                        }
                        value={values.muat_ni_level}
                        error={Boolean(touched.muat_ni_level && errors.muat_ni_level)}
                        helperText={touched.muat_ni_level && errors.muat_ni_level}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Kadar NI"
                        fullWidth
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'bongkar_ni_level')
                        }
                        value={values.bongkar_ni_level}
                        error={Boolean(touched.bongkar_ni_level && errors.bongkar_ni_level)}
                        helperText={touched.bongkar_ni_level && errors.bongkar_ni_level}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values.muat_fe_level}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'muat_fe_level')
                        }
                        error={Boolean(touched.muat_fe_level && errors.muat_fe_level)}
                        helperText={touched.muat_fe_level && errors.muat_fe_level}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values.bongkar_fe_level}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'bongkar_fe_level')
                        }
                        error={Boolean(touched.bongkar_fe_level && errors.bongkar_fe_level)}
                        helperText={touched.bongkar_fe_level && errors.bongkar_fe_level}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values?.muat_co_level}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'muat_co_level')
                        }
                        error={Boolean(touched.muat_co_level && errors.muat_co_level)}
                        helperText={touched.muat_co_level && errors.muat_co_level}
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
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        valueIsNumericString
                        customInput={TextField}
                        placeholder="Nilai Kadar"
                        fullWidth
                        value={values?.bongkar_co_level}
                        onValueChange={(values) =>
                          handleChangeNumber(values?.value, 'bongkar_co_level')
                        }
                        error={Boolean(touched.bongkar_co_level && errors.bongkar_co_level)}
                        helperText={touched.bongkar_co_level && errors.bongkar_co_level}
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
            <Footer handleBack={() => handleBack(values)} loading={isLoadingAction} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}
