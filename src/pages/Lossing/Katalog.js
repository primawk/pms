import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import useAuth from 'hooks/useAuth';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import ArrowIcon from '@iconify/icons-bi/caret-down-fill';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

// components
import Header from 'components/Header';
import FilterDate from 'components/Modal/LaporanLab/FilterDate';

// custom hook
import useModal from 'hooks/useModal';

// custom button
const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: '#E5E5FE'
  }
}));

const Katalog = ({ setDetail, setSummary }) => {
  useAuth();
  const { isShowing, toggle } = useModal();

  const navigate = useNavigate();

  const [filter, setFilter] = useState([
    {
      startDate: dayjs(new Date()).subtract(7, 'day').toDate(),
      endDate: dayjs(new Date()).toDate(),
      key: 'selection'
    }
  ]);

  // const dateDifference = `${dayjs(selectedDate?.startDate).format('DD/MM/YYYY')}-${dayjs(
  //   selectedDate?.endDate
  // ).format('DD/MM/YYYY')}`;
  const [selectedDate, setSelectedDate] = useState({
    startDate: dayjs(new Date()).subtract(7, 'day').format('YYYY-MM-DD'),
    endDate: dayjs(new Date()).format('YYYY-MM-DD')
  });
  return (
    <>
      <Header title="MODUL LOSSING" background="dashboard.png">
        <WhiteButton
          variant="contained"
          size="medium"
          sx={{ background: 'white', fontColor: 'black' }}
          onClick={toggle}
          endIcon={<Icon width={10} height={10} icon={ArrowIcon} color="#gray" />}
        >
          {/* {`Periode | ${dateDifference}`} */}
          {`Periode | 1 Bulan`}
        </WhiteButton>
      </Header>
      <FilterDate
        toggle={toggle}
        isShowing={isShowing}
        state={filter}
        setState={setFilter}
        setSelectedDates={setSelectedDate}
      />
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
              <Grid
                item
                sx={{ color: '#3F48C0', cursor: 'pointer', padding: '0 16px 16px 16px' }}
                onClick={() => navigate('/modul-lossing/summary')}
              >
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
