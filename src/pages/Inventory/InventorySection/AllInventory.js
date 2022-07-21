import React from 'react';
import { useQuery } from 'react-query';

// components
import { InventorySection } from '.';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function AllInventory() {
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
  return (
    <>
      {
        (isFetchingOreGetting && isFetchingEtoToEfo && isFetchingOreGetting,
        isFetchingOreHauling &&
          isFetchingOreGettingSummary &&
          isFetchingOreHaulingSummary &&
          isFetchingEtoToEfoSummary && <LoadingModal />)
      }
      {!isLoadingOreGetting &&
        !isLoadingOreGettingSummary &&
        dataOreGetting &&
        dataOreGettingSummary && (
          <InventorySection
            title="Realisasi Produksi Inventory SM"
            subtitle="Kegiatan Penambangan"
            summary={dataOreGettingSummary?.data?.data[0]}
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
            summary={dataOreHaulingSummary?.data?.data[0]}
            listData={dataOreHauling?.data?.data}
          />
        )}
      {!isLoadingEtoToEfo && !isLoadingEtoToEfoSummary && dataEtoToEfo && dataEtoToEfoSummary && (
        <InventorySection
          title="Realisasi Produksi Inventory EFO"
          subtitle="Stockyard"
          summary={dataEtoToEfoSummary?.data?.data[0]}
          listData={dataEtoToEfo?.data?.data}
        />
      )}
    </>
  );
}
