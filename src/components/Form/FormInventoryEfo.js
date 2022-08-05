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

const FormInventoryEfo = ({ toggle }) => {
  const { inventoryType, dataType } = useParams();
  const queryClient = useQueryClient();

  const [idDome, setIdDome] = useState('');
  const [mode, setMode] = useState('edit');

  const { isLoadingAction, toggleLoading } = useLoading();

  const { data, isLoading, isFetching } = useQuery(
    ['inventory', inventoryType, dataType],
    () =>
      InventoryService.getDome({
        inventory_type: dataType
      }),
    { keepPreviousData: true, enabled: dataType === 'inventory-efo' }
  );

  const EditSmSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
  });

  const AddSmSchema = Yup.object().shape({
    dome: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Dome name is required')
        })
      )
      .required('Must have dome')
      .min(1, 'Minimum of 1 dome')
  });

  const initialValueDome = {
    name: data?.data?.data?.find((_data) => _data.id === idDome)?.name,
    inventory_type: 'inventory-efo'
  };

  const initialValueAddDome = {
    dome: [
      {
        name: '',
        inventory_type: 'inventory-efo'
      }
    ]
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: mode === 'edit' ? initialValueDome : initialValueAddDome,
    validationSchema: mode === 'edit' ? EditSmSchema : AddSmSchema,
    onSubmit: (values) => {
      toggleLoading();
      if (mode === 'edit') {
        InventoryService.editDomeEfo({ ...values, idDome })
          .then(() => {
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
        toggleLoading();
        values?.dome.forEach((_values) => {
          InventoryService.createDomeEfo({ ..._values })
            .then(() => {
              toast.success('Dome berhasil ditambahkan');
              toast.clearWaitingQueue();
              queryClient.invalidateQueries(['inventory', inventoryType, dataType]);
              toggle();
              toggleLoading();
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
    InventoryService.deleteDome({ idDome })
      .then(() => {
        toast.success('Dome berhasil di hapus !');
        toast.clearWaitingQueue();
        setIdDome('');
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
              Dome
            </Typography>
            {!isLoading && (
              <FormControl style={{ width: '100%' }}>
                <TextField
                  select
                  size="small"
                  value={idDome}
                  onChange={(e) => {
                    setIdDome(e.target.value);
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
              {idDome !== '' && (
                <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
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
              )}
              <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
                <Button
                  variant="text"
                  startIcon={<Icon icon="ant-design:plus-outlined" color="#3f48c0" />}
                  onClick={() => {
                    setMode('add');
                    setIdDome('');
                  }}
                >
                  Tambah dome baru
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item lg={12} xs={12} sx={{ pt: 5 }}>
              <FieldArray
                name="dome"
                render={(arrayHelpers) => (
                  <div>
                    {values.dome && values.dome.length > 0 ? (
                      values.dome.map((_dome, index) => (
                        <div key={index}>
                          <FormControl sx={{ width: '100%', pb: 3 }}>
                            <TextField
                              fullWidth
                              size="small"
                              name={`dome.${index}.name`}
                              {...getFieldProps(`dome.${index}.name`)}
                              error={Boolean(
                                touched.dome?.[index]?.name && errors.dome?.[index]?.name
                              )}
                              helperText={touched.dome?.[index]?.name && errors.dome?.[index]?.name}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() => {
                                        arrayHelpers.remove(index);
                                        if (values?.dome.length < 0) {
                                          arrayHelpers.push({
                                            name: '',
                                            inventory_type: 'inventory-efo'
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
                          {index === values?.dome?.length - 1 && (
                            <Button
                              variant="text"
                              startIcon={<Icon icon="ant-design:plus-outlined" color="#3f48c0" />}
                              onClick={() => {
                                if (values?.dome?.[index]?.name === '') {
                                  setFieldError(`dome.[${index}].name`, 'dome name is required');
                                } else {
                                  arrayHelpers.push({
                                    name: '',
                                    inventory_type: 'inventory-efo'
                                  });
                                }
                              }}
                            >
                              Tambah dome baru
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
                              setFieldValue('dome', [
                                {
                                  name: '',
                                  inventory_type: 'inventory-efo'
                                }
                              ]);
                              setMode('add');
                            }}
                          >
                            Tambah dome baru
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
              <LoadingButton loading={isLoadingAction} variant="contained" fullWidth type="submit">
                Save
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};

export default FormInventoryEfo;
