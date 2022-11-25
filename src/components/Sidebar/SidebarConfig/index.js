import { Icon } from '@iconify/react';
import UserIcon from '@iconify/icons-carbon/user-avatar-filled';
import HomeIcon from '@iconify/icons-carbon/home';
import OreGettingIcon from '@iconify/icons-eos-icons/data-mining';
import ShipmentIcon from '@iconify/icons-mdi/cargo-ship';
import MiningToolIcon from '@iconify/icons-mdi/dump-truck';
import LabIcon from '@iconify/icons-icomoon-free/lab';
import Inventory from '../../../assets/Images/Vector.png';
import BankData from '../../../assets/Images/bank_data.png';
import ModulLossing from '../../../assets/Images/modul-lossing.png';

const getIcon = (name) => <Icon icon={name} height={24} width={24} color="#3f48c0" />;
const getImg = (name) => (
  <>
    <img src={name} alt=""></img>
  </>
);

// Add list sidebar menu here, use icon from @iconify/{icon_pack} based from figma icon

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    icon: getIcon(HomeIcon)
    // permissions: ['Super Admin'] for permission if needed
  },
  {
    title: 'User Management',
    path: 'user-management/user',
    icon: getIcon(UserIcon)
  },
  {
    title: 'Kegiatan Tambang',
    path: 'mining-activity',
    icon: getIcon(OreGettingIcon)
  },
  {
    title: 'Pemasaran',
    path: 'shipment/efo-to-shipment',
    icon: getIcon(ShipmentIcon)
  },
  {
    title: 'Inventory',
    path: 'inventory',
    icon: getImg(Inventory)
  },
  {
    title: 'Laporan Lab',
    path: 'lab-report',
    icon: getIcon(LabIcon)
  },
  {
    title: 'Alat Tambang',
    path: 'mining-tool',
    icon: getIcon(MiningToolIcon)
  },
  {
    title: 'Bank Data',
    path: 'bank-data',
    icon: getImg(BankData)
  },
  {
    title: 'Modul Lossing',
    path: 'modul-lossing',
    icon: getImg(ModulLossing)
  }
];

export default sidebarConfig;
