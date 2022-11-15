/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
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
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider, FieldArray } from 'formik';

// custom hooks
import useLoading from 'hooks/useLoading';

// components
import Footer from 'components/Footer';
import { LoadingModal } from 'components/Modal';

// services
import InventoryService from 'services/InventoryService';
import MiningToolService from 'services/MiningToolService';

export default function FormMiningToolCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prevState = useLocation().state;

  const [submitType, setSubmitType] = useState('submit');

  const { data: dataHill, isLoading: isLoadingHill } = useQuery(
    ['mining-tool', 'hill-data'],
    () => InventoryService.getHill(),
    {
      keepPreviousData: true
    }
  );

  const { data: dataMiningTool, isLoading: isLoadingMiningTool } = useQuery(
    ['mining-tool', id],
    () => MiningToolService.getMiningTool({ id }),
    {
      keepPreviousData: true
    }
  );

  const { isLoadingAction, toggleLoading } = useLoading();

  const MiningToolSchema = Yup.object().shape({
    datas: Yup.array().of(
      Yup.object().shape({
        hill_id: Yup.number().required('Hill is required'),
        activity_type: Yup.string().required('Activity type is required'),
        activity_item: Yup.string().required('Activity item is required'),
        company_name: Yup.string().required('Company name is required'),
        tool_kind: Yup.string().required('Tool kind is required'),
        tool_type: Yup.string().required('Tool type is required'),
        capacity: Yup.number().required('Capacity is required'),
        physical_availability: Yup.number().required('Physical availability is required'),
        mechanical_availability: Yup.number().required('Mechanical availability is required'),
        use_availability: Yup.number().required('Use availability is required'),
        effective_utilization: Yup.number().required('Effective utilization is required'),
        tool_total: Yup.number().required('Total tool is required'),
        productivity: Yup.number().required('Productivity is required'),
        fuel_ratio: Yup.number().required('Fuel ratio is required'),
        issue_safety: Yup.string(),
        problem: Yup.string(),
        recommendation: Yup.string()
      })
    )
  });

  const initialValues = {
    activity_type: '',
    date: id ? '' : prevState?.date,
    time: id ? '' : prevState?.time,
    product_type: id ? '' : prevState?.product_type,
    block: id ? '' : prevState?.block,
    hill_id: '',
    activity_item: '',
    company_name: '',
    tool_kind: '',
    tool_type: '',
    capacity: '',
    physical_availability: '',
    mechanical_availability: '',
    use_availability: '',
    effective_utilization: '',
    tool_total: '',
    productivity: '',
    fuel_ratio: '',
    issue_safety: '',
    problem: '',
    recommendation: ''
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: id ? { datas: [dataMiningTool?.data?.data?.[0]] } : { datas: [initialValues] },
    validationSchema: MiningToolSchema,
    onSubmit: (values) => {
      setSubmitType('submit');
      if (submitType === 'add') {
        setFieldValue('datas', [...values?.datas, initialValues]);
      } else {
        if (id) {
          MiningToolService.editMiningTool({ ...values?.datas?.[0], id })
            .then(() => {
              toast.success('Rekapitulasi berhasil ditambahkan');
              toast.clearWaitingQueue();
              toggleLoading(false);
              navigate('/mining-tool');
            })
            .catch((err) => {
              toast.error(err.response.data.detail_message);
              toast.clearWaitingQueue();
              toggleLoading(false);
            });
        } else {
          MiningToolService.createMiningTool([...values?.datas])
            .then(() => {
              toast.success('Rekapitulasi berhasil ditambahkan');
              toast.clearWaitingQueue();
              toggleLoading(false);
              navigate('/mining-tool');
            })
            .catch((err) => {
              toast.error(err.response.data.detail_message);
              toast.clearWaitingQueue();
              toggleLoading(false);
            });
        }
      }
    }
  });

  const { errors, touched, getFieldProps, handleSubmit, setFieldValue, values, validateForm } =
    formik;

  const handleCancel = () => {
    const _oldData = [...values?.datas];
    setFieldValue('datas', [_oldData.splice(-1)]);
  };

  useEffect(() => {
    if (id === undefined && !values?.datas?.[0]?.activity_type && !values?.datas?.[0]?.date) {
      navigate('/mining-tool');
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
      {isLoadingHill && <LoadingModal />}
      <>
        <FormikProvider value={formik}>
          <Form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <FieldArray
              name="datas"
              render={(arrayHelpers) => (
                <>
                  {values.datas &&
                    values.datas.length > 0 &&
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
                            <Stack direction="column" spaciselectng={3}>
                              <Typography variant="h6">Bukit</Typography>
                              <FormControl>
                                <TextField
                                  select
                                  fullWidth
                                  size="small"
                                  SelectProps={{
                                    displayEmpty: true
                                  }}
                                  name={`datas.${index}.hill_id`}
                                  {...getFieldProps(`datas.${index}.hill_id`)}
                                  error={Boolean(
                                    touched.datas?.[index]?.hill_id &&
                                      errors.datas?.[index]?.hill_id
                                  )}
                                  helperText={
                                    touched.datas?.[index]?.hill_id &&
                                    errors.datas?.[index]?.hill_id
                                  }
                                >
                                  <MenuItem value="">Pilih Bukit</MenuItem>
                                  {dataHill &&
                                    dataHill?.data?.data?.map((item) => (
                                      <MenuItem value={item?.id} key={item?.id}>
                                        {item?.name}
                                      </MenuItem>
                                    ))}
                                </TextField>
                              </FormControl>
                              <Typography variant="h6">Jenis Kegiatan</Typography>
                              <FormControl>
                                <TextField
                                  fullWidth
                                  size="small"
                                  name={`datas.${index}.activity_type`}
                                  {...getFieldProps(`datas.${index}.activity_type`)}
                                  error={Boolean(
                                    touched.datas?.[index]?.activity_type &&
                                      errors.datas?.[index]?.activity_type
                                  )}
                                  helperText={
                                    touched.datas?.[index]?.activity_type &&
                                    errors.datas?.[index]?.activity_type
                                  }
                                />
                              </FormControl>
                              <Typography variant="h6">Item Kegiatan</Typography>
                              <TextField
                                placeholder="Tuliskan item kegiatan"
                                multiline
                                minRows={4}
                                maxRows={8}
                                name={`datas.${index}.activity_item`}
                                {...getFieldProps(`datas.${index}.activity_item`)}
                                error={Boolean(
                                  touched.datas?.[index]?.activity_item &&
                                    errors.datas?.[index]?.activity_item
                                )}
                                helperText={
                                  touched.datas?.[index]?.activity_item &&
                                  errors.datas?.[index]?.activity_item
                                }
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
                                      fullWidth
                                      size="small"
                                      name={`datas.${index}.company_name`}
                                      {...getFieldProps(`datas.${index}.company_name`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.company_name &&
                                          errors.datas?.[index]?.company_name
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.company_name &&
                                        errors.datas?.[index]?.company_name
                                      }
                                    />
                                  </FormControl>
                                  <Typography variant="h6">Tipe Peralatan</Typography>
                                  <FormControl>
                                    <TextField
                                      fullWidth
                                      size="small"
                                      name={`datas.${index}.tool_type`}
                                      {...getFieldProps(`datas.${index}.tool_type`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.tool_type &&
                                          errors.datas?.[index]?.tool_type
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.tool_type &&
                                        errors.datas?.[index]?.tool_type
                                      }
                                    />
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
                                      name={`datas.${index}.physical_availability`}
                                      {...getFieldProps(`datas.${index}.physical_availability`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.physical_availability &&
                                          errors.datas?.[index]?.physical_availability
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.physical_availability &&
                                        errors.datas?.[index]?.physical_availability
                                      }
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
                                      name={`datas.${index}.use_availability`}
                                      {...getFieldProps(`datas.${index}.use_availability`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.use_availability &&
                                          errors.datas?.[index]?.use_availability
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.use_availability &&
                                        errors.datas?.[index]?.use_availability
                                      }
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
                                      name={`datas.${index}.tool_total`}
                                      {...getFieldProps(`datas.${index}.tool_total`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.tool_total &&
                                          errors.datas?.[index]?.tool_total
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.tool_total &&
                                        errors.datas?.[index]?.tool_total
                                      }
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
                                      name={`datas.${index}.fuel_ratio`}
                                      {...getFieldProps(`datas.${index}.fuel_ratio`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.fuel_ratio &&
                                          errors.datas?.[index]?.fuel_ratio
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.fuel_ratio &&
                                        errors.datas?.[index]?.fuel_ratio
                                      }
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
                                      fullWidth
                                      size="small"
                                      name={`datas.${index}.tool_kind`}
                                      {...getFieldProps(`datas.${index}.tool_kind`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.tool_kind &&
                                          errors.datas?.[index]?.tool_kind
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.tool_kind &&
                                        errors.datas?.[index]?.tool_kind
                                      }
                                    />
                                  </FormControl>
                                  <Typography variant="h6">Kapasitas</Typography>
                                  <Stack direction="row" justifyContent="space-between">
                                    <FormControl sx={{ width: '100%' }}>
                                      <TextField
                                        placeholder="Tuliskan Jumlah Peralatan"
                                        fullWidth
                                        size="small"
                                        sx={{
                                          '& .MuiOutlinedInput-root': {
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 0
                                          }
                                        }}
                                        name={`datas.${index}.capacity`}
                                        {...getFieldProps(`datas.${index}.capacity`)}
                                        error={Boolean(
                                          touched.datas?.[index]?.capacity &&
                                            errors.datas?.[index]?.capacity
                                        )}
                                        helperText={
                                          touched.datas?.[index]?.capacity &&
                                          errors.datas?.[index]?.capacity
                                        }
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
                                      name={`datas.${index}.mechanical_availability`}
                                      {...getFieldProps(`datas.${index}.mechanical_availability`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.mechanical_availability &&
                                          errors.datas?.[index]?.mechanical_availability
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.mechanical_availability &&
                                        errors.datas?.[index]?.mechanical_availability
                                      }
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
                                      name={`datas.${index}.effective_utilization`}
                                      {...getFieldProps(`datas.${index}.effective_utilization`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.effective_utilization &&
                                          errors.datas?.[index]?.effective_utilization
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.effective_utilization &&
                                        errors.datas?.[index]?.effective_utilization
                                      }
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
                                      name={`datas.${index}.productivity`}
                                      {...getFieldProps(`datas.${index}.productivity`)}
                                      error={Boolean(
                                        touched.datas?.[index]?.productivity &&
                                          errors.datas?.[index]?.productivity
                                      )}
                                      helperText={
                                        touched.datas?.[index]?.productivity &&
                                        errors.datas?.[index]?.productivity
                                      }
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
                                            Ton/Jam
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>
                              <Grid item md={12} sm={12}>
                                <Stack direction="column" spacing={3}>
                                  <Typography variant="h5">Informasi Umum Kegiatan</Typography>
                                  <Typography variant="h6">Issue Safety</Typography>
                                  <TextField
                                    placeholder="Tuliskan Issue Safety"
                                    multiline
                                    fullWidth
                                    minRows={4}
                                    maxRows={8}
                                    name={`datas.${index}.issue_safety`}
                                    {...getFieldProps(`datas.${index}.issue_safety`)}
                                    error={Boolean(
                                      touched.datas?.[index]?.issue_safety &&
                                        errors.datas?.[index]?.issue_safety
                                    )}
                                    helperText={
                                      touched.datas?.[index]?.issue_safety &&
                                      errors.datas?.[index]?.issue_safety
                                    }
                                  />
                                  <Typography variant="h6">Kendala-kendala</Typography>
                                  <TextField
                                    placeholder="Tuliskan kendala kendala"
                                    fullWidth
                                    multiline
                                    minRows={4}
                                    maxRows={8}
                                    name={`datas.${index}.problem`}
                                    {...getFieldProps(`datas.${index}.problem`)}
                                    error={Boolean(
                                      touched.datas?.[index]?.problem &&
                                        errors.datas?.[index]?.problem
                                    )}
                                    helperText={
                                      touched.datas?.[index]?.problem &&
                                      errors.datas?.[index]?.problem
                                    }
                                  />
                                  <Typography variant="h6">Rekomendasi</Typography>
                                  <TextField
                                    placeholder="Tuliskan Rekomendasi"
                                    fullWidth
                                    multiline
                                    minRows={4}
                                    maxRows={8}
                                    name={`datas.${index}.recommendation`}
                                    {...getFieldProps(`datas.${index}.recommendation`)}
                                    error={Boolean(
                                      touched.datas?.[index]?.recommendation &&
                                        errors.datas?.[index]?.recommendation
                                    )}
                                    helperText={
                                      touched.datas?.[index]?.recommendation &&
                                      errors.datas?.[index]?.recommendation
                                    }
                                  />
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <hr />
                      </>
                    ))}
                  {!id && (
                    <center>
                      {values?.datas?.length > 1 && (
                        <Button
                          sx={{ mt: 2, mr: 3, background: 'rgba(63, 72, 192, 0.1)' }}
                          variant="text"
                          startIcon={<Icon icon="ant-design:close-circle-outlined" />}
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      )}
                      <Button
                        sx={{ mt: 2 }}
                        variant="contained"
                        startIcon={<Icon icon="ant-design:plus-circle-outlined" color="white" />}
                        type="submit"
                        onClick={() => setSubmitType('add')}
                      >
                        Tambah
                      </Button>
                    </center>
                  )}
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
