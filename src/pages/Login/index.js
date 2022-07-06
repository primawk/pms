import { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          sx={{ display: 'inline-flex', height: '10%' }}
        >
          <img src="/PMSLogo.png" alt="logo" style={{ marginLeft: '7rem', marginRight: '10px' }} />
          <h4 style={{  }}>PMS Smart Dashboard</h4>
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
            <Typography variant="body2" alignSelf="flex-start" mb={1} sx={{fontWeight: '700'}}>
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
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} edge="end">
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 8, mb: 2, height: '3em' }}
              >
                LOGIN
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
