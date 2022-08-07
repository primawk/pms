import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

// components
import { ChartSection, InfoSection, InventorySection, ReportSection } from '.';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

const data = [
  {
    name: 'Kegiatan 1',
    uv: 1000,
    pv: 2400
  },
  {
    name: 'Kegiatan 2',
    uv: 2000,
    pv: 1398
  },
  {
    name: 'Kegiatan 3',
    uv: 2500,
    pv: 9800
  },
  {
    name: 'Kegiatan 4',
    uv: 1500,
    pv: 3908
  }
];

export default function AllActivity({ selectedDate }) {
  const [subMenu, setSubMenu] = useState(0);
  const [chartData] = useState({
    labels: data.map((item) => item.name),
    legend: false,
    datasets: [
      {
        label: 'Realisasi (Ton)',
        data: data.map((item) => item.uv),
        backgroundColor: ['#3F48C0'],
        borderColor: ['#3F48C0'],
        borderWidth: 2
      }
    ]
  });

  const handleChangeSubMenu = (value) => {
    setSubMenu(value);
  };

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
    ['mining', 'summary', 'ore-getting', selectedDate],
    () =>
      MiningActivityService.getSummary({
        activity_type: 'ore-getting',
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
    ['mining', 'summary', 'ore-hauling-to-eto', selectedDate],
    () =>
      MiningActivityService.getSummary({
        activity_type: 'ore-hauling-to-eto',
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
    ['mining', 'summary', 'eto-to-efo', selectedDate],
    () =>
      MiningActivityService.getSummary({
        activity_type: 'eto-to-efo',
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  return (
    <>
      {
        (isFetchingAllSummary && isFetchingOreGetting && isFetchingEtoToEfo && isFetchingOreGetting,
        isFetchingOreHauling &&
          isFetchingOreGettingSummary &&
          isFetchingOreHaulingSummary &&
          isFetchingEtoToEfoSummary && <LoadingModal />)
      }
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
          summary={dataOreGettingSummary?.data?.data?.[0]}
          listData={dataOreGetting?.data?.data}
        />
      )}
      {!isLoadingOreHauling && !isLoadingOreHaulingSummary && (
        <InventorySection
          title="Realisasi Produksi Inventory ETO"
          subtitle="Stockfile"
          summary={dataOreHaulingSummary?.data?.data?.[0]}
          listData={dataOreHauling?.data?.data}
        />
      )}
      {!isLoadingEtoToEfo && !isLoadingEtoToEfoSummary && (
        <InventorySection
          title="Realisasi Produksi Inventory EFO"
          subtitle="Stockyard"
          summary={dataEtoToEfoSummary?.data?.data?.[0]}
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
