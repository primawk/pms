import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';

// assets
import avatarLogo from 'assets/Images/avatar.png';

export default function HistoryMiningCard() {
  return (
    <div
      style={{
        background: 'white',
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px'
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        spacing={3}
      >
        <Grid item lg={6} xs={12}>
          <Typography variant="h5" sx={{ pb: 2 }}>
            12 Juni 2022
          </Typography>
          <Stack direction="row" spacing={2} sx={{ pb: 2 }}>
            <img src={avatarLogo} alt={avatarLogo} />
            <Typography variant="body1">Putri Devina mengedit kadar Nikel 13:21 WITA</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ pb: 2 }}>
            <img src={avatarLogo} alt={avatarLogo} />
            <Typography variant="body1">Nisa mengedit kadar Fe pada11:21 WITA</Typography>
          </Stack>
          <hr />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography variant="h5" sx={{ pb: 2 }}>
            09 Juni 2022
          </Typography>
          <Stack direction="row" spacing={2} sx={{ pb: 2 }}>
            <img src={avatarLogo} alt={avatarLogo} />
            <Typography variant="body1">Nisa mengedit kadar nikel pada13:21 WITA</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ pb: 2 }}>
            <img src={avatarLogo} alt={avatarLogo} />
            <Typography variant="body1">Putri Devina input data laporan pada 11:21 WITA</Typography>
          </Stack>
          <hr />
        </Grid>
      </Grid>
    </div>
  );
}
