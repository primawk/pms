import React, { useState } from 'react';
import { Grid } from '@mui/material';

// components
import { ChartSection, InfoSection, InventorySection, ReportSection } from '.';

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

export default function AllActivity() {
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

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        className="bg-white"
        sx={{ padding: '1em 1.5em' }}
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
      <InventorySection title="Realisasi Produksi Inventory SM" subtitle="Kegiatan Penambangan" />
      <InventorySection title="Realisasi Produksi Inventory ETO" subtitle="Stockfile" />
      <InventorySection title="Realisasi Produksi Inventory EFO" subtitle="Stockyard" />
      <ReportSection />
    </>
  );
}
