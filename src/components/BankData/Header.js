import React from 'react';
import { Grid } from '@mui/material';

export default function Header({ children, title, background, sx }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        backgroundImage: `url(/img/${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '21vh',
        padding: 8,
        margin: 0,
        ...sx
      }}
    >
      <Grid item sx={{ mr: 1, color: 'white', fontSize: '16px', fontWeight: '700' }}>
        BANK DATA
      </Grid>

      <Grid item md={12} sx={{ color: 'white', fontSize: '24px', fontWeight: '700' }}>
        {title}
      </Grid>
    </Grid>
  );
}
