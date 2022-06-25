import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// components
import Header from 'components/Header';
import { Grid, Tab, Tabs, Typography } from '@mui/material';
import FilterSection from './FilterSection';
import InfoSection from './InfoSection';
import ChartSection from './ChartSection';
import InventorySection from './InventorySection';

import TargetDataTable from './TargetDataTable';
import TargetDataInformation from './TargetDataInformation';
import CustomPagination from 'components/Pagination';

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

const targetTableHead = ['TAHUN', 'BULAN', 'TARGET', 'ACTION'];

export default function LaporanLab() {
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

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{
          backgroundImage: `url(/img/dashboard.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '21vh',
          margin: 0
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', height: '9.375rem' }}>
          <div
            style={{ marginLeft: '3rem', display: 'flex', direction: 'row', alignItems: 'center' }}
          >
            <div style={{ marginTop: '0.4rem', marginRight: '1.5rem' }}>
              <Icon icon="icomoon-free:lab" color="white" fontSize="1.5rem" />
            </div>
            <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>Laporan Lab</h2>
          </div>
        </div>
        {/* <Grid item>{children}</Grid> */}
      </Grid>
      {/* 
      <Header
        icon={<Icon icon="icomoon-free:lab" color="white" fontSize="1.5rem" />}
        title="Laporan Lab"
        background="dashboard.png"
      /> */}

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

        {subMenu === 0 ? (
          <Grid sx={{ background: 'white', padding: '1em 1.5em' }}>
            <Typography variant="h5">Realisasi Produksi Tambang</Typography>

            <FilterSection subMenu={subMenu} handleChangeSubMenu={handleChangeSubMenu} />

            <InfoSection />

            <ChartSection chartData={chartData} data={data} />
          </Grid>
        ) : (
          <>
            <Grid sx={{ background: 'white', padding: '1em 1.5em' }}>
              <Typography variant="h5">Data Target Produksi Tambang</Typography>

              <FilterSection subMenu={subMenu} handleChangeSubMenu={handleChangeSubMenu} />

              <TargetDataInformation />

              <TargetDataTable sample={sample} targetTableHead={targetTableHead} />

              <CustomPagination />
            </Grid>
          </>
        )}
      </div>

      {subMenu === 0 && (
        <>
          <InventorySection title="Inventory SM" subtitle="Kegiatan Penambangan" />
          <InventorySection title="Inventory ETO" subtitle="Stockfile" />
          <InventorySection title="Inventory EFO" subtitle="Stckyard" />
        </>
      )}
    </>
  );
}
