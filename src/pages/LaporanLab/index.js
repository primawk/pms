import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

// components
import { Grid, Tab, Tabs } from '@mui/material';
import Header from 'components/Header';
import ListEksternal from './ListEksternal';
import ListInternal from './ListInternal';
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';

// services
import LabService from 'services/LabService';

// custom hooks
import useModal from '../../hooks/useModal';
// import usePagination from 'hooks/usePagination';

export default function LaporanLab() {
  const { isShowing, toggle } = useModal();
  const [pagination, setPagination] = useState({});
  const navigate = useNavigate();

  const menuList = [
    { value: 'internal', label: 'Laporan Internal' },
    { value: 'eksternal', label: 'Laporan Eksternal' }
  ];

  const { report_type } = useParams();

  // const { page, totalPage, handleChangePage } = usePagination(pagination || { total_data: 0 });

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

  const {
    data,
    // isLoading: isLoadingActivity,
    isFetching: isFetchingActivityInternal
  } = useQuery(
    ['report', 'internal'],
    () =>
      LabService.getReport({
        report_type: 'internal'
      })
    // { keepPreviousData: true }
  );

  const {
    data: dataEksternal,
    // isLoading: isLoadingActivity,
    isFetching: isFetchingActivityExternal
  } = useQuery(
    ['report', 'external'],
    () =>
      LabService.getReport({
        report_type: 'external'
      })
    // { keepPreviousData: true }
  );

  let totalPrepEks = 0;
  let totalPrep = 0;

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
            {dataEksternal?.data?.data.map((prep) => (totalPrepEks += prep.preparation))}
            {data?.data.data.map((prep) => (totalPrep += prep.preparation))}
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
        {menuTab === 'internal' ? (
          <ListInternal
            dataInternal={data?.data?.data}
            isFetchingActivity={isFetchingActivityInternal}
            totalPrepEks={totalPrepEks}
            totalPrep={totalPrep}
          />
        ) : (
          <ListEksternal
            dataEksternal={dataEksternal?.data?.data}
            isFetchingActivity={isFetchingActivityExternal}
            totalPrepEks={totalPrepEks}
            totalPrep={totalPrep}
          />
        )}
      </div>
    </>
  );
}
