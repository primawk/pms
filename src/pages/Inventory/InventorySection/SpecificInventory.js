import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

// components
import { InventorySection, ReportSection, MasterData } from '.';
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function SpecificInventory() {
  const { inventoryType } = useParams();

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
    ['mining', 'summary', inventoryType],
    () =>
      MiningActivityService.getInventorySumary({
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
    ['mining', 'dome-list', inventoryType],
    () =>
      MiningActivityService.getDomeSummary({
        page: 1,
        row: 3,
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
