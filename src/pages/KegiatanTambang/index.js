import React, { useState } from 'react';

// components
import Header from 'components/Header';
import { Grid, Tab, Tabs } from '@mui/material';

import ChartSection from './ChartSection';
import InfoSection from './InfoSection';

const menuList = [
  { value: 0, label: 'Semua' },
  { value: 1, label: 'Ore Getting' },
  { value: 2, label: 'Ore Hauling Front to ETO' },
  { value: 3, label: 'Ore Hauling ETO to EFO' }
];

const data = [
  {
    name: 'Kegiatan 1',
    uv: 1000,
    pv: 2400
  },
  {
    name: 'Kegiatan 2',
    uv: 2000,
    pv: 1398
  },
  {
    name: 'Kegiatan 3',
    uv: 2500,
    pv: 9800
  },
  {
    name: 'Kegiatan 4',
    uv: 1500,
    pv: 3908
  }
];

export default function Dashboard() {
  const [menuTab, setMenuTab] = useState(0);
  const [subMenu, setSubMenu] = useState(0);
  const [chartData] = useState({
    labels: data.map((item) => item.name),
    legend: false,
    datasets: [
      {
        label: 'Realisasi (Ton)',
        data: data.map((item) => item.uv),
        backgroundColor: ['#3F48C0'],
        borderColor: ['#3F48C0'],
        borderWidth: 2
      }
    ]
  });

  const handleChangeTab = (event, newValue) => {
    setMenuTab(newValue);
  };

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

  return (
    <>
      <Header title="KEGIATAN TAMBANG" background="dashboard.png" />

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

        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ background: 'white', padding: '1em 1.5em' }}
        >
          <Grid container item md={6.5}>
            <ChartSection
              subMenu={subMenu}
              chartData={chartData}
              handleChangeSubMenu={handleChangeSubMenu}
            />
          </Grid>

          <Grid container item md={5}>
            <InfoSection />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
