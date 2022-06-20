import React from 'react';
import { Grid } from '@mui/material';

export default function Header({ children, title, background }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundImage: `url(/img/${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '21vh',
        padding: 5,
        margin: 0
      }}
    >
      <Grid item>
        <h2 style={{ color: 'white' }}>{title}</h2>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}
