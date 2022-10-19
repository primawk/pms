import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import useAuth from 'hooks/useAuth';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomPagination from 'components/Pagination';
import { Icon } from '@iconify/react';

// components
import Header from 'components/Header';
import Information from '../../components/Lossing/LossingInformation';
import List from '../../components/Lossing/List';
import InputLossing from 'components/Modal/Lossing/InputLossing';
import Detail from './Detail';

// custom hooks
import useModal from '../../hooks/useModal';

const Summary = ({ setPage }) => {
  useAuth();
  const [detail, setDetail] = useState(false);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { isShowing, toggle } = useModal();
  return (
    <>
      <InputLossing toggle={toggle} isShowing={isShowing} />
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
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
                // padding: '24px 0 24px 24px',
                // marginLeft: '1rem'
              }}
            >
              <Grid
                item
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Grid item>
                  <Icon icon="akar-icons:arrow-left" color="#3f48c0" />
                </Grid>
                <Grid item onClick={() => setPage('')}>
                  <h2
                    style={{
                      marginLeft: '12px',
                      fontWeight: '500',
                      fontSize: '14px'
                    }}
                  >
                    Back
                  </h2>
                </Grid>
              </Grid>
              <Grid item sx={{ padding: '24px 0 24px 24px', marginRight: '24px' }} xs={9}>
                <Button sx={{ backgroundColor: '#E5E5FE' }}>
                  <img src="/img/download-loss.png" alt=""></img>
                  <Box sx={{ marginLeft: '1rem' }}>Download Laporan </Box>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container sx={{ justifyContent: 'space-around' }}>
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
                  justifyContent: 'space-between'
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
                  justifyContent: 'space-between'
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
                  flexDirection: 'column',
                  justifyContent: 'space-between'
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
                  flexDirection: 'column',
                  justifyContent: 'space-between'
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
            <Information toggle={toggle} />
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
                      <MenuItem value="">Urutan | Terbaru</MenuItem>
                      <MenuItem value={10}>Lossing : Tertinggi</MenuItem>
                      <MenuItem value={21}>Lossing : Terendah</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <List setPage={setPage} />
            <List />
            <List />
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
            <Grid item sx={{ width: '100%' }}>
              <CustomPagination
              // count={ceilTotalData(posts?.data?.pagination?.total_data || 0, 15)}
              // count={ceilTotalData(posts?.data?.pagination?.total_data || 0, 15)}
              // page={page}
              // handleChangePage={handleChangePage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Summary;
