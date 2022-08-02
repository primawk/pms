import React, { useState } from 'react';
import { Grid, Tab, Tabs, Typography } from '@mui/material';
import { useQuery } from 'react-query';

// components
import Header from 'components/Header';
import FilterSection from './FilterSection';
import InfoSection from './InfoSection';
import ChartSection from './ChartSection';
import InventorySection from './InventorySection';
import TargetDataTable from './TargetDataTable';
import TargetDataInformation from './TargetDataInformation';
import CustomPagination from 'components/Pagination';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

const menuList = [
  { value: 0, label: 'Produksi' }
  // { value: 1, label: 'Penjualan' }
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

export default function Dashboard() {
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

  // ore getting
  const {
    data: dataOreGetting,
    isLoading: isLoadingOreGetting,
    isFetching: isFetchingOreGetting
    // inventory-sm
  } = useQuery(['mining', 'dome-list', 'SM'], () =>
    MiningActivityService.getDomeSummary({
      page: 1,
      row: 3,
      inventory_type: 'SM'
    })
  );

  const {
    data: dataOreGettingSummary,
    isLoading: isLoadingOreGettingSummary,
    isFetching: isFetchingOreGettingSummary
  } = useQuery(['mining', 'summary', 'ore-getting'], () =>
    MiningActivityService.getSummary({ activity_type: 'ore-getting' })
  );

  // ore hauling to eto
  const {
    data: dataOreHauling,
    isLoading: isLoadingOreHauling,
    isFetching: isFetchingOreHauling
  } = useQuery(['mining', 'dome-list', 'inventory-eto'], () =>
    MiningActivityService.getDomeSummary({
      page: 1,
      row: 3,
      inventory_type: 'inventory-eto'
    })
  );

  const {
    data: dataOreHaulingSummary,
    isLoading: isLoadingOreHaulingSummary,
    isFetching: isFetchingOreHaulingSummary
  } = useQuery(['mining', 'summary', 'ore-hauling-to-eto'], () =>
    MiningActivityService.getSummary({ activity_type: 'ore-hauling-to-eto' })
  );

  // eto to efo
  const {
    data: dataEtoToEfo,
    isLoading: isLoadingEtoToEfo,
    isFetching: isFetchingEtoToEfo
  } = useQuery(['mining', 'dome-list', 'inventory-efo'], () =>
    MiningActivityService.getDomeSummary({
      page: 1,
      row: 3,
      inventory_type: 'inventory-efo'
    })
  );

  const {
    data: dataEtoToEfoSummary,
    isLoading: isLoadingEtoToEfoSummary,
    isFetching: isFetchingEtoToEfoSummary
  } = useQuery(['mining', 'summary', 'eto-to-efo'], () =>
    MiningActivityService.getSummary({ activity_type: 'eto-to-efo' })
  );

  const handleChangeTab = (event, newValue) => {
    setMenuTab(newValue);
  };

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

  return (
    <>
      {
        (isFetchingOreGetting && isFetchingEtoToEfo && isFetchingOreGetting,
        isFetchingOreHauling &&
          isFetchingOreGettingSummary &&
          isFetchingOreHaulingSummary &&
          isFetchingEtoToEfoSummary && <LoadingModal />)
      }
      <Header title="DASHBOARD" background="dashboard.png" />
      <div className="app-content">
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

        {subMenu === 0 ? (
          <Grid sx={{ background: 'white', padding: '1em 1.5em' }}>
            <Typography variant="h5">Realisasi Produksi Tambang</Typography>

            <FilterSection subMenu={subMenu} handleChangeSubMenu={handleChangeSubMenu} />

            <InfoSection />

            <ChartSection chartData={chartData} data={data} />
          </Grid>
        ) : (
          <>
            <Grid sx={{ background: 'white', padding: '1em 1.5em' }}>
              <Typography variant="h5">Data Target Produksi Tambang</Typography>

              <FilterSection subMenu={subMenu} handleChangeSubMenu={handleChangeSubMenu} />

              <TargetDataInformation />

              <TargetDataTable sample={sample} targetTableHead={targetTableHead} />

              <CustomPagination />
            </Grid>
          </>
        )}
      </div>

      {subMenu === 0 && (
        <>
          {!isLoadingOreGetting &&
            !isLoadingOreGettingSummary &&
            dataOreGetting &&
            dataOreGettingSummary && (
              <InventorySection
                title="Realisasi Produksi Inventory SM"
                subtitle="Kegiatan Penambangan"
                summary={dataOreGettingSummary?.data?.data?.[0]}
                listData={dataOreGetting?.data?.data}
              />
            )}
          {!isLoadingOreHauling &&
            !isLoadingOreHaulingSummary &&
            dataOreHauling &&
            dataOreHaulingSummary && (
              <InventorySection
                title="Realisasi Produksi Inventory ETO"
                subtitle="Stockfile"
                summary={dataOreHaulingSummary?.data?.data?.[0]}
                listData={dataOreHauling?.data?.data}
              />
            )}
          {!isLoadingEtoToEfo &&
            !isLoadingEtoToEfoSummary &&
            dataEtoToEfo &&
            dataEtoToEfoSummary && (
              <InventorySection
                title="Realisasi Produksi Inventory EFO"
                subtitle="Stockyard"
                summary={dataEtoToEfoSummary?.data?.data?.[0]}
                listData={dataEtoToEfo?.data?.data}
              />
            )}
        </>
      )}
    </>
  );
}
