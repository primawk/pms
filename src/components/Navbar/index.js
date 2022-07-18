import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Popover, Button, Stack, IconButton, Avatar, Typography, Badge } from '@mui/material';
import { Icon } from '@iconify/react';
import DropIcon from '@iconify/icons-bi/caret-down-fill';
import NotificationIcon from '@iconify/icons-carbon/notification-filled';
import { toast } from 'react-toastify';

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const name = JSON.parse(localStorage.getItem('user-pms'))?.name;

  const handleClickPopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLogout = () => {
    localStorage.removeItem('user-pms');
    navigate('/auth/login');
    toast.success('Logout berhasil !');
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="navbar"
      >
        <Grid
          item
          container
          lg={6}
          md={6}
          sm={6}
          xs={6}
          justifyContent="flex-start"
          alignItems="center"
          className="navbar-brand"
        >
          <img src="/PMSLogo.png" alt="logo" style={{ marginRight: '10px  ' }} />
          <h4>PMS Smart Dashboard</h4>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={5} sx={{ marginRight: 3 }}>
          <Stack direction="row" spacing={3} alignItems="center" justifyContent="flex-end">
            <Badge color="error" badgeContent={50} showZero>
              <Icon icon={NotificationIcon} height={24} width={24} color="#3f48c0" />
            </Badge>
            <Avatar sx={{ width: 35, height: 35, bgcolor: '#3F48C0' }}>
              {name?.substring(0, 1)}
            </Avatar>
            <Typography>{name}</Typography>
            <IconButton onClick={handleClickPopOver}>
              <Icon icon={DropIcon} height={15} width={15} color="#828282" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        style={{ zIndex: '110' }}
      >
        <Stack
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          mb={3}
          mt={3}
          mr={3}
          ml={3}
        >
          <Button onClick={handleLogout}>Logout</Button>
        </Stack>
      </Popover>
    </>
  );
}
