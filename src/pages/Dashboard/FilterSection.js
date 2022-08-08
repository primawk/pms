import React, { useState } from 'react';
import { Button, Grid, TextField, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import filterIcon from '@iconify/icons-carbon/filter';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
// import { useQuery } from 'react-query';

// // services
// import ProductionService from 'services/Dashboard';

// const years = ['2020', '2021', '2022'];

const FilterSection = ({ handleChangeSubMenu, selectedYear, subMenu, setSelectedYear, years }) => {
  // passed variable undefined i use this

  if (!years) {
    return null;
  }

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value);
  };

  // const handleSubmit = () => {
  //  c
  // };

  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          width="25%"
          // xs={12}
          // lg={3}
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
          width="55%"
          // xs={12}
          // lg={9}
          sx={{
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            padding: '12px 24px'
          }}
        >
          <Grid item md={4} xs={12} sx={{ padding: '0.5em 0' }}>
            <FormControl fullWidth>
              <InputLabel id="selectedYear">Tahun</InputLabel>
              <Select
                id="selectedYear"
                select
                label="Tahun"
                name="years"
                value={selectedYear}
                // onChange={(e) => setSelectedYear(e.target.value)}
                onChange={handleChangeYear}
                placeholder="Tahun"
                fullWidth
              >
                {/* {years.map((option, index) => (
                <MenuItem key={option[index]} value={option}>
                  {option}
                </MenuItem>
              ))} */}

                <MenuItem value={'2022'}>2022</MenuItem>
                <MenuItem value={'2021'}>2021</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={1} xs={12}>
            <Button fullWidth variant="text" onClick={setSelectedYear(0)}>
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
    </>
  );
};

export default FilterSection;
