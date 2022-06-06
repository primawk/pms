import React, { useState } from 'react';
import { Button, Grid, TextField, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import filterIcon from '@iconify/icons-carbon/filter';

const months = [
  {
    value: 1,
    label: 'Januari'
  },
  {
    value: 2,
    label: 'Februari'
  },
  {
    value: 3,
    label: 'Maret'
  },
  {
    value: 4,
    label: 'April'
  },
  {
    value: 5,
    label: 'Mei'
  },
  {
    value: 6,
    label: 'Juni'
  },
  {
    value: 7,
    label: 'Juli'
  },
  {
    value: 8,
    label: 'Agustus'
  },
  {
    value: 9,
    label: 'Septemer'
  },
  {
    value: 10,
    label: 'Oktober'
  },
  {
    value: 11,
    label: 'November'
  },
  {
    value: 12,
    label: 'Desember'
  }
];

const years = ['2020', '2021', '2022'];

const FilterSection = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);

  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: '80vw' }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        item
        md={3}
        sx={{
          padding: '24px 12px'
        }}
      >
        <Button sx={{ mr: 2, height: '42px', width: '120px' }} variant="outlined">
          Grafik
        </Button>
        <Button sx={{ height: '42px', width: '120px' }} variant="outlined">
          Data target
        </Button>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        item
        md={9}
        sx={{
          border: '1px solid #E0E0E0',
          borderRadius: '8px',
          padding: '24px 12px'
        }}
      >
        <Grid item md={3}>
          <TextField
            id="outlined-select-currency"
            select
            label="Bulan"
            value={selectedMonth}
            onChange={handleChange}
            placeholder="Bulan"
            fullWidth
          >
            {months.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item md={3}>
          <TextField
            id="outlined-select-currency"
            select
            label="Tahun"
            value={selectedMonth}
            onChange={handleChange}
            placeholder="Tahun"
            fullWidth
          >
            {years.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item md={2}>
          <Button fullWidth variant="text">
            Clear
          </Button>
        </Grid>

        <Grid item md={2}>
          <Button fullWidth variant="outlined">
            <Icon style={{ fontSize: '17px' }} icon={filterIcon} />
            Filter
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterSection;
