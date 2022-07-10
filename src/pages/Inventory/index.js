import React, { useState } from 'react';
import { Grid, Tab, Tabs } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

// components
import Header from 'components/Header';
import { AllInventory, SpecificInventory } from './InventorySection';

export default function Inventory() {
  const menuList = [
    { value: 'all-inventory', label: 'Semua' },
    { value: 'inventory-sm', label: 'Inventory SM' },
    { value: 'inventory-eto', label: 'Inventory ETO' },
    { value: 'inventory-efo', label: 'Inventory EFO' },
    { value: 'master-inventory', label: 'Master Data Inventory' }
  ];

  const { activityType } = useParams();
  const navigate = useNavigate();

  const [menuTab, setMenuTab] = useState(activityType || '');

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
        navigate('/inventory/master-inventory');
        break;
      default:
        navigate('/inventory/all-inventory');
    }
  };

  return (
    <>
      <Header title="INVENTORY" background="dashboard.png" />
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
        {menuTab === 'all-inventory' ? <AllInventory /> : <SpecificInventory />}
      </div>
    </>
  );
}
