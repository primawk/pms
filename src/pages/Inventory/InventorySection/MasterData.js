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
      year: 2021,
      detail: [
        { month: 'Januari', target: '70.000' },
        { month: 'Februari', target: '70.000' },
        { month: 'Maret', target: '70.000' },
        { month: 'April', target: '70.000' },
        { month: 'Mei', target: '70.000' },
        { month: 'Juni', target: '70.000' },
        { month: 'Juli', target: '70.000' },
        { month: 'Agustus', target: '70.000' },
        { month: 'September', target: '70.000' },
        { month: 'Oktober', target: '70.000' },
        { month: 'November', target: '70.000' },
        { month: 'Desember', target: '70.000' }
      ]
    },
    {
      year: 2020,
      detail: [
        { month: 'Januari', target: '70.000' },
        { month: 'Februari', target: '70.000' },
        { month: 'Maret', target: '70.000' },
        { month: 'April', target: '70.000' },
        { month: 'Mei', target: '70.000' },
        { month: 'Juni', target: '70.000' },
        { month: 'Juli', target: '70.000' },
        { month: 'Agustus', target: '70.000' },
        { month: 'September', target: '70.000' },
        { month: 'Oktober', target: '70.000' },
        { month: 'November', target: '70.000' },
        { month: 'Desember', target: '70.000' }
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
