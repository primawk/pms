import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import useAuth from 'hooks/useAuth';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomPagination from 'components/Pagination';
import { Icon } from '@iconify/react';
import { LoadingModal } from 'components/Modal';

// components
import Header from 'components/Header';
import Information from '../../components/Lossing/LossingInformation';
import List from '../../components/Lossing/List';
import InputLossing from 'components/Modal/Lossing/InputLossing';
import Detail from './Detail';
import InformationBox from '../../components/Lossing/InformasiBox';

// custom hooks
import useModal from '../../hooks/useModal';

const Summary = ({ setPage, data, isFetching, setI }) => {
  useAuth();
  const [detail, setDetail] = useState(false);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(data);

  const { isShowing, toggle } = useModal();
  return (
    <>
      {isFetching && <LoadingModal />}
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
              xs={12}
              sm={6}
            >
              Summary {data?.hill_name}
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
            <InformationBox title="Total Semua Lossing" quantity={data?.loss_total} />
            <InformationBox
              title="Total Lossing Estimasi to Front"
              quantity={data?.loss_est_to_ore}
            />
            <InformationBox title="Total Lossing Front to ETO" quantity={data?.loss_front_to_eto} />
            <InformationBox title="Total Lossing ETO to EFO" quantity={data?.loss_eto_to_efo} />
            <InformationBox
              title="Total Lossing EFO to Barging"
              quantity={data?.loss_efo_to_ship}
            />

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
                xs={12}
                sm={6}
              >
                List Modul Lossing {data?.hill_name}
              </Grid>
              <Grid item sx={{ padding: '24px 0 24px 24px', marginRight: '24px' }} xs={12} sm={2.5}>
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

            {/* list Bukit */}
            {data?.detail?.map((item, index) => (
              <List data={item} setPage={setPage} index={index} setI={setI} />
            ))}
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
