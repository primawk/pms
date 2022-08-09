import React, { useState } from 'react';
import { Button, Grid, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import filterIcon from '@iconify/icons-carbon/filter';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

// components
import { LoadingModal } from 'components/Modal';

// // services
// import ProductionService from 'services/Dashboard';

// const years = ['2020', '2021', '2022'];

const FilterSection = ({
  handleChangeSubMenu,
  isLoading,
  subMenu,
  setSelectedYear,
  years,
  isFetching
}) => {
  // passed variable undefined i use this
  const [value, setValue] = useState(0);

  if (!years) {
    return null;
  }

  const handleSubmit = () => {
    setSelectedYear(parseInt(value));
  };

  const handleReset = () => {
    setSelectedYear(years[0]);
  };

  return (
    <>
      {isFetching && isLoading && <LoadingModal />}
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
                required
                label="Tahun"
                name="selectedYear"
                defaultValue={years[0]}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Tahun"
                fullWidth
              >
                {years?.map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={1} xs={12}>
            <Button fullWidth variant="text" onClick={handleReset}>
              Clear
            </Button>
          </Grid>

          <Grid item>
            <Button fullWidth variant="outlined" onClick={handleSubmit}>
              <Icon style={{ fontSize: '17px' }} icon={filterIcon} />
              <div style={{ marginLeft: '1rem' }}>Filter</div>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterSection;
