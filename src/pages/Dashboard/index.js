import React, { useState } from 'react';

// components
import Header from 'components/Header';
import { Grid, Tab, Tabs, Typography } from '@mui/material';
import FilterSection from './FilterSection';

export default function Dashboard() {
  const [menuTab, setMenuTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setMenuTab(newValue);
  };

  return (
    <>
      <Header title="DASHBOARD" background="dashboard.png" />

      <Grid>
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
          <Tab value={0} label="Produksi" />
          <Tab value={1} label="Penjualan" />
        </Tabs>
      </Grid>

      <Typography variant="h5" mt={2} mb={2}>
        Realisasi Produk Tambang
      </Typography>

      <FilterSection />
    </>
  );
}
