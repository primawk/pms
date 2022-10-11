import React from 'react';
import { Grid, Button } from '@mui/material';
import useAuth from 'hooks/useAuth';

// components
import Header from 'components/Header';

const Katalog = () => {
  useAuth();
  return (
    <>
      <Header title="MODUL LOSSING" background="dashboard.png" />
      <div className="app-content">
        <Grid
          container
          sx={{
            background: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Grid
            item
            sx={{
              fontWeight: '700',
              fontSize: '24px',
              padding: '0 0 0 24px',
              alignContent: 'center'
            }}
            xs={8}
          >
            Katalog Modul Lossing
          </Grid>
          <Grid item sx={{ padding: '24px 24px 24px 24px' }} xs={4}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                border: 1,
                borderColor: 'lightGray',
                borderRadius: '4px'
              }}
            >
              <Grid container sx={{ justifyContent: 'space-between' }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }} xs={10}>
                  <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                    Total Lossing Semua Bukit
                  </Grid>
                  <Grid
                    item
                    sx={{
                      margin: '0 0 16px 16px',
                      fontWeight: '700',
                      fontSize: '28px',
                      color: '#DA4540'
                    }}
                  >
                    <Grid container>
                      <Grid item sx={{ padding: '16px 16px 0 0' }} xs={2}>
                        <img src="/img/down.png" alt=""></img>
                      </Grid>
                      370 Ton
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ padding: '16px 16px 0 0' }} xs={2}>
                  <img src="/img/katalog-lossing.png" alt=""></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '24px',
            justifyContent: 'space-between'
          }}
          gap={1}
        >
          <Grid item xs={3.8} sx={{ background: 'white' }}>
            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
                Bukit IV
              </Grid>
              <Grid item sx={{ fontWeight: 400, margin: '0 16px 16px 16px' }}>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid item sx={{ marginRight: '1rem' }}>
                    <img src="/img/down.png" alt=""></img>
                  </Grid>
                  <Grid item sx={{ alignItems: 'center', color: '#DA4540' }}>
                    370 Ton
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}>
                Lihat Selengkapnya {'>'}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.8} sx={{ background: 'white' }}>
            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
                Bukit IV
              </Grid>
              <Grid item sx={{ fontWeight: 400, margin: '0 16px 16px 16px' }}>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid item sx={{ marginRight: '1rem' }}>
                    <img src="/img/down.png" alt=""></img>
                  </Grid>
                  <Grid item sx={{ alignItems: 'center', color: '#DA4540' }}>
                    370 Ton
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}>
                Lihat Selengkapnya {'>'}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.8} sx={{ background: 'white' }}>
            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
                Bukit IV
              </Grid>
              <Grid item sx={{ fontWeight: 400, margin: '0 16px 16px 16px' }}>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid item sx={{ marginRight: '1rem' }}>
                    <img src="/img/down.png" alt=""></img>
                  </Grid>
                  <Grid item sx={{ alignItems: 'center', color: '#DA4540' }}>
                    370 Ton
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}>
                Lihat Selengkapnya {'>'}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.8} sx={{ background: 'white' }}>
            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ fontWeight: 600, padding: '16px' }}>
                Bukit IV
              </Grid>
              <Grid item sx={{ fontWeight: 400, margin: '0 16px 16px 16px' }}>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid item sx={{ marginRight: '1rem' }}>
                    <img src="/img/down.png" alt=""></img>
                  </Grid>
                  <Grid item sx={{ alignItems: 'center', color: '#DA4540' }}>
                    370 Ton
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}>
                Lihat Selengkapnya {'>'}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Katalog;
