import React from 'react';
import { Grid } from '@mui/material';

export default function Header({ children, title, page }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundImage: `url(/img/${page}.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '21vh',
        padding: 5
      }}
    >
      <Grid item>
        <h1 style={{ color: 'white' }}>{title}</h1>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}
