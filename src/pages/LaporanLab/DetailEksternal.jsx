import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';

const DetailInternal = () => {
  return (
    <div
      style={{
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: '100%',
        overflow: 'auto', // it makes this container follow the height of its content
        position: 'relative'
      }}
    >
      <Navbar />

      <Grid
        container
        sx={{
          display: 'flex',
          //   alignItems: 'flex-start',
          flexDirection: 'column',
          backgroundColor: 'white',
          height: '72.5rem',
          width: '90%',
          marginTop: '6rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 'auto',
          borderRadius: '4px'
        }}
      >
        <Grid item sx={{ height: '6%' }}>
          <Grid
            container
            sx={{ display: 'flex', flexDirection: 'row', margin: '1rem 0.5rem 0.3rem 2rem' }}
          >
            <Button variant="outlined" sx={{ marginRight: '1rem' }}>
              <Icon icon="akar-icons:arrow-back" color="#3f48c0" fontSize={16} />
              <div style={{ marginLeft: '1rem', fontWeight: '400' }}>Back</div>
            </Button>
            <Button variant="contained" sx={{ boxShadow: 0, fontWeight: '400' }}>
              Download Laporan
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ height: '19%', borderBottom: 1, borderBottomColor: '#E0E0E0', width: '30%' }}
        >
          <Box style={{ margin: '1rem 0.5rem 1rem 2rem', fontSize: '1rem' }}>
            Laporan Eksternal Lab
          </Box>
          <h2 style={{ margin: '0 0.5rem 1em 2rem' }}>MS12-IO98P</h2>
          <Box style={{ margin: '0 0.5rem 1rem 2rem', color: '#3F48C0', fontSize: '0.875rem' }}>
            Terakhir diedit oleh Putri Devina, pada 12 Juni 2022, 12:21 WITA
          </Box>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: '#E5E5FE',
              margin: '0 1rem 0.3rem 2rem',
              color: '#3F48C0',
              boxShadow: 0,
              border: '1px solid #3F48C0',
              width: '40%',
              fontWeight: '400'
            }}
          >
            Edit Laporan
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              margin: '0 0.5rem 0.3rem 0',
              color: '#3F48C0',
              boxShadow: 0,
              border: '1px solid #3F48C0',
              width: '40%',
              fontWeight: '400'
            }}
          >
            Delete Laporan
          </Button>
        </Grid>
        <Grid item sx={{}}>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '2.5rem 0.5rem 1.5rem 2rem' }}>Informasi Sample</h3>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid item>
                  <Box
                    style={{
                      margin: '0 0.5rem 0.5rem 2rem',
                      fontSize: '0.875rem',
                      width: '5.5rem'
                    }}
                  >
                    Tanggal
                  </Box>
                  <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                    12/02/2021
                  </Box>
                </Grid>
                <Grid item>
                  <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                    Nama Perusahaan
                  </Box>
                  <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                    PT Mandala Jaya
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '8rem'
              }}
            >
              <h3 style={{ margin: '2.5rem 0.5rem 1.5rem 0' }}>Hasil Analisa</h3>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Inc</Box>
                  <Box
                    sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem', fontWeight: '700' }}
                  >
                    546
                  </Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Tonase</Box>
                  <Box
                    sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem', fontWeight: '700' }}
                  >
                    12,3 Ton
                  </Box>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar Ni</Box>
                      <Box
                        sx={{
                          margin: '0.75rem 1rem 1rem 1rem',
                          fontSize: '1.5rem',
                          fontWeight: '700'
                        }}
                      >
                        1,70%
                      </Box>
                    </Grid>
                    <Grid item sx={{ margin: '1rem 1rem 0 0' }}>
                      <img src="/img/ni.png" alt=""></img>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar SiO</Box>
                      <Box
                        sx={{
                          margin: '0.75rem 1rem 1rem 1rem',
                          fontSize: '1.5rem',
                          fontWeight: '700'
                        }}
                      >
                        1,70%
                      </Box>
                    </Grid>
                    <Grid item>
                      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid item sx={{ margin: '1rem 0.3rem 0 0', fontSize: '1rem' }}>
                          <img src="/img/si.png" alt=""></img>
                        </Grid>
                        <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                          <img src="/img/o.png" alt=""></img>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar MgO</Box>
                      <Box
                        sx={{
                          margin: '0.75rem 1rem 1rem 1rem',
                          fontSize: '1.5rem',
                          fontWeight: '700'
                        }}
                      >
                        1,70%
                      </Box>
                    </Grid>
                    <Grid item>
                      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid item sx={{ margin: '1rem 0.3rem 0 0', fontSize: '1rem' }}>
                          <img src="/img/si.png" alt=""></img>
                        </Grid>
                        <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                          <img src="/img/o.png" alt=""></img>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar Fe</Box>
                      <Box
                        sx={{
                          margin: '0.75rem 1rem 1rem 1rem',
                          fontSize: '1.5rem',
                          fontWeight: '700'
                        }}
                      >
                        1,70%
                      </Box>
                    </Grid>
                    <Grid item>
                      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                          <img src="/img/fe.png" alt=""></img>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar CaO</Box>
                      <Box
                        sx={{
                          margin: '0.75rem 1rem 1rem 1rem',
                          fontSize: '1.5rem',
                          fontWeight: '700'
                        }}
                      >
                        1,70%
                      </Box>
                    </Grid>
                    <Grid item>
                      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid item sx={{ margin: '1rem 0.3rem 0 0', fontSize: '1rem' }}>
                          <img src="/img/ca.png" alt=""></img>
                        </Grid>
                        <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                          <img src="/img/o.png" alt=""></img>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar SiMgO</Box>
                      <Box
                        sx={{
                          margin: '0.75rem 1rem 1rem 1rem',
                          fontSize: '1.5rem',
                          fontWeight: '700'
                        }}
                      >
                        1,70%
                      </Box>
                    </Grid>
                    <Grid item>
                      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid item sx={{ margin: '1rem 0.1rem 0 0', width: '1.5rem' }}>
                          <img src="/img/si.png" alt=""></img>
                        </Grid>
                        <Grid item sx={{ margin: '1rem 0.1rem 0 0', width: '1.5rem' }}>
                          <img src="/img/mg.png" alt=""></img>
                        </Grid>
                        <Grid item sx={{ margin: '1rem 1rem 0 0', width: '1.5rem' }}>
                          <img src="/img/o.png" alt=""></img>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '0.25rem',
                    marginLeft: '1rem',
                    width: '14rem',
                    height: '6.4375rem',
                    margin: '0 1rem 1.5rem 0'
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar Co</Box>
                      <Box
                        sx={{
                          margin: '0.75rem 1rem 1rem 1rem',
                          fontSize: '1.5rem',
                          fontWeight: '700'
                        }}
                      >
                        1,70%
                      </Box>
                    </Grid>
                    <Grid item sx={{ margin: '1rem 1rem 0 0' }}>
                      <img src="/img/co.png" alt=""></img>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailInternal;
