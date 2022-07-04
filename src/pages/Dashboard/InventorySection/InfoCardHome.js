import { Grid, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({ name, image, value }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="space-between"
      item
      md={2}
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: ' 4px',
        padding: '16px 12px',
        mt: 2,
        mb: 2,
        minWidth: '100%',
        minHeight: '3rem'
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2, minHeight: '3rem' }}
      >
        <Typography variant="body" sx={{ width: '52%'}}>{name}</Typography>
        <img src={image} alt={name} style={{ maxWidth: '80px', maxHeight: '25px' }} />
      </Grid>
      <Typography variant="h4">{value}</Typography>
    </Grid>
  );
};

export default InfoCard;
