import React, { useState } from 'react';
import { Grid, Tab, Tabs, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowIcon from '@iconify/icons-bi/caret-down-fill';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';

// custom hooks
import useAuth from 'hooks/useAuth';
import useModal from 'hooks/useModal';

// components
import Header from 'components/Header';
import { FilterDate } from 'pages/MiningActivity/MiningSection';
import { AllInventory, SpecificInventory, MasterData } from './InventorySection';

// custom button
const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: '#E5E5FE'
  }
}));

const menuList = [
  { value: 'all-inventory', label: 'Semua' },
  { value: 'inventory-sm', label: 'Inventory SM' },
  { value: 'inventory-eto', label: 'Inventory ETO' },
  { value: 'inventory-efo', label: 'Inventory EFO' },
  { value: 'master-inventory', label: 'Master Data Inventory' }
];

export default function Inventory() {
  useAuth();

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

  const { inventoryType } = useParams();
  const navigate = useNavigate();

  const [menuTab, setMenuTab] = useState(inventoryType || '');

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'inventory-sm':
        navigate('/inventory/inventory-sm');
        break;
      case 'inventory-eto':
        navigate('/inventory/inventory-eto');
        break;
      case 'inventory-efo':
        navigate('/inventory/inventory-efo');
        break;
      case 'master-inventory':
        navigate('/inventory/master-inventory/inventory-sm');
        break;
      default:
        navigate('/inventory/all-inventory');
    }
  };

  return (
    <>
      <Header title="INVENTORY" background="dashboard.png">
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
        {menuTab === 'all-inventory' ? (
          <AllInventory selectedDate={selectedDate} />
        ) : menuTab === 'master-inventory' ? (
          <MasterData />
        ) : (
          <SpecificInventory selectedDate={selectedDate} />
        )}
      </div>
    </>
  );
}
