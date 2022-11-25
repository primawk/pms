import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterDate from 'components/Modal/LaporanLab/FilterDate';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SearchBar = ({ toggle, sort, setSort, keyword, setKeyword }) => {
  const handleChange = (event) => {
    setSort(event.target.value);
  };

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
          borderRadius: '8px 8px 0 0'
        }}
        spacing={0}
      >
        <Grid item sx={{ margin: '1.5rem 0 1.5rem 1.5rem ' }} xs={12} sm={2.3}>
          <h2>List Bank Data</h2>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            marginBottom: { xs: '0.5rem', sm: '0', md: '0' }
            // marginLeft: '1.5rem'
            // width: '45%'
          }}
          xs={12}
          sm={4.5}
        >
          <TextField
            id="search"
            placeholder="Cari Data"
            variant="outlined"
            value={keyword}
            fullWidth
            onChange={(e) => setKeyword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="il:search" color="#828282" />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        {/* <Button
      sx={{
        border: 1,
        borderRadius: '4px',
        marginLeft: '1rem',
        height: '3.4rem',
        width: '20%',
        borderColor: '#BDBDBD',
        cursor: 'pointer',
        color: 'black'
      }}
      onClick={toggleDate}
    >
      {selectedDates.startDate
        ? `Filter Tanggal | ${dayjs(selectedDates.startDate).format('DD/MM/YYYY')} - ${dayjs(
            selectedDates.endDate
          ).format('DD/MM/YYYY')} `
        : 'Filter Tanggal | Hari ini'}
      <Icon icon="fe:drop-down" color="#828282" />
    </Button> */}
        <Grid item xs={12} sm={2} sx={{ marginBottom: { xs: '0.5rem', sm: '0', md: '0' } }}>
          {/* <Button
            sx={{
              border: 1,
              borderRadius: '4px',
              marginLeft: '1rem',
              height: '3.4rem',
              borderColor: '#BDBDBD',
              cursor: 'pointer',
              color: 'black'
            }} */}
          {/* // onClick={toggleDate} */}
          {/* > */}
          {/* {selectedDates.startDate
              ? `Filter Tanggal | ${dayjs(selectedDates.startDate).format('DD/MM/YYYY')} - ${dayjs(
                  selectedDates.endDate
                ).format('DD/MM/YYYY')} `
              : 'Filter Tanggal | Hari ini'} */}
          {/* Urutkan | Terbaru
            <Icon icon="fe:drop-down" color="#828282" />
          </Button> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">Urutan | Terbaru</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={sort}
              onChange={handleChange}
              fullWidth
              label="Urutan | Terbaru"
            >
              {/* <MenuItem value="">Jenis Dokumen | Semua</MenuItem> */}
              <MenuItem value="asc">Urutan | Terbaru</MenuItem>
              <MenuItem value="desc">Urutan | Terlama</MenuItem>
              {/* <MenuItem value={22}>Jenis Dokumen | Surat Menyurat</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ marginRight: '1rem' }}>
          <Button
            // onClick={handleSubmit}
            variant="contained"
            sx={{
              height: '3.4rem',
              boxShadow: 0,
              padding: 3
            }}
            onClick={toggle}
          >
            Input Bank Data
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBar;
