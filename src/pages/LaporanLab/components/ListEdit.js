import React from 'react';
import { Grid } from '@mui/material';

const ListEdit = ({ data }) => {
  console.log(data);
  return (
    <>
      <Grid item>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '1.5rem'
          }}
        >
          {/* Activity */}
          {/* <Grid item sx={{ margin: '0 0.5rem 0 2rem' }}>
            <img src="/img/avatar1.png" alt=""></img>
          </Grid>
          <Grid item>
            {data?.map((item) => (
              <Box style={{ fontSize: '1rem' }}> {item}</Box>
            ))}
          </Grid>
        </Grid> */}
          {/* </Grid> */}
          {data.map((row) => (
            <>
              {Object.keys(row).map(function (key, index2) {
                return (
                  <>
                    <li style={{ fontSize: '1rem' }}>
                      {key} {row[Object.keys(row)[index2]]}
                    </li>
                  </>
                );
              })}
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ListEdit;
