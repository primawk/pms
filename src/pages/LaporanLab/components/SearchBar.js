import React from 'react';
import { Grid, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.625rem',
          borderRadius: '8px 8px 0 0'
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            marginLeft: '1.5rem',
            width: '45%'
          }}
        >
          <TextField
            id="outlined-basic"
            placeholder="Cari Nomor Sample/Nama Perusahaan/Requester"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="il:search" color="#828282" />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1rem', width: '20%' }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter Tanggal | Hari ini </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Filter Tanggal | Hari ini"
              id="demo-simple-select"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          variant="contained"
          sx={{ width: '14%', height: '3.4rem', marginLeft: '1rem', boxShadow: 0 }}
        >
          Search
        </Button>
        <Grid item>
          <Button
            sx={{
              backgroundColor: 'transparent',
              outline: 'none',
              overflow: 'hidden',
              border: 'none',
              marginRight: '1.5rem',
              marginLeft: '1rem'
            }}
          >
            Clear All
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBar;
