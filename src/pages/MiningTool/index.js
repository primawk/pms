import { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import ArrowIcon from '@iconify/icons-bi/caret-down-fill';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';

// components
import Header from 'components/Header';
import { LoadingModal } from 'components/Modal';
import useModal from 'hooks/useModal';
import { FilterDate } from 'pages/MiningActivity/MiningSection';
import { MiningToolHeader, MiningToolChart, MiningToolReport } from './MiningToolSection';

//service
import MiningToolService from 'services/MiningToolService';

// custom button
const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: '#E5E5FE'
  }
}));

export default function MiningTool() {
  const { isShowing, toggle } = useModal();

  const [filter, setFilter] = useState([
    {
      startDate: dayjs(new Date()).subtract(7, 'day').toDate(),
      endDate: dayjs(new Date()).toDate(),
      key: 'selection'
    }
  ]);

  const [selectedDate, setSelectedDate] = useState({
    startDate: dayjs(new Date()).subtract(7, 'day').format('YYYY-MM-DD'),
    endDate: dayjs(new Date()).format('YYYY-MM-DD')
  });

  const dateDifference = `${dayjs(selectedDate?.startDate).format('DD/MM/YYYY')}-${dayjs(
    selectedDate?.endDate
  ).format('DD/MM/YYYY')}`;

  const { data: dataChart, isFetching: isFetchingChart } = useQuery(
    ['mining-tool', 'chart', selectedDate],
    () =>
      MiningToolService.getMiningToolChart({
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  const chartData = {
    legend: false,
    datasets: [
      {
        label: 'Penggunaan Alat Tambang',
        data: dataChart?.data?.data?.map((item) => ({
          x: item?.date,
          y: item?.total
        })),
        backgroundColor: ['#3F48C0'],
        borderColor: ['#3F48C0'],
        borderWidth: 2
      }
    ]
  };

  return (
    <>
      {isFetchingChart && <LoadingModal />}
      <Header title="ALAT TAMBANG" background="dashboard.png">
        <WhiteButton
          variant="contained"
          size="medium"
          onClick={toggle}
          endIcon={<Icon width={10} height={10} icon={ArrowIcon} color="#gray" />}
        >
          {`Periode | ${dateDifference}`}
        </WhiteButton>
      </Header>
      <FilterDate
        toggle={toggle}
        isShowing={isShowing}
        state={filter}
        setState={setFilter}
        setSelectedDates={setSelectedDate}
      />
      <Grid
        className="app-content"
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        sx={{ pt: '0 !important' }}
      >
        <Grid item md={12} sx={{ pt: 3, pb: 3 }}>
          <MiningToolHeader />
        </Grid>
        <Grid item md={12} sx={{ pb: 3 }}>
          <MiningToolChart chartData={chartData} chartStyle={{ width: '100%', height: '40vh' }} />
        </Grid>
        <Grid item md={12} sx={{ pb: 3 }}>
          <MiningToolReport selectedDate={selectedDate} />
        </Grid>
      </Grid>
    </>
  );
}
