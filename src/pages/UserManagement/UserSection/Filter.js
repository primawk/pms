import React from 'react';
import { useQuery } from 'react-query';
import { Button, Grid, TextField, MenuItem, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';
import SearchIcon from '@iconify-icons/akar-icons/search';
import PropTypes from 'prop-types';

// services
import RoleService from 'services/RoleService';

const Filter = ({ onSubmit, filter, onChange }) => {
  const { data, isFetching } = useQuery('roles', () => RoleService.getRole());

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit(event);
    }
  };

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
            name="search"
            onKeyDown={handleKeyDown}
            value={filter.search}
            onChange={onChange}
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
          <TextField
            select
            label="Role"
            placeholder="Role"
            fullWidth
            size="small"
            name="role"
            value={filter.role}
            onChange={onChange}
          >
            {!isFetching ? (
              data?.data?.data.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="" disabled>
                Loading . . .
              </MenuItem>
            )}
          </TextField>
        </Grid>
      </Grid>

      <Grid item md={2} lg={1} sm={10} xs={10} className="user-submit-filter">
        <Button fullWidth variant="contained" onClick={onSubmit} disabled={isFetching}>
          {isFetching ? 'Loading' : 'Cari'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;

Filter.propTypes = {
  onSubmit: PropTypes.func,
  filter: PropTypes.object,
  onChange: PropTypes.func
};
