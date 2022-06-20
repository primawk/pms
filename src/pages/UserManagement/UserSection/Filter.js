import React from 'react';
import { Button, Grid, TextField, MenuItem, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';
import SearchIcon from '@iconify-icons/akar-icons/search';

const roles = ['Super Admin', 'Komisaris', 'Direksi', 'Admin Lab', 'Admin Operasional'];

const Filter = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      className="user-filter-container bg-white"
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        item
        spacing={3}
        md={10}
        lg={11}
      >
        <Grid item md={5} lg={4} sm={6} xs={12}>
          <TextField
            placeholder="Cari Username/Nama Lengkap"
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon width={25} height={25} icon={SearchIcon} />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item md={5} lg={4} sm={6} xs={12}>
          <TextField select label="Role" placeholder="Role" fullWidth size="small">
            {roles.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Grid item md={2} lg={1} sm={10} xs={10} className="user-submit-filter">
        <Button fullWidth variant="contained">
          Cari
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
