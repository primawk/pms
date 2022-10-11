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
  Button
} from '@mui/material';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider, FieldArray } from 'formik';

// custom hooks
import useLoading from 'hooks/useLoading';

// components
import Footer from 'components/Footer';

// services

export default function FormMiningToolCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prevState = useLocation().state;

  const { isLoadingAction, toggleLoading } = useLoading();

  const MiningToolSchema = Yup.object().shape({
    datas: Yup.array().of(Yup.object().shape({}))
  });

  const initialValues = {
    activity_type: id ? '' : prevState?.activity_type,
    activity_code: id ? '' : null,
    date: id ? '' : prevState?.date,
    time: id ? '' : prevState?.time,
    product_type: id ? '' : prevState?.product_type,
    block: id ? '' : prevState?.block
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { datas: [{ ...initialValues, test: '' }] },
    validationSchema: MiningToolSchema,
    onSubmit: (values) => {
      toggleLoading(true);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue, values } = formik;

  useEffect(() => {
    if (id === undefined && !values?.datas?.[0]?.activity_type && !values?.datas?.[0]?.date) {
      navigate(-1);
      navigate(0);
    }
  }, []);

  console.log(values);

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
            <FieldArray
              name="datas"
              render={(arrayHelpers) => (
                <>
                  {values.datas && values.datas.length > 0 ? (
                    values.datas.map((_datas, index) => (
                      <>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          sx={{ mb: 3 }}
                          spacing={5}
                          key={index}
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
                                  {`${
                                    values &&
                                    dayjs(values?.datas?.[index]?.date).format('DD MMMM YYYY')
                                  }, ${values && values?.datas?.[index]?.time}`}
                                </Typography>
                              </Grid>
                              <Grid item container lg={4.5} xs={4.5} direction="column">
                                <Typography variant="h6" sx={{ mb: 3 }}>
                                  Jenis Produk
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3 }}>
                                  {values?.datas?.[index]?.product_type}
                                </Typography>
                              </Grid>
                              <Grid item container lg={3} xs={4} direction="column">
                                <Typography variant="h6" sx={{ mb: 3 }}>
                                  Block
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3 }}>
                                  {values?.datas?.[index]?.block}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Stack direction="column" spacing={3}>
                              <Typography variant="h6">Bukit</Typography>
                              <FormControl>
                                <TextField
                                  select
                                  fullWidth
                                  size="small"
                                  SelectProps={{
                                    displayEmpty: true
                                  }}
                                  name=""
                                  // {...getFieldProps('measurement_type')}
                                  // error={Boolean(touched.measurement_type && errors.measurement_type)}
                                  // helperText={touched.measurement_type && errors.measurement_type}
                                >
                                  <MenuItem value="">Pilih Bukit</MenuItem>
                                </TextField>
                              </FormControl>
                              <Typography variant="h6">Jenis Kegiatan</Typography>
                              <FormControl>
                                <TextField
                                  select
                                  fullWidth
                                  size="small"
                                  SelectProps={{
                                    displayEmpty: true
                                  }}
                                  name=""
                                  // {...getFieldProps('measurement_type')}
                                  // error={Boolean(touched.measurement_type && errors.measurement_type)}
                                  // helperText={touched.measurement_type && errors.measurement_type}
                                >
                                  <MenuItem value="">Pilih Jenis Kegiatan</MenuItem>
                                </TextField>
                              </FormControl>
                              <Typography variant="h6">Item Kegiatan</Typography>
                              <TextField
                                placeholder="Tuliskan item kegiatan"
                                multiline
                                rows={4}
                                maxRows={8}
                              />
                              <p>
                                *Field Item Kegiatan muncul ketika admin meilih jenis kegiatan K3
                                atau Lingkungan
                              </p>
                            </Stack>
                          </Grid>
                          <Grid item lg={7} xs={12}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                              Informasi Alat Tambang
                            </Typography>
                            <Grid
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="space-between"
                              spacing={2}
                            >
                              <Grid item md={6} xs={12}>
                                <Stack direction="column" spacing={3}>
                                  <Typography variant="h6">Nama Perusahaan</Typography>
                                  <FormControl>
                                    <TextField
                                      select
                                      fullWidth
                                      size="small"
                                      SelectProps={{
                                        displayEmpty: true
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      // error={Boolean(touched.measurement_type && errors.measurement_type)}
                                      // helperText={touched.measurement_type && errors.measurement_type}
                                    >
                                      <MenuItem value="">Tuliskan Nama Perusahaan</MenuItem>
                                    </TextField>
                                  </FormControl>
                                  <Typography variant="h6">Tipe Peralatan</Typography>
                                  <FormControl>
                                    <TextField
                                      select
                                      fullWidth
                                      size="small"
                                      SelectProps={{
                                        displayEmpty: true
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      // error={Boolean(touched.measurement_type && errors.measurement_type)}
                                      // helperText={touched.measurement_type && errors.measurement_type}
                                    >
                                      <MenuItem value="">Tuliskan Tipe Peralatan</MenuItem>
                                    </TextField>
                                  </FormControl>
                                  <Typography variant="h6">PA ( Physical Availability )</Typography>
                                  <FormControl>
                                    <TextField
                                      placeholder="Tuliskan Physical Availability"
                                      fullWidth
                                      sx={{
                                        '& .MuiOutlinedInput-root': {
                                          paddingRight: 0
                                        }
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      size="small"
                                      InputProps={{
                                        readOnly: true,
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
                                            %
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                  <Typography variant="h6">UA ( Use of Availability )</Typography>
                                  <FormControl>
                                    <TextField
                                      placeholder="Tuliskan Use of Availability"
                                      fullWidth
                                      sx={{
                                        '& .MuiOutlinedInput-root': {
                                          paddingRight: 0
                                        }
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      size="small"
                                      InputProps={{
                                        readOnly: true,
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
                                            %
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                  <Typography variant="h6">Jumlah Peralatan</Typography>
                                  <FormControl>
                                    <TextField
                                      placeholder="Tuliskan Jumlah Peralatan"
                                      fullWidth
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      size="small"
                                    />
                                  </FormControl>
                                  <Typography variant="h6">Rasio Bahan Bakar</Typography>
                                  <FormControl>
                                    <TextField
                                      placeholder="Tuliskan Liter/Jam"
                                      fullWidth
                                      sx={{
                                        '& .MuiOutlinedInput-root': {
                                          paddingRight: 0
                                        }
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      size="small"
                                      InputProps={{
                                        readOnly: true,
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
                                            Ltr/Jam
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>
                              <Grid item md={6} xs={12}>
                                <Stack direction="column" spacing={3}>
                                  <Typography variant="h6">Jenis Peralatan</Typography>
                                  <FormControl>
                                    <TextField
                                      select
                                      fullWidth
                                      size="small"
                                      SelectProps={{
                                        displayEmpty: true
                                      }}
                                      name=""
                                      // {...getFieldProps('measurement_type')}
                                      // error={Boolean(touched.measurement_type && errors.measurement_type)}
                                      // helperText={touched.measurement_type && errors.measurement_type}
                                    >
                                      <MenuItem value="">Pilih Jenis Peralatan</MenuItem>
                                    </TextField>
                                  </FormControl>
                                  <Typography variant="h6">Jenis Peralatan</Typography>
                                  <Stack direction="row" justifyContent="space-between">
                                    <FormControl sx={{ width: '100%' }}>
                                      <TextField
                                        placeholder="Tuliskan Jumlah Peralatan"
                                        fullWidth
                                        sx={{
                                          '& .MuiOutlinedInput-root': {
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 0
                                          }
                                        }}
                                        // name={`datas.${index}.test`}
                                        // {...getFieldProps(`datas.${index}.test`)}
                                        size="small"
                                      />
                                    </FormControl>
                                    <FormControl>
                                      <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        SelectProps={{
                                          displayEmpty: true
                                        }}
                                        sx={{
                                          '& .MuiOutlinedInput-root': {
                                            backgroundColor: (theme) => theme.palette.divider,
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0
                                          }
                                        }}
                                        name=""
                                        // {...getFieldProps('measurement_type')}
                                        // error={Boolean(touched.measurement_type && errors.measurement_type)}
                                        // helperText={touched.measurement_type && errors.measurement_type}
                                      >
                                        <MenuItem value="">m²</MenuItem>
                                      </TextField>
                                    </FormControl>
                                  </Stack>
                                  <Typography variant="h6">
                                    MA ( Mechanical Availability )
                                  </Typography>
                                  <FormControl>
                                    <TextField
                                      placeholder="Tuliskan Liter/Jam"
                                      fullWidth
                                      sx={{
                                        '& .MuiOutlinedInput-root': {
                                          paddingRight: 0
                                        }
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      size="small"
                                      InputProps={{
                                        readOnly: true,
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
                                            %
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                  <Typography variant="h6">EU ( Effective Utilization )</Typography>
                                  <FormControl>
                                    <TextField
                                      placeholder="Tuliskan Liter/Jam"
                                      fullWidth
                                      sx={{
                                        '& .MuiOutlinedInput-root': {
                                          paddingRight: 0
                                        }
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      size="small"
                                      InputProps={{
                                        readOnly: true,
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
                                            %
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                  <Typography variant="h6">Produktifitas</Typography>
                                  <FormControl>
                                    <TextField
                                      placeholder="Tuliskan HM Peralatan"
                                      fullWidth
                                      sx={{
                                        '& .MuiOutlinedInput-root': {
                                          paddingRight: 0
                                        }
                                      }}
                                      // name={`datas.${index}.test`}
                                      // {...getFieldProps(`datas.${index}.test`)}
                                      size="small"
                                      InputProps={{
                                        readOnly: true,
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
                                            Ton/Jam
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>
                              <Grid item md={12}>
                                <Stack direction="column" spacing={3}>
                                  <Typography variant="h5">Informasi Umum Kegiatan</Typography>
                                  <Typography variant="h6">Issue Safety</Typography>
                                  <TextField
                                    placeholder="Tuliskan Issue Safety"
                                    multiline
                                    rows={4}
                                    maxRows={8}
                                  />
                                  <Typography variant="h6">Kendalat-kendala</Typography>
                                  <TextField
                                    placeholder="Tuliskan kendala kendala"
                                    multiline
                                    rows={4}
                                    maxRows={8}
                                  />
                                  <Typography variant="h6">Rekomendasi</Typography>
                                  <TextField
                                    placeholder="Tuliskan Rekomendasi"
                                    multiline
                                    rows={4}
                                    maxRows={8}
                                  />
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <hr />
                      </>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      {/* show this when user has removed all friends from the list */}
                      Add a friend
                    </button>
                  )}
                  <center>
                    <Button
                      sx={{ mt: 2 }}
                      variant="contained"
                      startIcon={<Icon icon="ant-design:plus-outlined" color="white" />}
                    >
                      Tambah
                    </Button>
                  </center>
                </>
              )}
            />
            <Footer handleBack={() => navigate(-1)} loading={isLoadingAction} />
          </Form>
        </FormikProvider>
      </>
    </div>
  );
}
