import React from 'react';
import { Grid } from '@mui/material';

// components
import Header from 'components/Header';

import { MiningToolHeader, MiningToolChart, MiningToolReport } from './MiningToolSection';

export default function MiningTool() {
  const chartData = {
    legend: false,
    datasets: [
      {
        label: 'Penggunaan Alat Tambang',
        data: [
          {
            x: '2022/09/09',
            y: 100
          },
          {
            x: '2022/09/10',
            y: 200
          }
        ],
        backgroundColor: ['#3F48C0'],
        borderColor: ['#3F48C0'],
        borderWidth: 2
      }
    ]
  };

  return (
    <>
      <Header title="ALAT TAMBANG" background="dashboard.png" />
      <Grid
        className="app-content"
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        sx={{ pt: '0 !important' }}
      >
        <Grid item md={12} sx={{ pt: 3, pb: 3 }}>
          <MiningToolHeader />
        </Grid>
        <Grid item md={12} sx={{ pb: 3 }}>
          <MiningToolChart chartData={chartData} chartStyle={{ width: '100%', height: '40vh' }} />
        </Grid>
        <Grid item md={12} sx={{ pb: 3 }}>
          <MiningToolReport />
        </Grid>
      </Grid>
    </>
  );
}
