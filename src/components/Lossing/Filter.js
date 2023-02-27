import React from 'react';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filter = ({ hillName, sort, setSort }) => {
  return (
    <>
      <Grid
        item
        container
        sx={{
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0'
        }}
      >
        <Grid
          item
          sx={{
            fontWeight: '700',
            fontSize: '24px',
            marginLeft: '24px'
          }}
          xs={12}
          sm={6}
        >
          List Modul Lossing {hillName}
        </Grid>
        <Grid item sx={{ padding: '24px 0 24px 24px', marginRight: '24px' }} xs={12} sm={2.5}>
          <Grid container sx={{}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">Urutan | Terbaru</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                fullWidth
                label="Urutan | Terbaru"
              >
                {/* if value an empty string it wont show the value */}
                <MenuItem value="terbaru">Urutan | Terbaru</MenuItem>
                <MenuItem value="terlama">Urutan | Terlama</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
