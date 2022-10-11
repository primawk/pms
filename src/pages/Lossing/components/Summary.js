import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import useAuth from 'hooks/useAuth';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import Header from 'components/Header';
import Information from './LossingInformation';
import List from './List';

const Summary = () => {
  useAuth();
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Header title="MODUL LOSSING" background="dashboard.png" />
      <div className="app-content">
        <Grid container sx={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
          <Grid
            item
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
                marginLeft: '24px'
              }}
              xs={6}
            >
              Summary Bukit VIII
            </Grid>
            <Grid item sx={{ padding: '24px 0 24px 24px', marginRight: '24px' }}>
              <Grid container sx={{}}>
                <Button sx={{ backgroundColor: '#E5E5FE' }}>
                  <img src="/img/download-loss.png" alt=""></img>
                  <Box sx={{ marginLeft: '1rem' }}>Download Laporan </Box>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container sx={{ justifyContent: 'space-around' }} gap={1}>
            <Grid
              item
              container
              sx={{
                justifyContent: 'space-between',
                border: 1,
                borderColor: 'lightGray',
                borderRadius: '4px'
              }}
              xs={2.5}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'space-between',
                  backgroundColor: 'yellow'
                }}
                xs={10}
              >
                <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                  Total Semua Lossing
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
                    <Grid item>370 Ton</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ padding: '16px 16px 0 0' }} xs={2}>
                <img src="/img/katalog-lossing.png" alt=""></img>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={{
                justifyContent: 'space-between',
                border: 1,
                borderColor: 'lightGray',
                borderRadius: '4px'
              }}
              xs={2.5}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'space-between',
                  backgroundColor: 'yellow'
                }}
                xs={10}
              >
                <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                  Total Lossing Front to ETO
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
            <Grid
              item
              container
              sx={{
                justifyContent: 'space-between',
                border: 1,
                borderColor: 'lightGray',
                borderRadius: '4px'
              }}
              xs={2.5}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
                xs={10}
              >
                <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                  Total Lossing ETO to EFO
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
            <Grid
              item
              container
              sx={{
                justifyContent: 'space-between',
                border: 1,
                borderColor: 'lightGray',
                borderRadius: '4px'
              }}
              xs={2.5}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
                xs={10}
              >
                <Grid item sx={{ margin: '16px 0 16px 16px', fontWeight: '400' }}>
                  Total Lossing EFO to Barging
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
            <Information />
            <Grid
              item
              container
              sx={{
                background: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: 1,
                borderBottomColor: '#E0E0E0'
              }}
            >
              <Grid
                item
                sx={{
                  fontWeight: '700',
                  fontSize: '24px',
                  marginLeft: '24px'
                }}
                xs={6}
              >
                List Modul Lossing Bukit VIII
              </Grid>
              <Grid item sx={{ padding: '24px 0 24px 24px', marginRight: '24px' }} xs={2.5}>
                <Grid container sx={{}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Urutan | Terbaru
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      fullWidth
                      label="Urutan | Terbaru"
                    >
                      <MenuItem value="">Jenis Dokumen | Semua</MenuItem>
                      <MenuItem value={10}>Jenis Dokumen | Legal</MenuItem>
                      <MenuItem value={21}>Jenis Dokumen | Kontrak</MenuItem>
                      <MenuItem value={22}>Jenis Dokumen | Surat Menyurat</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <List />
            <List />
            <List />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Summary;
