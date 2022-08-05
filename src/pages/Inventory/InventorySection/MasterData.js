import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Grid, Tab, Tabs } from '@mui/material';

// components
import TargetDataTable from '../TargetDataTable';
import { LoadingModal } from 'components/Modal';

// servce
import InventoryService from 'services/InventoryService';

const MasterData = () => {
  const { inventoryType, dataType } = useParams();
  const navigate = useNavigate();

  const menuList = [
    { value: 'inventory-sm', label: 'Inventory SM' },
    { value: 'inventory-eto', label: 'Inventory ETO' },
    { value: 'inventory-efo', label: 'Inventory EFO' }
  ];

  const [menuTab, setMenuTab] = useState(dataType || 'inventory-sm');

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'inventory-sm':
        navigate('/inventory/master-inventory/inventory-sm');
        break;
      case 'inventory-eto':
        navigate('/inventory/master-inventory/inventory-eto');
        break;
      case 'inventory-efo':
        navigate('/inventory/master-inventory/inventory-efo');
        break;
      default:
        navigate('/inventory/master-inventory/inventory-sm');
    }
  };

  const {
    data: dataHill,
    isLoading: isLoadingHill,
    isFetching: isFetchingHill
  } = useQuery(
    ['inventory', inventoryType, dataType],
    () =>
      InventoryService.getHill({
        inventory_type: dataType
      }),
    { keepPreviousData: true, enabled: dataType === 'inventory-sm' }
  );

  const {
    data: dataDome,
    isLoading: isLoadingDome,
    isFetching: isFetchingDome
  } = useQuery(
    ['inventory', inventoryType, dataType],
    () =>
      InventoryService.getDome({
        inventory_type: dataType
      }),
    { keepPreviousData: true, enabled: dataType !== 'inventory-sm' }
  );

  return (
    <>
      {isFetchingHill && isFetchingDome && <LoadingModal />}
      <div className="app-content">
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
        {!isLoadingHill && !isLoadingDome && (
          <Grid sx={{ background: 'white' }}>
            <TargetDataTable
              dataType={menuTab}
              dataTable={menuTab === 'inventory-sm' ? dataHill?.data?.data : dataDome?.data?.data}
            />
          </Grid>
        )}
      </div>
    </>
  );
};

export default MasterData;
