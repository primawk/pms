import React from 'react';
import { Grid } from '@mui/material';

// components
import Header from 'components/Header';

const BankData = () => {
  return (
    <>
      <Header title="BANK DATA" background="dashboard.png" />
      <div className="app-content">
        <Grid container sx={{ background: 'red', display: 'flex', flexDirection: 'column' }}>
          <Grid item sx={{ fontWeight: '700', fontSize: '24px', padding: '24px 24px 0 24px' }}>
            Informasi Jenis Bank Data
          </Grid>
          {/* <Grid item sx={{ margin: '0 16px 0 16px', backgroundColor: 'green' }}> */}
          {/* use grid item container instead container inside item, case where we using padding instead margin */}
          <Grid item container spacing={2} sx={{ padding: '24px 24px 24px 24px' }}>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Total Dokumen
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }}>
                    2
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Dokumen Legal
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }}>
                    2
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Dokumen Kontrak
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }}>
                    2
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid sx={{ border: 1, borderColor: 'lightGray', borderRadius: '4px' }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                        Dokumen Surat Menyurat
                      </Grid>
                      <Grid
                        item
                        sx={{ margin: '0 0 16px 16px', fontWeight: '700', fontSize: '28px' }}
                      >
                        82
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ padding: '16px 16px 0 0' }}>
                    2
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </div>
    </>
  );
};

export default BankData;
