import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import useAuth from 'hooks/useAuth';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import ArrowIcon from '@iconify/icons-bi/caret-down-fill';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { LoadingModal } from 'components/Modal';
import { addDays } from 'date-fns';

// components
import Header from 'components/Header';
import FilterDate from 'components/Modal/LaporanLab/FilterDate';
import KatalogBox from 'components/Lossing/Katalog';

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

const Katalog = ({
  setPage,
  data,
  setId,
  isLoading,
  isFetching,
  setSelectedDates,
  selectedDates
}) => {
  useAuth();
  const { isShowing: isShowingDate, toggle: toggleDate } = useModal();

  const navigate = useNavigate();

  const lossing = true;

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <>
      {isFetching && <LoadingModal />}
      <Header title="MODUL LOSSING" background="dashboard.png">
        <WhiteButton
          variant="contained"
          size="medium"
          onClick={toggleDate}
          endIcon={<Icon width={10} height={10} icon={ArrowIcon} color="#gray" />}
        >
          {/* {`Periode | ${dateDifference}`} */}
          {/* {`Periode | 1 Bulan`} */}
          {selectedDates.startDate !== undefined
            ? `Filter Tanggal | ${dayjs(selectedDates.startDate).format('DD/MM/YYYY')} - ${dayjs(
                selectedDates.endDate
              ).format('DD/MM/YYYY')} `
            : 'Filter Tanggal'}
        </WhiteButton>
      </Header>
      <FilterDate
        toggle={toggleDate}
        isShowing={isShowingDate}
        state={state}
        setState={setState}
        setSelectedDates={setSelectedDates}
        lossing={lossing}
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
              alignContent: 'center',
              marginTop: { xs: '1.5rem', sm: '0' }
            }}
            xs={12}
            sm={8}
          >
            Katalog Modul Lossing
          </Grid>
          <Grid item sx={{ padding: '24px 24px 24px 24px' }} xs={12} sm={4}>
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
                      {data?.loss_total} Ton
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
            justifyContent: ''
          }}
          gap={3}
        >
          {data?.detail?.map((_data) => (
            <KatalogBox
              name={_data.hill_name}
              loss={_data.loss}
              setPage={setPage}
              setId={setId}
              id={_data?.hill_id}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Katalog;
