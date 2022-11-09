import React from 'react';
import { Grid, Button } from '@mui/material';

const Katalog = ({ setPage, name, loss, setId, id }) => {
  const onBtnClick = () => {
    setPage('summary');
    setId(id);
  };
  return (
    <>
      <Grid item xs={12} sm={3.8} sx={{ background: 'white' }}>
        <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
            {name}
          </Grid>
          <Grid item sx={{ fontWeight: 400, margin: '0 16px 16px 16px' }}>
            <Grid container sx={{ alignItems: 'center' }}>
              <Grid item sx={{ marginRight: '1rem' }}>
                <img src="/img/down.png" alt=""></img>
              </Grid>
              <Grid item sx={{ alignItems: 'center', color: '#DA4540' }}>
                {loss} Ton
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}
            onClick={onBtnClick}
          >
            Lihat Selengkapnya {'>'}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Katalog;
