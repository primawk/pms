import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import Hamburger from '@iconify-icons/charm/menu-hamburger';
import { Icon } from '@iconify/react';
import { Grid, useMediaQuery, Popover, Avatar, Stack, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';

// component
import sidebarConfig from './SidebarConfig';
import Navbar from 'components/Navbar';
import avatarLogo from 'assets/Images/avatar.png';

export default function Sidebar({ children, toggleSidebar, handleToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const isMobile = useMediaQuery('(max-width:576px)');
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickPopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user-pms');
    navigate('/auth/login');
    toast.success('Logout berhasil !');
  };

  return (
    <>
      <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
        {!isMobile && (
          <Grid item>
            <Navbar />
          </Grid>
        )}
        <Grid item>
          {children}
          <ProSidebar collapsed={toggleSidebar} className="sidebar" style={{ zIndex: 1031 }}>
            <Menu className="main-menu menu-label" style={{ paddingTop: 0 }}>
              <MenuItem
                key="toggle-sidebar"
                icon={<Icon icon={Hamburger} height={24} width={24} color="#3f48c0" />}
                onClick={handleToggle}
              >
                Collapse
              </MenuItem>
              {sidebarConfig.map((item) => (
                <MenuItem
                  key={item.path}
                  active={location.pathname.includes(item.path.split('/')[0])}
                  icon={item.icon}
                  onClick={() => navigate(item.path)}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Menu>

            {isMobile && (
              <Menu className="main-menu menu-label" style={{ marginTop: 'auto' }}>
                <MenuItem
                  key="logout"
                  icon={
                    <Avatar
                      alt="avatar logo"
                      src={avatarLogo}
                      sx={{ width: 35, height: 35 }}
                    ></Avatar>
                  }
                  onClick={handleClickPopOver}
                >
                  Putri Devina
                </MenuItem>
              </Menu>
            )}
          </ProSidebar>
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.5,
            overflow: 'inherit',
            width: 200
          }
        }}
        style={{ zIndex: '110' }}
      >
        <Box
          sx={{
            position: 'relative',
            mt: '10px',
            '&::before': {
              backgroundColor: 'white',
              content: '""',
              display: 'block',
              position: 'absolute',
              width: 12,
              height: 12,
              top: -6,
              transform: 'rotate(45deg)',
              left: 'calc(50% - 6px)'
            }
          }}
        />
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
