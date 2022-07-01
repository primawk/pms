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
import FilterSection from './FilterSection';
import InfoSection from './InfoSection';
import ChartSection from './ChartSection';
import InventorySection from './InventorySection';
import TextField from '@mui/material/TextField';
import CustomPagination from '../../components/Pagination/index';

import TargetDataTable from './TargetDataTable';
import TargetDataInformation from './TargetDataInformation';
// import CustomPagination from 'components/Pagination';
import { nominalTypeHack } from 'prop-types';

export default function LaporanLab() {
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
          height: '9.25rem',
          marginLeft: '3%',
          marginTop: '1.125rem',
          borderRadius: '8px 8px 8px 8px'
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
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
            backgroundColor: 'white',
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
              <Select
                labelId="demo-simple-select-label"
                label="Jenis Laporan"
                id="demo-simple-select"
              >
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

              <Select
                labelId="demo-simple-select-label"
                label="Filter Tanggal | Hari ini"
                id="demo-simple-select"
              >
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
          marginTop: '1.125rem',
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
        >
          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              width: '10rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1.5rem '
            }}
            xs={2}
          >
            <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Semua Laporan</Box>
            <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>171</Box>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              marginLeft: '1rem',
              width: '10rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1rem '
            }}
            xs={2}
          >
            <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Internal</Box>
            <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>71</Box>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '0.25rem',
              marginLeft: '1.5rem',
              width: '10rem',
              height: '6.4375rem',
              margin: '1.5rem 1rem 1.5rem 1rem'
            }}
            xs={2}
          >
            <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Laporan Eksternal</Box>
            <Box sx={{ margin: '0.75rem 1rem 1rem 1rem', fontSize: '1.5rem' }}>100</Box>
          </Grid>
          <Button
            variant="contained"
            sx={{
              width: '15.625',
              height: '42px',
              marginRight: '1.5rem',
              marginLeft: 'auto',
              boxShadow: 0
            }}
          >
            Input Laporan Lab
          </Button>
        </Grid>
        <Box sx={{ margin: '0 0 1.5rem 1.5rem' }}>
          <h3>List Laporan Lab</h3>
        </Box>

        {/* Ekesternal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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
                <img src="/img/eksternal.png" alt='' ></img>
              </Box>
              <Grid item>
                <Box>
                  <h5>PT Mandala Jaya</h5>
                </Box>
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
                <h5 style={{ color: '#828282' }}>Jumlah Pengajuan</h5>
              </Box>
              <Box>
                <h5>6</h5>
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
                <h5 style={{ color: '#828282' }}>Informasi Sample</h5>
              </Box>
              <Box>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Box>
                    <h5>2 Preparasi</h5>
                  </Box>
                  <Box sx={{ width: '5%', margin: '0 0.5rem 0 0.5rem' }}>
                    <img src="/img/eksternal.png" alt=''></img>
                  </Box>
                  <Box>
                    <h5>4 Analisa</h5>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* internal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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

        {/* Ekesternal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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
                <Box>
                  <h5>PT Mandala Jaya</h5>
                </Box>
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
                <h5 style={{ color: '#828282' }}>Jumlah Pengajuan</h5>
              </Box>
              <Box>
                <h5>6</h5>
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
                <h5 style={{ color: '#828282' }}>Informasi Sample</h5>
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
        </Grid>

        {/* internal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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

        {/* Ekesternal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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
                <Box>
                  <h5>PT Mandala Jaya</h5>
                </Box>
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
                <h5 style={{ color: '#828282' }}>Jumlah Pengajuan</h5>
              </Box>
              <Box>
                <h5>6</h5>
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
                <h5 style={{ color: '#828282' }}>Informasi Sample</h5>
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
        </Grid>

        {/* internal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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

        {/* Ekesternal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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
                <Box>
                  <h5>PT Mandala Jaya</h5>
                </Box>
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
                <h5 style={{ color: '#828282' }}>Jumlah Pengajuan</h5>
              </Box>
              <Box>
                <h5>6</h5>
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
                <h5 style={{ color: '#828282' }}>Informasi Sample</h5>
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
        </Grid>

        {/* internal */}
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1.5rem 0 1.5rem',
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

        {/* Pagination */}
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginRight: '3rem'
          }}
        >
          <Grid item sx={{}}>
            <CustomPagination />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
