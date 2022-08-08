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
      InventoryService.getHill({
        inventory_type: dataType
      }),
    { keepPreviousData: true, enabled: dataType === 'inventory-sm' }
  );

  const EditSmSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
  });

  const AddSmSchema = Yup.object().shape({
    hill: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Hill name is required')
        })
      )
      .required('Must have hill')
      .min(1, 'Minimum of 1 hill')
  });

  const initialValueHill = {
    name: data?.data?.data?.find((_data) => _data.id === idHill)?.name,
    inventory_type: 'inventory-sm'
  };

  const initialValueAddHill = {
    hill: [
      {
        name: '',
        inventory_type: 'inventory-sm'
      }
    ]
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: mode === 'edit' ? initialValueHill : initialValueAddHill,
    validationSchema: mode === 'edit' ? EditSmSchema : AddSmSchema,
    onSubmit: (values) => {
      toggleLoading();
      if (mode === 'edit') {
        InventoryService.editHill({ ...values, idHill })
          .then(() => {
            toast.success('Bukit berhasil di edit !');
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
        values?.hill.forEach((_values) => {
          InventoryService.createHill({ ..._values })
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

  const { errors, touched, handleSubmit, getFieldProps, values, setFieldValue, setFieldError } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          {isFetching && <LoadingModal />}
          <Grid item lg={12} xs={12}>
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
                <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
                  <Stack direction="row">
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        placeholder="Nama bukit"
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
              )}
              <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
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
            <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
              <FieldArray
                name="hill"
                render={(arrayHelpers) => (
                  <div>
                    {values.hill && values.hill.length > 0 ? (
                      values.hill.map((_hill, index) => (
                        <div key={index}>
                          <FormControl sx={{ width: '100%', pb: 3 }}>
                            <TextField
                              fullWidth
                              size="small"
                              name={`hill.${index}.name`}
                              {...getFieldProps(`hill.${index}.name`)}
                              error={Boolean(
                                touched.hill?.[index]?.name && errors.hill?.[index]?.name
                              )}
                              helperText={touched.hill?.[index]?.name && errors.hill?.[index]?.name}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() => {
                                        arrayHelpers.remove(index);
                                        if (values?.hill.length < 0) {
                                          arrayHelpers.push({
                                            name: '',
                                            inventory_type: 'inventory-sm'
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
                          {index === values?.hill?.length - 1 && (
                            <Button
                              variant="text"
                              startIcon={<Icon icon="ant-design:plus-outlined" color="#3f48c0" />}
                              onClick={() => {
                                if (values?.hill?.[index]?.name === '') {
                                  setFieldError(`hill.[${index}].name`, 'Hill name is required');
                                } else {
                                  arrayHelpers.push({
                                    name: '',
                                    inventory_type: 'inventory-sm'
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
                              setFieldValue('hill', [
                                {
                                  name: '',
                                  inventory_type: 'inventory-sm'
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
                            {typeof errors?.hill === 'string' && `* ${errors?.hill}`}
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
