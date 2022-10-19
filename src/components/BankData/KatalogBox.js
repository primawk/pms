import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const KatalogBox = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid item xs={3.8} sx={{ background: 'white' }}>
        <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
            Jenis Dokumen
          </Grid>
          <Grid item sx={{ fontWeight: 400, padding: '0 16px 16px 16px' }}>
            {title}
          </Grid>
          <Grid
            item
            sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}
            onClick={() => navigate('/bank-data/list', { state: { title } })}
          >
            Lihat Selengkapnya {'>'}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default KatalogBox;
