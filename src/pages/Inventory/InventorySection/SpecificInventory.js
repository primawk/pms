import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

// components
import { InventorySection, ReportSection, MasterData } from '.';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

// custom hook
import usePagination from 'hooks/usePagination';

// utils
import { ceilTotalData } from 'utils/helper';

export default function SpecificInventory({ selectedDate }) {
  const { inventoryType } = useParams();

  const { page, handleChangePage } = usePagination();

  const activityType =
    inventoryType === 'inventory-sm'
      ? 'ore-getting'
      : inventoryType === 'inventory-eto'
      ? 'ore-hauling-to-eto'
      : inventoryType === 'inventory-efo'
      ? 'eto-to-efo'
      : undefined;

  // summary
  const {
    data: dataSummary,
    isLoading: isLoadingSummary,
    isFetching: isFetchingSummary
  } = useQuery(
    ['mining', 'summary', inventoryType, selectedDate],
    () =>
      MiningActivityService.getInventorySumary({
        start_date: selectedDate?.start_date,
        end_date: selectedDate?.end_date,
        inventory_type: inventoryType
      }),
    { keepPreviousData: true }
  );

  // activity
  const {
    data: dataActivity,
    isLoading: isLoadingActivity,
    isFetching: isFetchingActivity
    // inventoryType
  } = useQuery(
    ['mining', 'dome-list', inventoryType, page, selectedDate],
    () =>
      MiningActivityService.getDomeSummary({
        start_date: selectedDate?.start_date,
        end_date: selectedDate?.end_date,
        page: page,
        row: 10,
        inventory_type: inventoryType
      }),
    { keepPreviousData: true }
  );

  return (
    <>
      {isFetchingSummary && isFetchingActivity && <LoadingModal />}
      {inventoryType !== 'master-data' ? (
        <>
          {!isLoadingSummary && !isLoadingActivity && dataSummary && dataActivity && (
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
              page={page}
              handleChangePage={handleChangePage}
              count={ceilTotalData(dataActivity?.data?.pagination?.total_data || 0, 10)}
            />
          )}
          <ReportSection />
        </>
      ) : (
        <MasterData />
      )}
    </>
  );
}
