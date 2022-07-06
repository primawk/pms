import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

// components
import { ChartSection, InventorySection, ReportSection } from '.';

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
  },
  {
    name: 'Kegiatan 5',
    uv: 100,
    pv: 3318
  },
  {
    name: 'Kegiatan 6',
    uv: 1200,
    pv: 3908
  },
  {
    name: 'Kegiatan 7',
    uv: 1100,
    pv: 2808
  }
];

export default function SpecificActivity() {
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

  const { activityType } = useParams();

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
        sx={{ padding: '1em 1.5em' }}
        className="bg-white"
      >
        <ChartSection
          subMenu={subMenu}
          chartData={chartData}
          handleChangeSubMenu={handleChangeSubMenu}
          chartStyle={{ width: '100%', height: '40vh' }}
        />
      </Grid>
      <InventorySection
        title={
          activityType === 'ore-getting'
            ? 'Realisasi Produksi Inventory SM'
            : activityType === 'ore-hauling-to-eto'
            ? 'Realisasi Produksi Inventory ETO'
            : 'Realisasi Produksi Inventory EFO'
        }
        subtitle={
          activityType === 'ore-getting'
            ? 'Kegiatan Penambangan'
            : activityType === 'ore-hauling-to-eto'
            ? 'Stockfile'
            : 'Stockyard'
        }
      />
      <ReportSection />
    </>
  );
}
