import React, { useState } from 'react';

// components
import Header from 'components/Header';
import { Grid, Tab, Tabs, Typography } from '@mui/material';
import FilterSection from './FilterSection';
import InfoSection from './InfoSection';
import ChartSection from './ChartSection';
import InventorySection from './InventorySection';

const menuList = [
  { value: 0, label: 'Produksi' },
  { value: 1, label: 'Penjualan' }
];

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908
  },
  {
    name: 'Mei',
    uv: 1890,
    pv: 4800
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300
  }
];

export default function Dashboard() {
  const [menuTab, setMenuTab] = useState(0);
  const [chartData] = useState({
    labels: data.map((item) => item.name),
    legend: false,
    datasets: [
      {
        label: 'Realisasi (Ton)',
        data: data.map((item) => item.uv),
        backgroundColor: ['#3F48C0'],
        borderWidth: 2
      },
      {
        label: 'Data Produksi',
        data: data.map((item) => item.pv),
        backgroundColor: ['#DA4540'],
        borderWidth: 2
      }
    ]
  });

  const handleChangeTab = (event, newValue) => {
    setMenuTab(newValue);
  };

  return (
    <>
      <Header title="DASHBOARD" background="dashboard.png" />

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
        <Grid sx={{ background: 'white', padding: '1em 1.5em' }}>
          <Typography variant="h5">Realisasi Produk Tambang</Typography>

          <FilterSection />

          <InfoSection />

          <ChartSection chartData={chartData} data={data} />
        </Grid>

        <InventorySection title="Inventory SM" />
        <InventorySection title="Inventory ETO" />
        <InventorySection title="Inventory EFO" />
      </div>
    </>
  );
}
