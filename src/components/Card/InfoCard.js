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
        padding: '16px',
        mt: 2,
        mb: 2,
        minWidth: '210px'
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography>{name}</Typography>
        <img src={image} alt={name} style={{ maxWidth: '70px' }} />
      </Grid>
      <Typography variant="h4">{value}</Typography>
    </Grid>
  );
};

export default InfoCard;
