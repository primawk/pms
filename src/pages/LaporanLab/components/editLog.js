import React from 'react';
import { Grid, Box } from '@mui/material';
import dayjs from 'dayjs';
import Lists from './ListEdit';

const editLog = (date, index) => {
  const value = Object.values(date.value[date?.date], index).map(({ description }) => description);
  const name = Object.values(date.value[date?.date], index).map(({ account_name }) => account_name);
  var output = value.map(function (obj, index) {
    var myobj = {};
    myobj[name[index]] = obj;
    return myobj;
  });

  return (
    <>
      <Grid
        item
        sx={{
          height: '14%',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          width: '50rem'
        }}
      >
        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Dates */}
          <Box style={{ margin: '1rem 0.5rem 1rem 2rem', fontSize: '1rem' }}>
            {dayjs(date?.date).format('DD MMMM YYYY')}
          </Box>
          <Lists data={value} name={name} />
        </Grid>
      </Grid>
    </>
  );
};

export default editLog;
