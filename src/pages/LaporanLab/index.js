import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

// components
import { Grid, Tab, Tabs } from '@mui/material';
import Header from 'components/Header';
import ListEksternal from './ListEksternal';
import ListInternal from './ListInternal';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';

// custom hooks
import useModal from '../../hooks/useModal';
import usePagination from 'hooks/usePagination';



export default function LaporanLab() {
  const { isShowing, toggle } = useModal();
  const [pagination, setPagination] = useState({});
  const navigate = useNavigate();

  const menuList = [
    { value: 'internal', label: 'Laporan Internal' },
    { value: 'eksternal', label: 'Laporan Eksternal' }
  ];

  const { report_type } = useParams();

  const { page, totalPage, handleChangePage } = usePagination(pagination || { total_data: 0 });

  const [menuTab, setMenuTab] = useState(report_type || '');

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'eksternal':
        navigate('/laporan-lab/eksternal');
        break;
      default:
        navigate('/laporan-lab/internal');
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
        {menuTab === 'internal' ? <ListInternal /> : <ListEksternal />}
      </div>
    </>
  );
}
