import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Tab, Tabs } from '@mui/material';

// components
import Header from 'components/Header';
import { AllActivity, OreGetting, OreHauling, EtoToEfo } from './MiningSection';

const menuList = [
  { value: 0, label: 'Semua' },
  { value: 1, label: 'Ore Getting' },
  { value: 2, label: 'Ore Hauling Front to ETO' },
  { value: 3, label: 'Ore Hauling ETO to EFO' }
];

export default function MiningActivity() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuTab, setMenuTab] = useState(location?.state?.value || 0);

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 0:
        navigate('all-activity', { state: { value: _menuTab } });
        break;
      case 1:
        navigate('ore-getting', { state: { value: _menuTab } });
        break;
      case 2:
        navigate('ore-hauling-to-eto', { state: { value: _menuTab } });
        break;
      case 3:
        navigate('eto-to-fo', { state: { value: _menuTab } });
        break;
      default:
        navigate('ore-getting', { state: { value: 0 } });
    }
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
        {menuTab === 0 && <AllActivity />}
        {menuTab === 1 && <OreGetting />}
        {menuTab === 2 && <OreHauling />}
        {menuTab === 3 && <EtoToEfo />}
      </div>
    </>
  );
}
