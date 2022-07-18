import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// components
import { Grid, Tab, Tabs } from '@mui/material';
import Header from 'components/Header';
import ListEksternal from './ListEksternal';
import ListInternal from './ListInternal';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';

// custom hooks
import useModal from '../../hooks/useModal';

export default function LaporanLab() {
  const { isShowing, toggle } = useModal();

  const menuList = [
    { value: 'list-internal', label: 'Laporan Internal' },
    { value: 'list-eksternal', label: 'Laporan Eksternal' }
  ];

  const { activityType } = useParams();
  const navigate = useNavigate();

  const [menuTab, setMenuTab] = useState(activityType || '');

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'list-eksternal':
        navigate('/laporan-lab/list-eksternal');
        break;
      default:
        navigate('/laporan-lab/list-internal');
    }
  };

  return (
    <>
      <PilihLaporan toggle={toggle} isShowing={isShowing} />
      <Header title="Laporan Lab" background="dashboard.png" />
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
        {menuTab === 'list-internal' ? <ListInternal /> : <ListEksternal />}
      </div>
    </>
  );
}
