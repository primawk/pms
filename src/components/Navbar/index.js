import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Popover, Button, Stack, IconButton, Avatar, Typography, Badge } from '@mui/material';
import { Icon } from '@iconify/react';
import DropIcon from '@iconify/icons-bi/caret-down-fill';
import NotificationIcon from '@iconify/icons-carbon/notification-filled';
import { toast } from 'react-toastify';
import Notification from '../BankData/NotifikasiBankData';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchor, setAnchor] = useState(null);
  const name = JSON.parse(localStorage.getItem('user-pms'))?.name;

  const handleClickPopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchor(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchor);
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
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/PMSLogo.png" alt="logo" style={{ marginRight: '10px  ' }} />
          </Link>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h4>PMS Smart Dashboard</h4>
          </Link>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={5} sx={{ marginRight: 3 }}>
          <Stack direction="row" spacing={3} alignItems="center" justifyContent="flex-end">
            <Badge
              color="error"
              badgeContent={50}
              showZero
              onClick={handleClick}
              sx={{ cursor: 'pointer' }}
            >
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
      <Popover
        id={id}
        open={open2}
        anchorEl={anchor}
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
          <Menu
            id="basic-menu"
            anchorEl={anchor}
            open={open2}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
          >
            <MenuItem onClick={handleClose}>
              <Grid container sx={{ justifyContent: 'space-between' }}>
                <Grid item>Notifikasi</Grid>
                <Grid item>X</Grid>
              </Grid>
            </MenuItem>
            <Notification />
            <Notification />
            <Notification />
          </Menu>
        </Stack>
      </Popover>
    </>
  );
}
