import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JwtDecode from 'jwt-decode';
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton
} from '@mui/material';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { toast } from 'react-toastify';

// icon
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// services
import UserManagementService from 'services/UserManagementService';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userPms = JSON.parse(localStorage.getItem('user-pms'));
    const decoded = userPms?.access_token && JwtDecode(userPms?.access_token);
    if (Date.now() < decoded?.exp * 1000) {
      navigate('/dashboard');
    }
  });

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      UserManagementService.loginUser(values)
        .then((res) => {
          localStorage.setItem('user-pms', JSON.stringify(res.data.data));
          toast.success('Login berhasil !');
          navigate('/dashboard');
        })
        .catch((err) => {
          toast.error(err.response.data.detail_message || 'Terjadi kesalahan !');
        });
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        {/* logo */}
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="center"
          sx={{ display: 'inline-flex', height: '10%', marginRight: '1rem' }}
        >
          <Box>
            <img
              src="/PMSLogo.png"
              alt="logo"
              style={{ marginLeft: '7rem', marginRight: '10px' }}
            />
          </Box>
          <Box>
            <h4>PMS Smart Dashboard</h4>
          </Box>
        </Grid>
        <Box sx={{ margin: '0 auto 0 auto' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 2rem 0 2rem'
            }}
          >
            <Box>
              <Typography variant="body2" alignSelf="flex-start" mb={1} sx={{ fontWeight: '700' }}>
                Selamat Datang di
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" alignSelf="flex-start" mb={3}>
                PMS Smart Dashboard,
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" alignSelf="flex-start" mb={3}>
                Login
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" alignSelf="flex-start">
                Silakan login untuk melanjutkan,
              </Typography>
            </Box>
            <Box>
              <FormikProvider value={formik}>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Username/ email"
                    name="email"
                    autoFocus
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    {...getFieldProps('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 8, mb: 2, height: '3em', boxShadow: '0' }}
                  >
                    LOGIN
                  </Button>
                </Form>
              </FormikProvider>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Login;
