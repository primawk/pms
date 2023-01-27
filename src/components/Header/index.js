import React from 'react';
import { Grid, Box } from '@mui/material';

export default function Header({ children, title, background, sx, isCenter, score }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent={isCenter ? 'flex-start' : 'space-between'}
      // alignItems="center"
      sx={{
        backgroundImage: `url(/img/${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        width: '100%',
        // height: '21vh',
        // height: '20%',
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
      {score ? (
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '228px',
            height: '100px',
            backgroundColor: 'white',
            borderRadius: '4px',
            alignItems: 'center'
          }}
        >
          <Grid item sx={{ padding: '1rem' }} xs={4}>
            <img src="/img/score.png" alt="" />
          </Grid>
          <Grid item sx={{}} xs={8}>
            <Box>Skor Akhir</Box>
            <Box sx={{ fontSize: '24px', fontWeight: '700' }}>{score?.stok_akhir}</Box>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}
