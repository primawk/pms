import React, { useState } from 'react';

// components
import Header from 'components/Header';
import { Grid, Tab, Tabs, Typography } from '@mui/material';
import FilterSection from './FilterSection';

import InfoCard from 'components/Card/InfoCard';
import Tonase from '../../assets/Images/Dashboard/Tonase.png';
import JumlahLot from '../../assets/Images/Dashboard/JumlahLot.png';
import KadarNi from '../../assets/Images/Dashboard/Ni.png';
import KadarSimgo from '../../assets/Images/Dashboard/Kadar.png';

const menuList = [
  { value: 0, label: 'Penjualan' },
  { value: 1, label: 'Data Target' }
];

export default function Dashboard() {
  const [menuTab, setMenuTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setMenuTab(newValue);
  };

  return (
    <>
      <Header title="DASHBOARD" background="dashboard.png" />

      <div className="app-content">
        <Grid sx={{ background: 'white', padding: '0 1.5em' }}>
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

          <Typography variant="h5" mt={2} mb={2}>
            Realisasi Produk Tambang
          </Typography>

          <FilterSection />

          <Grid container direction="row" alignItems="center" justifyContent="space-between">
            <Grid item md={2}>
              <Typography variant="h6">Tahun</Typography>
              <Typography variant="h3">2022</Typography>
            </Grid>

            <InfoCard value="1000231" image={Tonase} name="Tonase" />
            <InfoCard value="723" image={JumlahLot} name="Jumlah Lot" />
            <InfoCard value="1,768%" image={KadarNi} name="Kadar Ni" />
            <InfoCard value="2,1768%" image={KadarSimgo} name="KadarSiMgO" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
