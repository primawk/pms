import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import {
  Grid,
  Button,
  Typography,
  FormControl,
  TextField,
  MenuItem,
  Stack,
  InputAdornment,
  IconButton
} from '@mui/material';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider, FieldArray } from 'formik';

// custom hooks
import useLoading from 'hooks/useLoading';

// components
import { LoadingModal } from 'components/Modal';

// services
import InventoryService from 'services/InventoryService';

const FormInventorySm = ({ toggle }) => {
  const { inventoryType, dataType } = useParams();
  const queryClient = useQueryClient();

  const [idHill, setIdHill] = useState('');
  const [mode, setMode] = useState('edit');

  const { isLoadingAction, toggleLoading } = useLoading();

  const { data, isLoading, isFetching } = useQuery(
    ['inventory', inventoryType, dataType],
    () =>
      InventoryService.getDome({
        inventory_type: dataType
      }),
    { keepPreviousData: true, enabled: dataType === 'inventory-eto' }
  );

  const EditEtoSchema = Yup.object().shape({
    dome_list: Yup.array()
      .of(
        Yup.object().shape({
          dome_name: Yup.string().required('Dome name is required')
        })
      )
      .required('Must have dome')
      .min(1, 'Minimum of 1 dome'),
    name: Yup.string().required('Hill name is required')
  });

  const AddEtoSchema = Yup.object().shape({
    dome_list: Yup.array()
      .of(
        Yup.object().shape({
          hill_name: Yup.string().required('Hill name is required'),
          domes: Yup.array().of(Yup.string())
        })
      )
      .required('Must have hill')
      .min(1, 'Minimum of 1 hill')
  });

  const initialValueHill = {
    hill_id: idHill,
    name: data?.data?.data?.find((_data) => _data.id === idHill)?.name,
    inventory_type: 'inventory-eto',
    dome_list: data?.data?.data?.find((_data) => _data.id === idHill)?.dome_list
  };

  const initialValueAddHill = {
    dome_list: [
      {
        hill_name: '',
        domes: [''],
        inventory_type: 'inventory-eto'
      }
    ]
  };

  const formik = useFormik({
    enableReinitialize: true,
    validateOnBlur: true,
    initialValues: mode === 'edit' ? initialValueHill : initialValueAddHill,
    validationSchema: mode === 'edit' ? EditEtoSchema : AddEtoSchema,
    onSubmit: (values) => {
      toggleLoading();
      if (mode === 'edit') {
        const _deletedDome = values?.dome_list?.filter(
          (_item) => _item?.status === 'deleted' && _item?.dome_id !== null
        );
        const _oldDome = values?.dome_list?.filter((_item) => _item?.status !== 'deleted');
        _deletedDome.forEach((_values) => {
          InventoryService.deleteDome({ ..._values });
        });
        InventoryService.editDomeEto([
          {
            dome_list: _oldDome,
            hill_id: values?.hill_id,
            inventory_type: values?.inventory_type,
            name: values?.name
          }
        ])
          .then(() => {
            toggle();
            toast.success('Dome berhasil di edit !');
            toast.clearWaitingQueue();
            toggleLoading();
            queryClient.invalidateQueries(['inventory', inventoryType, dataType]);
          })
          .then((err) => {
            toast.error(err.response.data.detail_message);
            toast.clearWaitingQueue();
            toggleLoading();
          });
      } else {
        values?.dome_list.forEach((_values) => {
          InventoryService.createHillEto({ dome_list: [{ ..._values }] })
            .then(() => {
              toast.success('Bukit berhasil ditambahkan');
              toast.clearWaitingQueue();
              queryClient.invalidateQueries(['inventory', inventoryType, dataType]);
              toggleLoading();
              toggle();
            })
            .catch((err) => {
              toast.error(err.response.data.detail_message);
              toast.clearWaitingQueue();
              toggleLoading();
            });
        });
      }
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, values, setFieldValue, setFieldError } =
    formik;

  const handleDelete = () => {
    toggleLoading();
    InventoryService.deleteHill({ idHill })
      .then(() => {
        toast.success('Bukit berhasil di hapus !');
        toast.clearWaitingQueue();
        setIdHill('');
        toggleLoading();
        queryClient.invalidateQueries(['inventory', inventoryType, dataType]);
      })
      .then((err) => {
        toast.error(err.response.data.detail_message);
        toast.clearWaitingQueue();
        toggleLoading();
      });
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          {isFetching && <LoadingModal />}
          <Grid item lg={12} xs={12} sx={{ pb: 5 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Bukit
            </Typography>
            {!isLoading && (
              <FormControl style={{ width: '100%' }}>
                <TextField
                  select
                  size="small"
                  value={idHill}
                  onChange={(e) => {
                    setIdHill(e.target.value);
                    if (mode === 'add') setMode('edit');
                  }}
                >
                  {data?.data?.data?.map((option) => (
                    <MenuItem key={option?.id} value={option.id}>
                      {option?.name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            )}
          </Grid>
          {mode === 'edit' ? (
            <>
              {idHill !== '' && (
                <div style={{ border: '1px solid #F2F2F2', padding: '30px' }}>
                  <Grid item lg={12} xs={12}>
                    <Stack direction="row">
                      <FormControl sx={{ width: '100%' }}>
                        <TextField
                          placeholder="Nama dome"
                          fullWidth
                          size="small"
                          name="name"
                          {...getFieldProps('name')}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </FormControl>
                      <LoadingButton
                        loading={isLoadingAction}
                        variant="contained"
                        sx={{ minWidth: '110px' }}
                        type="submit"
                      >
                        Ganti Nama
                      </LoadingButton>
                      <LoadingButton
                        loading={isLoadingAction}
                        variant="outlined"
                        sx={{ minWidth: '110px' }}
                        onClick={handleDelete}
                        startIcon={<Icon icon="ant-design:delete-filled" color="#3f48c0" />}
                      >
                        Hapus
                      </LoadingButton>
                    </Stack>
                  </Grid>
                  <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
                    <FieldArray
                      name="dome_list"
                      render={(arrayHelpers) => (
                        <div>
                          {values.dome_list && values.dome_list.length > 0 ? (
                            values.dome_list
                              ?.filter((item) => item.status !== 'deleted')
                              .map((_dome, index) => (
                                <div key={index}>
                                  <FormControl sx={{ width: '100%', pb: 1 }}>
                                    <TextField
                                      fullWidth
                                      size="small"
                                      name={`dome_list.${index}.dome_name`}
                                      {...getFieldProps(`dome_list.${index}.dome_name`)}
                                      error={Boolean(
                                        touched.dome_list?.[index]?.dome_name &&
                                          errors.dome_list?.[index]?.dome_name
                                      )}
                                      helperText={
                                        touched.dome_list?.[index]?.dome_name &&
                                        errors.dome_list?.[index]?.dome_name
                                      }
                                      InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                              onClick={() => {
                                                if (_dome?.id !== null) {
                                                  arrayHelpers.remove(index);
                                                } else {
                                                  setFieldValue(`dome_list.[${index}]`, {
                                                    dome_name: '-',
                                                    dome_id: null,
                                                    status: 'deleted'
                                                  });
                                                }
                                                if (
                                                  values.dome_list?.filter(
                                                    (item) => item.status !== 'deleted'
                                                  ).length < 0
                                                ) {
                                                  arrayHelpers.push({
                                                    dome_name: '',
                                                    id: null
                                                  });
                                                }
                                              }}
                                            >
                                              <Icon
                                                icon="ant-design:delete-filled"
                                                color="#3f48c0"
                                              />
                                            </IconButton>
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </FormControl>
                                  {index ===
                                    values.dome_list?.filter((item) => item.status !== 'deleted')
                                      ?.length -
                                      1 && (
                                    <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
                                      <Button
                                        variant="outlined"
                                        sx={{ float: 'right' }}
                                        startIcon={
                                          <Icon icon="ant-design:plus-outlined" color="#3f48c0" />
                                        }
                                        onClick={() => {
                                          if (values?.dome_list?.[index]?.dome_name === '') {
                                            setFieldError(
                                              `dome_list.[${index}].dome_name`,
                                              'Dome name is required'
                                            );
                                          } else {
                                            arrayHelpers.push({
                                              dome_name: '',
                                              id: null
                                            });
                                          }
                                        }}
                                      >
                                        Tambah dome
                                      </Button>
                                    </Grid>
                                  )}
                                </div>
                              ))
                          ) : (
                            <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
                              <Button
                                variant="outlined"
                                sx={{ float: 'right' }}
                                startIcon={<Icon icon="ant-design:plus-outlined" color="#3f48c0" />}
                                onClick={() => {
                                  arrayHelpers.push({
                                    name: '',
                                    id: null
                                  });
                                }}
                              >
                                Tambah dome
                              </Button>
                            </Grid>
                          )}
                        </div>
                      )}
                    />
                  </Grid>
                </div>
              )}
              <Grid item lg={12} xs={12}>
                <Button
                  variant="text"
                  startIcon={<Icon icon="ant-design:plus-outlined" color="#3f48c0" />}
                  onClick={() => {
                    setMode('add');
                    setIdHill('');
                  }}
                >
                  Tambah bukit baru
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item lg={12} xs={12}>
              <FieldArray
                name="dome_list"
                render={(arrayHelpers) => (
                  <div>
                    {values.dome_list && values.dome_list.length > 0 ? (
                      values.dome_list.map((_dome, index) => (
                        <div key={index}>
                          <FormControl sx={{ width: '100%', pb: 3 }}>
                            <TextField
                              fullWidth
                              size="small"
                              name={`dome_list.${index}.hill_name`}
                              {...getFieldProps(`dome_list.${index}.hill_name`)}
                              error={Boolean(
                                touched.dome_list?.[index]?.hill_name &&
                                  errors.dome_list?.[index]?.hill_name
                              )}
                              helperText={
                                touched.dome_list?.[index]?.hill_name &&
                                errors.dome_list?.[index]?.hill_name
                              }
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() => {
                                        arrayHelpers.remove(index);
                                        if (values?.dome.length < 0) {
                                          arrayHelpers.push({
                                            dome_name: '',
                                            dome_id: null
                                          });
                                        }
                                      }}
                                    >
                                      <Icon icon="ant-design:delete-filled" color="#3f48c0" />
                                    </IconButton>
                                  </InputAdornment>
                                )
                              }}
                            />
                          </FormControl>
                          {index === values?.dome_list?.length - 1 && (
                            <Button
                              variant="text"
                              startIcon={<Icon icon="ant-design:plus-outlined" color="#3f48c0" />}
                              onClick={() => {
                                if (values?.dome_list?.[index]?.hill_name === '') {
                                  setFieldError(
                                    `dome_list.[${index}].hill_name`,
                                    'Hill name is required'
                                  );
                                } else {
                                  arrayHelpers.push({
                                    hill_name: '',
                                    domes: [''],
                                    inventory_type: 'inventory-eto'
                                  });
                                }
                              }}
                            >
                              Tambah bukit baru
                            </Button>
                          )}
                        </div>
                      ))
                    ) : (
                      <>
                        <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
                          <Button
                            variant="text"
                            startIcon={<Icon icon="ant-design:plus-outlined" color="#3f48c0" />}
                            onClick={() => {
                              setFieldValue('dome_list', [
                                ...values?.dome_list,
                                {
                                  hill_name: '',
                                  domes: [''],
                                  inventory_type: 'inventory-eto'
                                }
                              ]);
                              setMode('add');
                            }}
                          >
                            Tambah bukit baru
                          </Button>
                        </Grid>
                        <Grid item lg={12} xs={12} sx={{ pt: 1 }}>
                          <h4 style={{ color: 'red', float: 'left' }}>
                            {typeof errors?.dome === 'string' && `* ${errors?.dome}`}
                          </h4>
                        </Grid>
                      </>
                    )}
                  </div>
                )}
              />
            </Grid>
          )}
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={3}
            lg={12}
            xs={12}
            sx={{ pt: 5 }}
          >
            <Grid item lg={4} xs={5}>
              <Button variant="outlined" fullWidth onClick={toggle}>
                Cancel
              </Button>
            </Grid>
            <Grid item lg={4} xs={5}>
              <LoadingButton
                loading={isLoadingAction}
                variant="contained"
                fullWidth
                type="submit"
                disabled={mode === 'edit' && values.name === undefined}
              >
                Save
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};

export default FormInventorySm;
