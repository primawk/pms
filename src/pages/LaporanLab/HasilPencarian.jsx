import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import avatarLogo from 'assets/Images/avatar.png';
import Header from 'components/Header';
import { Grid, Button, Tab, Tabs, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import CustomPagination from '../../components/Pagination/index';

export default function HasilPencarian() {
  return (
    <div
      style={{
        backgroundColor: '#F9FBFC',
        width: '100%',
        height: 'auto',
        overflow: 'visible', // it makes this container follow the height of its content
        position: 'relative'
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{
          backgroundImage: `url(/img/dashboard.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '9.375rem',
          margin: 0
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', height: '9.375rem' }}>
          <div
            style={{
              marginLeft: '3rem',
              display: 'flex',
              direction: 'row',
              alignItems: 'center'
            }}
          >
            <div style={{ marginTop: '0.4rem', marginRight: '1.5rem' }}>
              <Icon icon="icomoon-free:lab" color="white" fontSize="1.5rem" />
            </div>
            <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>Laporan Lab</h2>
          </div>
        </div>
      </Grid>

      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          width: '94%',
          height: '12.625rem',
          marginLeft: '3%',
          marginTop: '1.125rem',
          borderRadius: '8px 8px 8px 8px'
        }}
      >
        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              height: '4.625rem',
              borderBottom: 1,
              borderBottomColor: '#E0E0E0',
              borderRadius: '8px 8px 0 0'
            }}
          >
            <Grid
              item
              sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1.5rem' }}
              xs={7}
            >
              <TextField
                id="outlined-basic"
                placeholder="Cari Nomor Sample/Nama Perusahaan/Requester"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="il:search" color="#828282" />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Button
              variant="contained"
              sx={{ width: '160px', height: '42px', marginRight: '1.5rem', boxShadow: 0 }}
            >
              Search
            </Button>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '4.625rem',
              borderRadius: '0 0 8px 8px'
            }}
          >
            <Grid
              item
              sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1.5rem' }}
              xs={2}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Jenis Laporan</InputLabel>

                <Select labelId="demo-simple-select-label" id="demo-simple-select">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1rem' }}
              xs={2}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter Tanggal | Hari ini </InputLabel>

                <Select labelId="demo-simple-select-label" id="demo-simple-select">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Button
              sx={{
                backgroundColor: 'transparent',
                outline: 'none',
                overflow: 'hidden',
                border: 'none',
                marginRight: '2.25rem',
                marginLeft: 'auto'
              }}
            >
              Clear All
            </Button>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              height: '4.625rem',
              borderRadius: '0 0 8px 8px'
            }}
          >
            <Grid item sx={{ backgroundColor: 'white', borderRadius: '4px', marginLeft: '1.5rem' }}>
              <h3>Hasil Pencarian “MS12-IO98P”</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*  */}
      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          width: '94%',
          height: 'auto',
          marginLeft: '3%', // percentage to make it responsive
          marginTop: '2.5rem',
          marginBottom: '1.125rem'
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        ></Grid>
        <Box sx={{ margin: '1.5rem 0 1.5rem 1.5rem' }}>
          <h3>Laporan Lab</h3>
        </Box>

        {/* internal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 1.5rem 1.5rem',
            width: '96.5%',
            height: '6.125rem',
            borderBottom: 1,
            borderBottomColor: '#E0E0E0',
            gap: '4.5rem'
          }}
        >
          <Grid item sx={{ margin: '0 0 0 1.5rem' }} xs={2}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Box>
                <img src="/img/eksternal.png"></img>
              </Box>

              <Grid item>
                <Grid
                  container
                  sx={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box sx={{ marginBottom: '0.5rem' }}>
                    <h5>Sample Test PIT</h5>
                  </Box>
                  <Box>
                    <h5 style={{ color: '#828282' }}>MS102-1098P</h5>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Column 2 */}
          <Grid item xs={1.5}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ marginBottom: '0.5rem' }}>
                <h5 style={{ color: '#828282' }}>Bukit</h5>
              </Box>
              <Box>
                <h5>Bukit IV</h5>
              </Box>
            </Grid>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={1.5}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ marginBottom: '0.5rem' }}>
                <h5 style={{ color: '#828282' }}>Dome/Tumpukan</h5>
              </Box>
              <Box>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Box>
                    <h5>2 Preparasi</h5>
                  </Box>
                  <Box sx={{ width: '5%', margin: '0 0.5rem 0 0.5rem' }}>
                    <img src="/img/eksternal.png"></img>
                  </Box>
                  <Box>
                    <h5>4 Analisa</h5>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={1.5}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ marginBottom: '0.5rem' }}>
                <h5 style={{ color: '#828282' }}>Dibuat Oleh</h5>
              </Box>
              <Box>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Box sx={{ width: '1.5rem', margin: '0 0.5rem 0 0' }}>
                    <img src={avatarLogo}></img>
                  </Box>
                  <Box sx={{ margin: '0 0.5rem 0 0.5rem' }}>
                    <h5>Putri Devina</h5>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* Column 5 */}
          <Grid item xs={1.5}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ marginBottom: '0.5rem' }}>
                <h5 style={{ color: '#828282' }}>Tanggal Laporan Dibuat</h5>
              </Box>
              <Box>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Box>
                    <h5>12/01/2022</h5>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}