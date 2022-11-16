import React, { useEffect, useState } from 'react';
import { Grid, Tab, Tabs, Typography } from '@mui/material';
import { useQuery } from 'react-query';

// components
import Header from 'components/Header';
import FilterSection from './FilterSection';
import InfoSection from './InfoSection';
import ChartSection from './ChartSection';
import InventorySection from './InventorySection';
import MarketingSection from './MarketingSection';
import TargetDataTable from './TargetDataTable';
import TargetDataInformation from './TargetDataInformation';
import CustomPagination from 'components/Pagination';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';
import ProductionService from 'services/Dashboard';

// custom hooks
import usePagination from 'hooks/usePagination';
import useAuth from 'hooks/useAuth';

// utils
import { ceilTotalData } from 'utils/helper';

const menuList = [
  { value: 0, label: 'Produksi' },
  { value: 1, label: 'Penjualan' }
];

const data = [
  {
    name: 'Jan',
    uv: 4000.1,
    pv: 4500
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

const targetTableHead = ['TAHUN', 'BULAN', 'TARGET (TON)', 'TOTAL TARGET (TON)', 'ACTION'];

export default function Dashboard() {
  useAuth();
  const [menuTab, setMenuTab] = useState(0);
  const [subMenu, setSubMenu] = useState(0);

  // ore getting
  const {
    data: dataOreGetting,
    isLoading: isLoadingOreGetting,
    isFetching: isFetchingOreGetting
  } = useQuery(['mining', 'dome-list', 'inventory-sm'], () =>
    MiningActivityService.getDomeSummary({
      page: 1,
      row: 3,
      inventory_type: 'inventory-sm'
    })
  );

  const {
    data: dataOreGettingSummary,
    isLoading: isLoadingOreGettingSummary,
    isFetching: isFetchingOreGettingSummary
  } = useQuery(['mining', 'summary', 'inventory-sm'], () =>
    MiningActivityService.getInventorySumary({ inventory_type: 'inventory-sm' })
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
  } = useQuery(['mining', 'summary', 'inventory-eto'], () =>
    MiningActivityService.getInventorySumary({ inventory_type: 'inventory-eto' })
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
  } = useQuery(['mining', 'summary', 'inventory-efo'], () =>
    MiningActivityService.getInventorySumary({ inventory_type: 'inventory-efo' })
  );

  // Table Target

  const {
    data: dataYears,
    isLoading: isLoadingYears,
    isFetching: isFetchingYears
  } = useQuery(['years'], () => ProductionService.getTarget({}));

  const years =
    typeof dataYears?.data?.data === 'undefined'
      ? null
      : dataYears?.data?.data.map((item) => item.year);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [filterYear, setFilterYear] = useState(0);

  const { pageTarget, handleChangePageTarget } = usePagination();
  var myString = String(selectedYear);
  myString += '-01-01';
  const [summaryDate, setSummaryDate] = useState(myString);

  useEffect(() => {
    setSummaryDate(myString);
  }, [selectedYear, myString]);

  const {
    data: dataAllSummary,
    isLoading: isLoadingAllSummary,
    isFetching: isFetchingAllSummary
  } = useQuery(['all-summary', summaryDate], () =>
    MiningActivityService.getSummary({
      activity_type: 'all',
      start_date: summaryDate
    })
  );

  const {
    data: dataProduction,
    isLoading: isLoadingProduction,
    isFetching: isFetchingProduction
  } = useQuery(['data-target', selectedYear], () =>
    ProductionService.getTarget({
      year: selectedYear
    })
  );

  const {
    data: dataProductionShipment,
    isLoading: isLoadingProductionShipment,
    isFetching: isFetchingProductionShipment
  } = useQuery(['data-shipment', selectedYear], () =>
    ProductionService.getTargetShipment({
      year: selectedYear
    })
  );

  const {
    data: dataTableTarget,
    isLoading: isLoadingTableTarget,
    isFetching: isFetchingTableTarget
  } = useQuery(['data-target', filterYear], () =>
    ProductionService.getTarget({
      year: filterYear
    })
  );

  const {
    data: dataRealization,
    isLoading: isLoadingRealization,
    isFetching: isFetchingRealization
  } = useQuery(['data-realization', selectedYear], () =>
    ProductionService.getRealization({
      year: selectedYear
      // row: 2,
      // page: pageTarget
    })
  );

  const {
    data: dataRealizationShipment,
    isLoading: isLoadingRealizationShipment,
    isFetching: isFetchingRealizationShipment
  } = useQuery(['data-realization-shipment', selectedYear], () =>
    ProductionService.getRealizationShipment({
      year: selectedYear
      // row: 2,
      // page: pageTarget
    })
  );

  // console.log(dataRealizationShipment?.data?.data);

  const targetRealization =
    typeof dataRealization?.data?.data === 'undefined'
      ? null
      : dataRealization?.data?.data.map((item) => item.realization).reverse();

  const targetRealizationShipment =
    typeof dataRealizationShipment?.data?.data === 'undefined'
      ? null
      : dataRealizationShipment?.data?.data.map((item) => item.realization).reverse();

  const targetPercentage =
    typeof dataRealization?.data?.data === 'undefined'
      ? null
      : dataRealization?.data?.data.map((item) => parseInt(item.presentase)).reverse();

  const targetPercentageShipment =
    typeof dataRealizationShipment?.data?.data === 'undefined'
      ? null
      : dataRealizationShipment?.data?.data.map((item) => parseInt(item.presentase)).reverse();

  const target =
    typeof dataProduction?.data?.data === 'undefined'
      ? null
      : dataProduction?.data?.data.map((item) => item.target_list);

  const targetShipment =
    typeof dataProductionShipment?.data?.data === 'undefined'
      ? null
      : dataProductionShipment?.data?.data.map((item) => item.target_list);

  const targetResult = target?.length > 0 ? target[0].map((arrayItem) => arrayItem.target) : null; // in case only 1 year to show
  const targetResultShipment =
    targetShipment?.length > 0 ? targetShipment[0].map((arrayItem) => arrayItem.target) : null; // in case only 1 year to show

  // const [chartData] = useState({
  //   labels: data.map((item) => item.name),
  //   legend: false,
  //   datasets: [
  //     {
  //       label: 'Realisasi (Ton)',
  //       data: data.map((item) => item.uv),
  //       backgroundColor: ['#3F48C0'],
  //       borderWidth: 2
  //     },
  //     {
  //       label: 'Target Produksi',
  //       data: targetResult ? targetResult?.map((item) => item) : null,
  //       backgroundColor: ['#DA4540'],
  //       borderWidth: 2
  //     }
  //   ]
  // });

  const chartData = {
    labels: data.map((item) => item.name),
    legend: false,
    datasets: [
      {
        label: 'Realisasi (Ton)',
        data: targetRealization ? targetRealization?.map((item) => item) : null,
        backgroundColor: ['#3F48C0'],
        borderWidth: 2
      },
      {
        label: 'Target Produksi',
        data: targetResult ? targetResult?.map((item) => item) : null,
        backgroundColor: ['#DA4540'],
        borderWidth: 2
      }
    ]
  };

  const chartDataShipment = {
    labels: data.map((item) => item.name),
    legend: false,
    datasets: [
      {
        label: 'Realisasi (Ton)',
        data: targetRealizationShipment ? targetRealizationShipment?.map((item) => item) : null,
        backgroundColor: ['#3F48C0'],
        borderWidth: 2
      },
      {
        label: 'Target Penjualan',
        data: targetResultShipment ? targetResultShipment?.map((item) => item) : null,
        backgroundColor: ['#DA4540'],
        borderWidth: 2
      }
    ]
  };

  const handleChangeTab = (event, newValue) => {
    setMenuTab(newValue);
  };

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <>
      {
        (isFetchingOreGetting && isFetchingEtoToEfo && isFetchingOreGetting,
        isFetchingOreHauling &&
          isFetchingOreGettingSummary &&
          isFetchingOreHaulingSummary &&
          isFetchingEtoToEfoSummary &&
          isFetchingProduction &&
          isFetchingYears &&
          isFetchingRealization &&
          isFetchingTableTarget && <LoadingModal />)
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
            {menuTab === 0 ? (
              <Typography variant="h5">Realisasi Produksi Tambang</Typography>
            ) : (
              <Typography variant="h5">Realisasi Penjualan Tambang</Typography>
            )}

            <FilterSection
              subMenu={subMenu}
              handleChangeSubMenu={handleChangeSubMenu}
              data={dataProduction?.data?.data}
              setSelectedYear={setSelectedYear}
              handleChangeYear={handleChangeYear}
              selectedYear={selectedYear}
              years={years}
              isFetching={isFetchingYears}
              isLoading={isLoadingYears}
            />

            <InfoSection
              data={dataAllSummary?.data?.data}
              isFetching={isFetchingAllSummary}
              isLoading={isLoadingAllSummary}
              selectedYear={selectedYear}
              years={years}
            />

            {menuTab === 0 ? (
              <ChartSection
                chartData={chartData}
                data={data}
                targetPercentage={targetPercentage}
                targetRealization={targetRealization}
                target={targetResult}
                isLoading={isLoadingProduction}
                isFetching={isFetchingProduction}
                isLoadingRealization={isLoadingRealization}
                isFetchingRealization={isFetchingRealization}
                menuTab={menuTab}
              />
            ) : (
              <ChartSection
                chartData={chartDataShipment}
                data={data}
                targetPercentage={targetPercentageShipment}
                targetRealization={targetRealizationShipment}
                target={targetResultShipment}
                isLoading={isLoadingProductionShipment}
                isFetching={isFetchingProductionShipment}
                isLoadingRealization={isLoadingRealizationShipment}
                isFetchingRealization={isFetchingRealizationShipment}
                menuTab={menuTab}
              />
            )}
          </Grid>
        ) : (
          <>
            <Grid sx={{ background: 'white', padding: '1em 1.5em' }}>
              <Typography variant="h5">Data Target Produksi Tambang</Typography>

              <FilterSection
                subMenu={subMenu}
                handleChangeSubMenu={handleChangeSubMenu}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                dataTableTarget={dataTableTarget?.data?.data}
                filterYear={filterYear}
                setFilterYear={setFilterYear}
                years={years}
              />

              <TargetDataInformation />

              <TargetDataTable
                targetTableHead={targetTableHead}
                data={dataTableTarget?.data?.data}
                dataPage={dataProduction}
                isLoading={isLoadingTableTarget}
                isFetching={isFetchingTableTarget}
              />

              <CustomPagination
                count={ceilTotalData(dataProduction?.data?.pagination?.total_Page || 1, 2)}
                page={pageTarget}
                handleChangePage={handleChangePageTarget}
              />
            </Grid>
          </>
        )}
      </div>

      {menuTab === 0 ? (
        <>
          {!isLoadingOreGetting &&
            !isLoadingOreGettingSummary &&
            dataOreGetting &&
            dataOreGettingSummary && (
              <InventorySection
                title="Realisasi Produksi Inventory SM"
                subtitle="Kegiatan Penambangan"
                summary={dataOreGettingSummary?.data?.data}
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
                summary={dataOreHaulingSummary?.data?.data}
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
                summary={dataEtoToEfoSummary?.data?.data}
                listData={dataEtoToEfo?.data?.data}
              />
            )}
        </>
      ) : (
        <MarketingSection title="Laporan Kegiatan Pemasaran Tambang" />
      )}
    </>
  );
}
