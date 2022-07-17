import React from 'react';

// components
import { InventorySection } from '.';

export default function AllInventory() {
  return (
    <>
      <InventorySection title="Inventory SM" subtitle="Kegiatan Penambangan" />
      <InventorySection title="Inventory ETO" subtitle="Stockfile" />
      <InventorySection title="Inventory EFO" subtitle="Stockyard" />
    </>
  );
}
