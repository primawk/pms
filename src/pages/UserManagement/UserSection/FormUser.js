/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  MenuItem,
  Stack,
  FormControl,
  Button,
  InputAdornment
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import dayjs from 'dayjs';
import { useQuery, useQueryClient } from 'react-query';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { toast } from 'react-toastify';

// components
import { CustomModal, LoadingModal } from 'components/Modal';

// services
import RoleService from 'services/RoleService';
import UserManagementService from 'services/UserManagementService';

export default function FormUser({ isShowing, toggle, id, resetPage }) {
  const queryClient = useQueryClient();

  const { data: roleData, isFetching: isFetchingRole } = useQuery('roles', () =>
    RoleService.getRole()
  );

  const { data: userData, isFetching } = useQuery(
    ['users', id],
    () => UserManagementService.getUserById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailUser = userData?.data?.data;

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    birthdate: Yup.string().required('Birthdate is required'),
    email: Yup.string(),
    phone: Yup.string().required('Phone is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    role_id: Yup.string().required('Role is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: id ? detailUser?.name : '',
      birthdate: id ? dayjs(detailUser?.birthdate).format('MM/DD/YYYY') : new Date('2010/01/01'),
      email: id ? detailUser?.email : '',
      phone: id ? detailUser?.phone : '',
      username: id ? detailUser?.username : '',
      password: '',
      role_id: id ? detailUser?.role_id : ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      if (id) {
        UserManagementService.updateUser(values, id)
          .then(() => {
            toast.success('Data berhasil diubah !');
            toggle();
          })
          .catch((err) => {
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
        UserManagementService.createUser(values)
          .then(() => {
            toast.success('Data berhasil ditambahkan !');
            resetPage();
            toggle();
            queryClient.invalidateQueries(['users', 1, false]);
          })
          .catch((err) => {
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

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    setFieldValue,
    values,
    resetForm,
    isSubmitting
  } = formik;

  const generatePassword = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setFieldValue('password', result);
  };

  useEffect(() => {
    // clear form on close
    resetForm();
  }, [isShowing]);
  return (
    <CustomModal isShowing={isShowing} toggle={toggle}>
      {isFetching && <LoadingModal />}
      {roleData && (
        <>
          <center>
            <h2 style={{ marginBottom: '20px', marginTop: '0 !important' }}>
              {id ? 'Edit User' : 'Tambah User'}
            </h2>
          </center>
          <FormikProvider value={formik}>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
              >
                <Grid item lg={6} md={12} sm={12} xs={12}>
                  <Stack spacing={2}>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Username</h4>
                      <TextField
                        placeholder="Username"
                        fullWidth
                        size="small"
                        name="username"
                        {...getFieldProps('username')}
                        error={Boolean(touched.username && errors.username)}
                        helperText={touched.username && errors.username}
                      />
                    </FormControl>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Nama Lengkap</h4>
                      <TextField
                        placeholder="Nama Lengkap"
                        fullWidth
                        size="small"
                        name="name"
                        {...getFieldProps('name')}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Role</h4>
                      <TextField
                        select
                        placeholder="Role"
                        fullWidth
                        size="small"
                        name="role_id"
                        {...getFieldProps('role_id')}
                        error={Boolean(touched.role_id && errors.role_id)}
                        helperText={touched.role_id && errors.role_id}
                      >
                        {!isFetchingRole ? (
                          roleData?.data?.data.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                              {option.name}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem value="" disabled>
                            Loading . . .
                          </MenuItem>
                        )}
                      </TextField>
                    </FormControl>
                  </Stack>
                </Grid>

                <Grid item lg={6} md={12} sm={12} xs={12}>
                  <Stack spacing={2}>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Nomor Telepon</h4>
                      <TextField
                        placeholder="Nomor Telepon"
                        fullWidth
                        size="small"
                        name="phone"
                        {...getFieldProps('phone')}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </FormControl>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>Tanggal Lahir</h4>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={values.birthdate}
                          onChange={(val) => {
                            setFieldValue('birthdate', val);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              size="small"
                              name="birthdate"
                              error={Boolean(touched.birthdate && errors.birthdate)}
                              helperText={touched.birthdate && errors.birthdate}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </FormControl>
                    <FormControl>
                      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>
                        {id ? 'New Password' : 'Password'}
                      </h4>
                      <TextField
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            paddingRight: 0
                          }
                        }}
                        placeholder={id ? 'New Password' : 'Password'}
                        fullWidth
                        size="small"
                        style={{ padding: '0' }}
                        name="password"
                        {...getFieldProps('password')}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                padding: '19px',
                                marginRight: '0 !important',
                                backgroundColor: (theme) => theme.palette.divider,
                                borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
                                borderBottomRightRadius: (theme) => theme.shape.borderRadius + 'px'
                              }}
                            >
                              <Button
                                variant="text"
                                style={{ marginRight: '0 !important' }}
                                onClick={generatePassword}
                              >
                                Generate Password
                              </Button>
                            </InputAdornment>
                          )
                        }}
                      />
                    </FormControl>
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
                      fullWidth
                      type="submit"
                      loading={isSubmitting}
                    >
                      Save
                    </LoadingButton>
                  </Stack>
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>
        </>
      )}
    </CustomModal>
  );
}

FormUser.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  id: PropTypes.number,
  resetPage: PropTypes.func
};
