import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import noti from '../../../assets/Images/noti.png';
import { Grid, Popover, Button, Stack, IconButton, Avatar, Typography, Badge } from '@mui/material';

const NotifikasiBankData = ({ anchor, open2, handleClose }) => {
  return (
    <>
      <MenuItem onClick={handleClose} sx={{ borderTop: 1, borderColor: '#E0E0E0' }}>
        <Grid container sx={{ flexDirection: 'row' }} spacing={2}>
          <Grid item container sx={{ flexDirection: 'column' }} xs={10.5}>
            {/* whitespace  */}
            <Grid item sx={{ fontSize: '16px', fontWeight: '500', whiteSpace: 'break-spaces' }}>
              Dokumen ‘Legalitas Perusahaan’ pada Bank Data 1 Bulan lagi akan expire
            </Grid>
            <Grid item sx={{ fontSize: '14px', color: '#828282' }}>
              12 April 2022, 15:21 WITA
            </Grid>
          </Grid>
          <Grid item xs={1.5} sx={{}}>
            <img src={noti} alt="bell"></img>
          </Grid>
        </Grid>
      </MenuItem>
    </>
  );
};

export default NotifikasiBankData;
