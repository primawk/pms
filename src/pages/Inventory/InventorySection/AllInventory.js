import React from 'react';
import { useQuery } from 'react-query';

// custom hooks
import usePagination from 'hooks/usePagination';

// components
import { InventorySection } from '.';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

// utils
import { ceilTotalData } from 'utils/helper';

export default function AllInventory() {
  // ore getting

  const { page: pageOreGetting, handleChangePage: handleChangePageOreGetting } = usePagination();

  const {
    data: dataOreGetting,
    isLoading: isLoadingOreGetting,
    isFetching: isFetchingOreGetting
    // inventory-sm
  } = useQuery(['mining', 'dome-list', 'inventory-sm', pageOreGetting], () =>
    MiningActivityService.getDomeSummary({
      page: pageOreGetting,
      row: 15,
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
  const { page: pageOreHauling, handleChangePage: handleChangePageOreHauling } = usePagination();

  const {
    data: dataOreHauling,
    isLoading: isLoadingOreHauling,
    isFetching: isFetchingOreHauling
  } = useQuery(['mining', 'dome-list', 'inventory-eto', pageOreHauling], () =>
    MiningActivityService.getDomeSummary({
      page: pageOreHauling,
      row: 15,
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
  const { page: pageEtoToEfo, handleChangePage: handleChangePageEtoToEfo } = usePagination();

  const {
    data: dataEtoToEfo,
    isLoading: isLoadingEtoToEfo,
    isFetching: isFetchingEtoToEfo
  } = useQuery(['mining', 'dome-list', 'inventory-efo', pageEtoToEfo], () =>
    MiningActivityService.getDomeSummary({
      page: pageEtoToEfo,
      row: 15,
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
  return (
    <>
      {isFetchingOreGetting &&
        isFetchingEtoToEfo &&
        isFetchingOreGetting &&
        isFetchingOreHauling &&
        isFetchingOreGettingSummary &&
        isFetchingOreHaulingSummary &&
        isFetchingEtoToEfoSummary && <LoadingModal />}
      {!isLoadingOreGetting &&
        !isLoadingOreGettingSummary &&
        dataOreGetting &&
        dataOreGettingSummary && (
          <InventorySection
            title="Realisasi Produksi Inventory SM"
            subtitle="Kegiatan Penambangan"
            summary={dataOreGettingSummary?.data?.data}
            listData={dataOreGetting?.data?.data}
            count={ceilTotalData(dataOreGetting?.data?.pagination?.total_data || 0, 15)}
            page={pageOreGetting}
            handleChangePage={handleChangePageOreGetting}
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
            count={ceilTotalData(dataOreHauling?.data?.pagination?.total_data || 0, 15)}
            page={pageOreHauling}
            handleChangePage={handleChangePageOreHauling}
          />
        )}
      {!isLoadingEtoToEfo && !isLoadingEtoToEfoSummary && dataEtoToEfo && dataEtoToEfoSummary && (
        <InventorySection
          title="Realisasi Produksi Inventory EFO"
          subtitle="Stockyard"
          summary={dataEtoToEfoSummary?.data?.data}
          listData={dataEtoToEfo?.data?.data}
          count={ceilTotalData(dataEtoToEfo?.data?.pagination?.total_data || 0, 15)}
          page={pageEtoToEfo}
          handleChangePage={handleChangePageEtoToEfo}
        />
      )}
    </>
  );
}
