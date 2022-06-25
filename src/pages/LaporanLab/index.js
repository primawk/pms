import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// components
import Header from 'components/Header';
import { Grid, Button, Tab, Tabs, Typography } from '@mui/material';
import FilterSection from './FilterSection';
import InfoSection from './InfoSection';
import ChartSection from './ChartSection';
import InventorySection from './InventorySection';
import TextField from '@mui/material/TextField';

import TargetDataTable from './TargetDataTable';
import TargetDataInformation from './TargetDataInformation';
import CustomPagination from 'components/Pagination';
import { nominalTypeHack } from 'prop-types';

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
      </Grid>

      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'green',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          width: '94%',
          height: '9.25rem',
          marginLeft: '3rem',
          marginTop: '1.125rem',
          borderRadius: '8px 8px 8px 8px'
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            height: '4.625rem',
            borderBottom: 1,
            borderBottomColor: '#E0E0E0',
            borderRadius: '8px 8px 0 0'
          }}
        >
          <Grid
            item
            sx={{ backgroundColor: 'blue', borderRadius: '4px', marginLeft: '1.5rem' }}
            xs={7}
          >
            <TextField
              id="outlined-basic"
              label="Cari Nomor Sample/Nama Perusahaan/Requester"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Button
            variant="contained"
            sx={{ width: '160px', height: '42px', marginRight: '1.5rem' }}
          >
            Search
          </Button>
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'yellow',
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            // gap: '24px',
            height: '4.625rem',
            borderBottom: 1,
            borderBottomColor: '#E0E0E0',
            borderRadius: '0 0 8px 8px'
          }}
        >
          <Grid
            item
            sx={{ backgroundColor: 'blue', borderRadius: '4px', marginLeft: '1.5rem' }}
            xs={2}
          >
            <TextField
              id="outlined-basic"
              label="Cari Nomor Sample/Nama Perusahaan/Requester"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            sx={{ backgroundColor: 'blue', borderRadius: '4px', marginLeft: '1rem' }}
            xs={2}
          >
            <TextField
              id="outlined-basic"
              label="Cari Nomor Sample/Nama Perusahaan/Requester"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Button
            sx={{
              backgroundColor: 'transparent',
              outline: 'none',
              overflow: 'hidden',
              border: 'none',
              marginRight: '2.25rem',
              marginLeft: 'auto'
            }}
          >
            Clear All
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
