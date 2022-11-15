import React from 'react';
import { Grid } from '@mui/material';

export default function Header({ children, title, background, sx, isCenter }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent={isCenter ? 'flex-start' : 'space-between'}
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
      {title && (
        <Grid item sx={{ mr: 1 }}>
          <h2 style={{ color: 'white' }}>{title}</h2>
        </Grid>
      )}
      <Grid item md={isCenter && !title && 12}>
        {children}
      </Grid>
    </Grid>
  );
}
