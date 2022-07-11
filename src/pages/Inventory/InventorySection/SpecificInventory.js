import React from 'react';
import { useParams } from 'react-router-dom';
// import { Grid } from '@mui/material';

// components
import { InventorySection, ReportSection } from '.';

export default function SpecificInventory() {
  // const [subMenu, setSubMenu] = useState(0);
  const { activityType } = useParams();

  // const handleChangeSubMenu = (value) => {
  //   setSubMenu(value);
  // };

  return (
    <>
      {/* <Grid
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
        />
      </Grid> */}
      <InventorySection
        title={
          activityType === 'inventory-sm'
            ? 'Inventory SM'
            : activityType === 'inventory-eto'
            ? 'Inventory ETO'
            : 'Inventory EFO'
        }
        subtitle={
          activityType === 'inventory-sm'
            ? 'Kegiatan Penambangan'
            : activityType === 'inventory-eto'
            ? 'Stockfile'
            : 'Stockyard'
        }
      />
      <ReportSection />
    </>
  );
}
