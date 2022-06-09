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
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState('2022');

  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        width="25%"
        xs={12}
        lg={3}
        item
        sx={{
          padding: '24px 0'
        }}
      >
        <Grid item md={5} mr={3}>
          <Button fullWidth variant="outlined">
            Grafik
          </Button>
        </Grid>
        <Grid item md={5}>
          <Button fullWidth variant="outlined">
            Data Target
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        item
        width="75%"
        xs={12}
        lg={9}
        sx={{
          border: '1px solid #E0E0E0',
          borderRadius: '8px',
          padding: '12px 24px'
        }}
      >
        <Grid item md={4} xs={12} sx={{ padding: '0.5em 0' }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Bulan"
            value={selectedMonth}
            onChange={handleChangeMonth}
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

        <Grid item md={4} xs={12} sx={{ padding: '0.5em 0' }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Tahun"
            value={selectedYear}
            onChange={handleChangeYear}
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

        <Grid item md={1} xs={12}>
          <Button fullWidth variant="text">
            Clear
          </Button>
        </Grid>

        <Grid item md={2} xs={12}>
          <Button fullWidth variant="outlined">
            <Icon style={{ fontSize: '17px', marginLeft: '-15px' }} icon={filterIcon} />
            Filter
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterSection;
