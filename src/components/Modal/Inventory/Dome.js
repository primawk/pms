import React from 'react';
import { Grid, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';

const Dome = () => {
  return (
    <Grid item>
      <Box sx={{ margin: '0.5rem 0 0.5rem 0', fontSize: '0.875rem' }}>Dome</Box>
      <FormControl size="small" variant="outlined" sx={{ width: '22.063rem' }}>
        <InputLabel>Dome</InputLabel>
        <OutlinedInput
          // value={values.password}
          // onChange={handleChange('password')}
          endAdornment={
            <IconButton>
              <Icon icon="ant-design:delete-filled" color="#3f48c0" />
            </IconButton>
          }
          label="Dome"
        />
      </FormControl>
    </Grid>
  );
};

export default Dome;
