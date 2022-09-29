import { Grid, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({ name, image, value, date, children, sx }) => {
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
        ...sx
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="body">{name}</Typography>
        {image && <img src={image} alt={name} style={{ maxWidth: '80px', maxHeight: '25px' }} />}
      </Grid>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center">
        <Typography variant="h4" sx={{ marginRight: '20px' }}>
          {value}
        </Typography>
        {children}
      </Grid>
      {date && (
        <Typography variant="body" color=" #828282">
          {date}
        </Typography>
      )}
    </Grid>
  );
};

export default InfoCard;
