import React, { useState } from 'react';
import { Grid, Tab, Tabs } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

// custom hooks
import useAuth from 'hooks/useAuth';

// components
import Header from 'components/Header';
import { AllInventory, SpecificInventory, MasterData } from './InventorySection';

export default function Inventory() {
  useAuth();
  const menuList = [
    { value: 'all-inventory', label: 'Semua' },
    { value: 'inventory-sm', label: 'Inventory SM' },
    { value: 'inventory-eto', label: 'Inventory ETO' },
    { value: 'inventory-efo', label: 'Inventory EFO' },
    { value: 'master-inventory', label: 'Master Data Inventory' }
  ];

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
        {menuTab === 'all-inventory' ? (
          <AllInventory />
        ) : menuTab === 'master-inventory' ? (
          <MasterData />
        ) : (
          <SpecificInventory />
        )}
      </div>
    </>
  );
}
