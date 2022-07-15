import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useQuery } from 'react-query';

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

export default function AllActivity() {
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
    data: dataSummary,
    isLoading: isLoadingSummary,
    isFetching: isFetchingSummary
  } = useQuery(['mining', 'summary', 'all-activity'], () => MiningActivityService.getSummary());

  const summary = {
    total_activity: dataSummary?.data?.data?.reduce(
      (total, num) => total?.total_activity + num?.total_activity
    ),
    average_ni: dataSummary?.data?.data?.reduce(
      (total, num) => parseFloat(total?.average_ni) + parseFloat(num?.average_ni)
    ),
    tonnage_total: dataSummary?.data?.data?.reduce(
      (total, num) => total?.tonnage_total + num?.tonnage_total
    ),
    sublot_total: dataSummary?.data?.data?.reduce(
      (total, num) => total?.sublot_total + num?.sublot_total
    )
  };

  // list activity
  const {
    data: dataOreGetting,
    isLoading: isLoadingOreGetting,
    isFetching: isFetchingOreGetting
  } = useQuery(['mining', 'ore-getting'], () =>
    MiningActivityService.getActivity({
      page: 1,
      row: 3,
      activity_type: 'ore-getting'
    })
  );

  const {
    data: dataOreHauling,
    isLoading: isLoadingOreHauling,
    isFetching: isFetchingOreHauling
  } = useQuery(['mining', 'ore-hauling-to-eto'], () =>
    MiningActivityService.getActivity({
      page: 1,
      row: 3,
      activity_type: 'ore-hauling-to-eto'
    })
  );

  const {
    data: dataEtoToEfo,
    isLoading: isLoadingEtoToEfo,
    isFetching: isFetchingEtoToEfo
  } = useQuery(['mining', 'eto-to-efo'], () =>
    MiningActivityService.getActivity({
      page: 1,
      row: 3,
      activity_type: 'eto-to-efo'
    })
  );

  return (
    <>
      {
        (isFetchingSummary && isFetchingOreGetting && isFetchingEtoToEfo && isFetchingOreGetting,
        isFetchingOreHauling && <LoadingModal />)
      }
      {!isLoadingSummary && dataSummary && (
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
            <InfoSection summary={summary} />
          </Grid>
        </Grid>
      )}
      {!isLoadingOreGetting && dataOreGetting && (
        <InventorySection title="Realisasi Produksi Inventory SM" subtitle="Kegiatan Penambangan" />
      )}
      {!isLoadingOreHauling && dataOreHauling && (
        <InventorySection title="Realisasi Produksi Inventory ETO" subtitle="Stockfile" />
      )}
      {!isLoadingEtoToEfo && dataEtoToEfo && (
        <InventorySection title="Realisasi Produksi Inventory EFO" subtitle="Stockyard" />
      )}
      <ReportSection />
    </>
  );
}
