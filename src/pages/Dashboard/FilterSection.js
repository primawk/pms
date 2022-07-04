import React, { useState } from 'react';
import { Button, Grid, TextField, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import filterIcon from '@iconify/icons-carbon/filter';

const years = ['2020', '2021', '2022'];

const FilterSection = ({ handleChangeSubMenu, subMenu }) => {
  const [selectedYear, setSelectedYear] = useState('2022');

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
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleChangeSubMenu(0)}
            sx={subMenu === 0 ? { background: '#E5E5FE' } : {}}
          >
            Grafik
          </Button>
        </Grid>
        <Grid item md={5}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleChangeSubMenu(1)}
            sx={subMenu === 1 ? { background: '#E5E5FE' } : {}}
          >
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
          {/* <TextField
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
          </TextField> */}
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
