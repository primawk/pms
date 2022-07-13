import React, { useState } from 'react';

// components
import TargetDataTable from '../TargetDataTable';
import { Grid, Tab, Tabs } from '@mui/material';

const MasterData = () => {
  const menuList = [
    { value: 0, label: 'Inventory SM' },
    { value: 1, label: 'Penjualan ETO' },
    { value: 2, label: 'Penjualan EFO' }
  ];

  const sample = [
    {
      inventory: 'Inventory SM',
      detail: [
        { bukit: 'Bukit I', dome: ['Dome A', 'Dome B', 'Dome C', 'Dome D', 'Dome E'] },
        { bukit: 'Bukit II', dome: ['Dome F', 'Dome G', 'Dome H', 'Dome I', 'Dome J'] },
        { bukit: 'Bukit III', dome: ['Dome K', 'Dome L', 'Dome M', 'Dome N', 'Dome O'] },
        { bukit: 'Bukit IV', dome: ['Dome P', 'Dome Q', 'Dome R', 'Dome S', 'Dome T'] },
        { bukit: 'Bukit V', dome: ['Dome U', 'Dome V', 'Dome W', 'Dome X', 'Dome Y'] }
      ]
    }
  ];

  const targetTableHead = ['INVENTORY', 'BUKIT', 'DOME', 'ACTION'];

  const [menuTab, setMenuTab] = useState(0);
  const handleChangeTab = (event, newValue) => {
    setMenuTab(newValue);
  };

  return (
    <>
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
        <Grid sx={{ background: 'white' }}>
          <TargetDataTable sample={sample} targetTableHead={targetTableHead} />
        </Grid>
      </div>
    </>
  );
};

export default MasterData;
