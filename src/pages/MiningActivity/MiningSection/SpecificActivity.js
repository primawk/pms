import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Grid, Tab, Tabs } from '@mui/material';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

// services
import MiningActivityService from 'services/MiningActivityService';

// components
import { ChartSection, InventorySection, ReportSection } from '.';
import { LoadingModal } from 'components/Modal';

// util
import { dateInterval } from 'utils/helper';

const menuList = [
  { value: 'ore-hauling-to-eto', label: 'Ore Hauling Front to ETO' },
  { value: 'eto-to-efo', label: 'Ore Hauling ETO to EFO' }
];

export default function SpecificActivity({ selectedDate, filterDate }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { activityType } = useParams();

  const [menuTab, setMenuTab] = useState('');

  useEffect(() => {
    setMenuTab(activityType);
  }, [activityType]);

  const inventoryType =
    activityType === 'ore-getting'
      ? 'inventory-sm'
      : activityType === 'ore-hauling-to-eto'
      ? 'inventory-eto'
      : activityType === 'eto-to-efo'
      ? 'inventory-efo'
      : undefined;

  // chart
  const { data: dataChart, isFetching: isFetchingChart } = useQuery(
    ['mining', 'chart', activityType, selectedDate],
    () =>
      MiningActivityService.getActivityChart({
        activity_type: activityType,
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  const chartData = {
    legend: false,
    datasets: [
      {
        label: 'Realisasi (Ton)',
        data: dataChart?.data?.data?.map((item) => ({
          x: item?.date,
          y: item?.tonnage_total
        })),
        backgroundColor: ['#3F48C0'],
        borderColor: ['#3F48C0'],
        borderWidth: 2
      }
    ]
  };

  const interval = dateInterval(selectedDate?.startDate, selectedDate?.endDate);

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'ore-hauling-to-eto':
        navigate('/mining-activity/hauling/ore-hauling-to-eto');
        break;
      case 'eto-to-efo':
        navigate('/mining-activity/hauling/eto-to-efo');
        break;
      default:
        navigate('/mining-activity/hauling/ore-hauling-to-eto');
    }
  };
  // summary
  const {
    data: dataSummary,
    isLoading: isLoadingSummary,
    isFetching: isFetchingSummary
  } = useQuery(
    ['mining', 'summary', inventoryType, selectedDate],
    () =>
      MiningActivityService.getInventorySumary({
        inventory_type: inventoryType,
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true, enabled: activityType !== 'shipment' }
  );

  // activity
  const {
    data: dataActivity,
    isLoading: isLoadingActivity,
    isFetching: isFetchingActivity
  } = useQuery(
    ['mining', 'dome-list', inventoryType, selectedDate],
    () =>
      MiningActivityService.getDomeSummary({
        page: 1,
        row: 3,
        inventory_type: inventoryType,
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true, enabled: activityType !== 'shipment' }
  );

  return (
    <>
      {isFetchingSummary && isFetchingActivity && isFetchingChart && <LoadingModal />}
      {pathname?.includes('hauling') && (
        <Tabs
          value={menuTab}
          onChange={handleChangeTab}
          textColor="primary"
          sx={{ margin: '20px' }}
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
                  : { background: 'white' }
              }
            />
          ))}
        </Tabs>
      )}
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ padding: '1em 1.5em' }}
        className="bg-white"
      >
        <ChartSection
          chartData={chartData}
          chartStyle={{ width: '100%', height: '40vh' }}
          dateInterval={interval}
        />
      </Grid>
      {!isLoadingSummary && !isLoadingActivity && activityType !== 'shipment' && (
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
          summary={dataSummary?.data?.data}
          listData={dataActivity?.data?.data}
        />
      )}
      <ReportSection selectedDate={selectedDate} filterDate={filterDate} />
    </>
  );
}

SpecificActivity.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  filterDate: PropTypes.object
};
