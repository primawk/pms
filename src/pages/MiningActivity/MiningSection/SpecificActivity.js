import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

// services
import MiningActivityService from 'services/MiningActivityService';

// components
import { ChartSection, InventorySection, ReportSection } from '.';
import { LoadingModal } from 'components/Modal';

// util
import { dateInterval } from 'utils/helper';

export default function SpecificActivity({ selectedDate, filterDate }) {
  const [subMenu, setSubMenu] = useState(0);

  const { activityType } = useParams();

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

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
        data: dataChart?.data?.data.map((item) => ({
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

  // summary
  const {
    data: dataSummary,
    isLoading: isLoadingSummary,
    isFetching: isFetchingSummary
  } = useQuery(
    ['mining', 'summary', activityType, selectedDate],
    () =>
      MiningActivityService.getSummary({
        activity_type: activityType,
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
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
    { keepPreviousData: true }
  );

  return (
    <>
      {isFetchingSummary && isFetchingActivity && isFetchingChart && <LoadingModal />}
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ padding: '1em 1.5em' }}
        className="bg-white"
      >
        <ChartSection
          subMenu={subMenu}
          chartData={chartData}
          handleChangeSubMenu={handleChangeSubMenu}
          chartStyle={{ width: '100%', height: '40vh' }}
          dateInterval={interval}
        />
      </Grid>
      {!isLoadingSummary && !isLoadingActivity && (
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
          summary={dataSummary?.data?.data?.[0]}
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
