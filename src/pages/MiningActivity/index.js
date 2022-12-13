import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Grid, Tab, Tabs, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import ArrowIcon from '@iconify/icons-bi/caret-down-fill';
import dayjs from 'dayjs';

// custom hook
import useModal from 'hooks/useModal';

// components
import Header from 'components/Header';
import { AllActivity, SpecificActivity, FilterDate } from './MiningSection';

// custom button
const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: '#E5E5FE'
  }
}));

const menuList = [
  { value: 'all-activity', label: 'Semua' },
  { value: 'ore-getting', label: 'Ore Getting' },
  { value: 'hauling', label: 'Hauling' }
];

export default function MiningActivity() {
  const { activityType } = useParams();
  const navigate = useNavigate();
  const isShipment = useLocation()?.pathname.split('/')[1] === 'shipment';

  const { isShowing, toggle } = useModal();

  const [menuTab, setMenuTab] = useState(
    activityType === 'ore-hauling-to-eto'
      ? 'hauling'
      : activityType === 'eto-to-efo'
      ? 'hauling'
      : activityType
  );

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

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'ore-getting':
        navigate('/mining-activity/ore-getting');
        break;
      case 'hauling':
        navigate('/mining-activity/hauling/ore-hauling-to-eto');
        break;
      case 'efo-to-shipment':
        navigate('/mining-activity/efo-to-shipment');
        break;
      default:
        navigate('/mining-activity/all-activity');
    }
  };

  const dateDifference = `${dayjs(selectedDate?.startDate).format('DD/MM/YYYY')}-${dayjs(
    selectedDate?.endDate
  ).format('DD/MM/YYYY')}`;

  return (
    <>
      <Header title={isShipment ? 'PEMASARAN' : 'KEGIATAN TAMBANG'} background="dashboard.png">
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
      <div>
        {!isShipment && (
          <Grid sx={{ background: 'white' }}>
            <Tabs
              value={menuTab}
              onChange={handleChangeTab}
              textColor="primary"
              indicatorColor="primary"
              TabIndicatorProps={{
                sx: {
                  bgcolor: '#3F48C0',
                  height: '4px'
                }
              }}
            >
              {menuList?.map((item) => (
                <Tab
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  sx={
                    item.value === menuTab
                      ? {
                          backgroundColor: '#E5E5FE',
                          border: '1px solid #3F48C0',
                          borderRadius: '4px',
                          transition: '0.3s'
                        }
                      : {}
                  }
                />
              ))}
            </Tabs>
          </Grid>
        )}
        {menuTab === 'all-activity' && !isShipment ? (
          <AllActivity selectedDate={selectedDate} />
        ) : (
          <SpecificActivity selectedDate={selectedDate} filterDate={dateDifference} />
        )}
      </div>
    </>
  );
}
