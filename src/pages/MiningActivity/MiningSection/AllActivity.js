import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

// components
import { ChartSection, InfoSection, InventorySection, ReportSection } from '.';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

// util
import { dateInterval } from 'utils/helper';

export default function AllActivity({ selectedDate }) {
  const [subMenu, setSubMenu] = useState(0);

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

  // chart
  const { data: dataChart, isFetching: isFetchingChart } = useQuery(
    ['mining', 'chart', 'all-activity', selectedDate],
    () =>
      MiningActivityService.getActivityChart({
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

  // summary
  const {
    data: dataAllSummary,
    isLoading: isLoadingAllSummary,
    isFetching: isFetchingAllSummary
  } = useQuery(
    ['mining', 'summary', 'all', selectedDate],
    () =>
      MiningActivityService.getSummary({
        activity_type: 'all',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  // ore getting
  const {
    data: dataOreGetting,
    isLoading: isLoadingOreGetting,
    isFetching: isFetchingOreGetting
    // inventory-sm
  } = useQuery(
    ['mining', 'dome-list', 'inventory-sm', selectedDate],
    () =>
      MiningActivityService.getDomeSummary({
        page: 1,
        row: 3,
        inventory_type: 'inventory-sm',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  const {
    data: dataOreGettingSummary,
    isLoading: isLoadingOreGettingSummary,
    isFetching: isFetchingOreGettingSummary
  } = useQuery(
    ['mining', 'summary', 'inventory-sm', selectedDate],
    () =>
      MiningActivityService.getInventorySumary({
        inventory_type: 'inventory-sm',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  // ore hauling to eto
  const {
    data: dataOreHauling,
    isLoading: isLoadingOreHauling,
    isFetching: isFetchingOreHauling
  } = useQuery(
    ['mining', 'dome-list', 'inventory-eto', selectedDate],
    () =>
      MiningActivityService.getDomeSummary({
        page: 1,
        row: 3,
        inventory_type: 'inventory-eto',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  const {
    data: dataOreHaulingSummary,
    isLoading: isLoadingOreHaulingSummary,
    isFetching: isFetchingOreHaulingSummary
  } = useQuery(
    ['mining', 'summary', 'inventory-eto', selectedDate],
    () =>
      MiningActivityService.getInventorySumary({
        inventory_type: 'inventory-eto',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  // eto to efo
  const {
    data: dataEtoToEfo,
    isLoading: isLoadingEtoToEfo,
    isFetching: isFetchingEtoToEfo
  } = useQuery(
    ['mining', 'dome-list', 'inventory-efo', selectedDate],
    () =>
      MiningActivityService.getDomeSummary({
        page: 1,
        row: 3,
        inventory_type: 'inventory-efo',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  const {
    data: dataEtoToEfoSummary,
    isLoading: isLoadingEtoToEfoSummary,
    isFetching: isFetchingEtoToEfoSummary
  } = useQuery(
    ['mining', 'summary', 'inventory-efo', selectedDate],
    () =>
      MiningActivityService.getInventorySumary({
        inventory_type: 'inventory-efo',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  return (
    <>
      {isFetchingAllSummary &&
        isFetchingOreGetting &&
        isFetchingEtoToEfo &&
        isFetchingOreGetting &&
        isFetchingOreHauling &&
        isFetchingOreGettingSummary &&
        isFetchingOreHaulingSummary &&
        isFetchingEtoToEfoSummary &&
        isFetchingChart && <LoadingModal />}
      {!isLoadingAllSummary && (
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          className="bg-white"
          sx={{ padding: '1em 1.5em' }}
        >
          <Grid container item md={6.5}>
            <ChartSection
              subMenu={subMenu}
              chartData={chartData}
              handleChangeSubMenu={handleChangeSubMenu}
              dateInterval={interval}
            />
          </Grid>

          <Grid container item md={5}>
            <InfoSection summary={dataAllSummary?.data?.data} />
          </Grid>
        </Grid>
      )}
      {!isLoadingOreGetting && !isLoadingOreGettingSummary && (
        <InventorySection
          title="Realisasi Produksi Inventory SM"
          subtitle="Kegiatan Penambangan"
          summary={dataOreGettingSummary?.data?.data}
          listData={dataOreGetting?.data?.data}
        />
      )}
      {!isLoadingOreHauling && !isLoadingOreHaulingSummary && (
        <InventorySection
          title="Realisasi Produksi Inventory ETO"
          subtitle="Stockfile"
          summary={dataOreHaulingSummary?.data?.data}
          listData={dataOreHauling?.data?.data}
        />
      )}
      {!isLoadingEtoToEfo && !isLoadingEtoToEfoSummary && (
        <InventorySection
          title="Realisasi Produksi Inventory EFO"
          subtitle="Stockyard"
          summary={dataEtoToEfoSummary?.data?.data}
          listData={dataEtoToEfo?.data?.data}
        />
      )}
      <ReportSection selectedDate={selectedDate} />
    </>
  );
}

AllActivity.propTypes = {
  selectedDate: PropTypes.object.isRequired
};
