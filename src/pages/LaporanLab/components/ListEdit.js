import React from 'react';
import { Grid } from '@mui/material';
import { Icon } from '@iconify/react';

const ListEdit = ({ data }) => {
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
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.1rem',
                        gap: '1rem'
                      }}
                    >
                      <Icon icon="bxs:user-circle" color="#3f48c0" fontSize={24} /> {key}{' '}
                      {row[Object.keys(row)[index2]]}
                    </div>
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
