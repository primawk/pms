import React from 'react';

// import { Grid } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';

// components
import { InventorySection } from '.';

export default function AllInventory() {
  // const menuList = [
  //   { value: 'all-inventory', label: 'Semua' },
  //   { value: 'inventory-sm', label: 'Inventory SM' },
  //   { value: 'inventory-eto', label: 'Inventory ETO' },
  //   { value: 'inventory-efo', label: 'Inventory EFO' },
  //   { value: 'master-inventory', label: 'Master Data Inventory' }
  // ];

  // const { activityType } = useParams();
  // const navigate = useNavigate();

  // const [menuTab, setMenuTab] = useState(activityType || '');

  // const handleChangeTab = (event, _menuTab) => {
  //   setMenuTab(_menuTab);
  //   switch (_menuTab) {
  //     case 'ore-getting':
  //       navigate('/mining-activity/ore-getting');
  //       break;
  //     case 'ore-hauling-to-eto':
  //       navigate('/mining-activity/ore-hauling-to-eto');
  //       break;
  //     case 'eto-to-efo':
  //       navigate('/mining-activity/eto-to-efo');
  //       break;
  //     default:
  //       navigate('/mining-activity/all-activity');
  //   }
  // };

  return (
    <>
    
      <InventorySection title="Inventory SM" subtitle="Kegiatan Penambangan" />
      <InventorySection title="Inventory ETO" subtitle="Stockfile" />
      <InventorySection title="Inventory EFO" subtitle="Stockyard" />
    </>
  );
}
