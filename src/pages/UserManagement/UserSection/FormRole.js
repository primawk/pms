/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  Stack,
  FormControl,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { toast } from 'react-toastify';
import { useQuery, useQueryClient } from 'react-query';

// custom hooks
import useLoading from 'hooks/useLoading';

// components
import { CustomModal, LoadingModal } from 'components/Modal';

// services
import RoleService from 'services/RoleService';

export default function FormRole({ isShowing, toggle, id, page, resetPage }) {
  const queryClient = useQueryClient();

  const { isLoadingAction, toggleLoading } = useLoading();

  const { data, isFetching } = useQuery('roles', () => RoleService.getRole(), {
    keepPreviousData: true,
    enabled: !!id && isShowing
  });

  const detailRole = data?.data?.data.filter((_role) => _role.id == id)[0];

  const RoleSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    desctiption: Yup.string(),
    action: Yup.object().shape({
      dashboard: Yup.string().required('Action is required'),
      'user-management': Yup.string().required('Action is required'),
      'mining-activity': Yup.string().required('Action is required'),
      inventory: Yup.string().required('Action is required'),
      'lab-report': Yup.string().required('Action is required'),
      'mining-tool': Yup.string().required('Action is required'),
      'bank-data': Yup.string().required('Action is required'),
      'modul-lossing': Yup.string().required('Action is required'),
      shipment: Yup.string().required('Action is required')
    })
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: id ? detailRole?.name : '',
      description: '',
      action: {
        dashboard: id ? detailRole?.action?.dashboard : 'View Only',
        'user-management': id ? detailRole?.action?.['user-management'] : 'View Only',
        'mining-activity': id ? detailRole?.action?.['mining-activity'] : 'View Only',
        inventory: id ? detailRole?.action?.inventory : 'View Only',
        'lab-report': id ? detailRole?.action?.['lab-report'] : 'View Only',
        'mining-tool': id ? detailRole?.action?.['mining-tool'] : 'View Only',
        'bank-data': id ? detailRole?.action?.['bank-data'] : 'View Only',
        'modul-lossing': id ? detailRole?.action?.['modul-lossing'] : 'View Only',
        shipment: id ? detailRole?.action?.['shipment'] : 'View Only'
      }
    },
    validationSchema: RoleSchema,
    onSubmit: (values) => {
      toggleLoading(true);
      if (id) {
        RoleService.updateRole(values, id)
          .then(() => {
            toast.success('Data berhasil diubah !');
            toggle();
            toggleLoading(false);
            queryClient.invalidateQueries(['roles-list', page]);
          })
          .catch((err) => {
            toggleLoading(false);
            const { data: response } = err.response;
            if (response.detail_message && typeof response.detail_message === 'object') {
              if (response?.detail_message && typeof response?.detail_message === 'object') {
                Object.entries(response.detail_message).map(([key, value]) =>
                  formik.setFieldError(key, value)
                );
              }
            } else {
              toast(response.detail_message || response.message, { type: 'error' });
            }
          });
      } else {
        RoleService.createRole(values)
          .then(() => {
            toggleLoading(false);
            toast.success('Data berhasil ditambahkan !');
            resetPage();
            toggle();
            queryClient.invalidateQueries(['roles-list', page]);
          })
          .catch((err) => {
            toggleLoading(false);
            const { data: response } = err.response;
            if (response.detail_message && typeof response.detail_message === 'object') {
              if (response?.detail_message && typeof response?.detail_message === 'object') {
                Object.entries(response.detail_message).map(([key, value]) =>
                  formik.setFieldError(key, value)
                );
              }
            } else {
              toast(response.detail_message || response.message, { type: 'error' });
            }
          });
      }
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, resetForm } = formik;

  useEffect(() => {
    // clear form on close
    resetForm();
  }, [isShowing]);

  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="80%">
      {isFetching && <LoadingModal />}

      <>
        <center>
          <h2 style={{ marginBottom: '20px' }}>Role & Hak Akses</h2>
        </center>
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={5}
            >
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <Stack spacing={2}>
                  <FormControl>
                    <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Role</h4>
                    <TextField
                      placeholder="Role"
                      fullWidth
                      size="small"
                      name="name"
                      {...getFieldProps('name')}
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </FormControl>
                </Stack>
              </Grid>

              <Grid item lg={7} md={12} sm={12} xs={12}>
                <Stack spacing={2}>
                  <h4>Hak Akses</h4>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Dashboard</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.dashboard"
                            {...getFieldProps('action.dashboard')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Manajemen Pengguna</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.user-management"
                            {...getFieldProps('action.user-management')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Kegiatan Tambang</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.mining-activity"
                            {...getFieldProps('action.mining-activity')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Pemasaran</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.shipment"
                            {...getFieldProps('action.shipment')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Inventory</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.inventory"
                            {...getFieldProps('action.inventory')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Laporan Lab</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.lab-report"
                            {...getFieldProps('action.lab-report')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Alat Tambang</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.mining-tool"
                            {...getFieldProps('action.mining-tool')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Bank Data</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.bank-data"
                            {...getFieldProps('action.bank-data')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item lg={6} xs={12} sm={12}>
                      <h4>Modul Lossing</h4>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={12}>
                      <center>
                        <FormControl>
                          <RadioGroup
                            row
                            name="action.modul-lossing"
                            {...getFieldProps('action.modul-lossing')}
                            style={{ background: '#E5E5FE', padding: '8px', borderRadius: '8px' }}
                          >
                            <FormControlLabel
                              value="View Only"
                              control={<Radio />}
                              label="View Only"
                            />
                            <FormControlLabel
                              value="Edit and Delete"
                              control={<Radio />}
                              label="Edit & Delete"
                              style={{ marginRight: '0' }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </center>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={5}
            >
              <Grid item lg={6} md={12} sm={12} xs={12} sx={{ marginTop: '25px' }}>
                <Stack spacing={2} direction="row">
                  <Button variant="outlined" fullWidth onClick={toggle}>
                    Cancel
                  </Button>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={isLoadingAction}
                    fullWidth
                  >
                    Save
                  </LoadingButton>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </>
    </CustomModal>
  );
}

FormRole.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  id: PropTypes.string,
  resetPage: PropTypes.func,
  page: PropTypes.number
};
