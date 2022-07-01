import React from 'react';
import { Icon } from '@iconify/react';
import { Grid, Typography } from '@mui/material';
import ArrowDown from '@iconify-icons/charm/arrow-down';

const InventoryCard = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="space-between"
      rowGap={1}
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: ' 4px',
        padding: '16px 12px',
        width: '90%'
      }}
    >
      <Typography variant="body">Bukit 9 /DOME A </Typography>
      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
        <Typography mr={1} variant="h4">
          123,45 Ton
        </Typography>
        <Icon width={25} height={25} icon={ArrowDown} color="#DA4540" />
        <Typography variant="body2" color="#DA4540">
          2,5 Ton
        </Typography>
      </Grid>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ width: '45%' }}
        >
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ background: '#E5E5FE', padding: '0 0.2em' }}
            mr={1}
          >
            Ni
          </Typography>
          <Typography variant="body1">= 1,75%</Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ width: '45%' }}
        >
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ background: '#E5E5FE', padding: '0 0.2em' }}
            mr={1}
          >
            SiMg
          </Typography>
          <Typography variant="body1">= 1,75%</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
        <Typography mr={3}>Front to ETO</Typography>
        <Typography>3j yang lalu</Typography>
      </Grid>
    </Grid>
  );
};

export default InventoryCard;
