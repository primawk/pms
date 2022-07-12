import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
          navigate('/user-management');
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
          className="navbar-brand"
          sx={{ display: 'inline-flex', height: '10%', paddingRight: '30px' }}
        >
          <img src="/PMSLogo.png" alt="logo" style={{ marginLeft: '7rem', marginRight: '10px' }} />
          <h4>PMS Smart Dashboard</h4>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60%',
              height: '80%',
              marginBottom: '30rem'
            }}
          >
            <Typography variant="body2" alignSelf="flex-start" mb={1} sx={{ fontWeight: '700' }}>
              Selamat Datang di
            </Typography>
            <Typography variant="h6" alignSelf="flex-start" mb={3}>
              PMS Smart Dashboard,
            </Typography>
            <Typography variant="h6" alignSelf="flex-start" mb={3}>
              Login
            </Typography>
            <Typography variant="body2" alignSelf="flex-start">
              Silakan login untuk melanjutkan,
            </Typography>
            <Box sx={{ mt: 1 }}>
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
                    sx={{ mt: 8, mb: 2, height: '3em' }}
                  >
                    LOGIN
                  </Button>
                </Form>
              </FormikProvider>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
