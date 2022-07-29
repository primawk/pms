import React from 'react';
import { Grid, Button } from '@mui/material';
import PropTypes from 'prop-types';

export default function Footer({ handleBack }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      className="footer"
      sx={{ p: 2 }}
    >
      <Grid item lg={1.5} sx={{ pr: 3 }}>
        <Button fullWidth variant="outlined" onClick={handleBack}>
          Back
        </Button>
      </Grid>
      <Grid item lg={2.5}>
        <Button variant="contained" fullWidth type="submit">
          Submit Laporan
        </Button>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  handleBack: PropTypes.func
};
