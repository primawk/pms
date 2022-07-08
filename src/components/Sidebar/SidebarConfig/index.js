import { Icon } from '@iconify/react';
import UserIcon from '@iconify/icons-carbon/user-avatar-filled';
import HomeIcon from '@iconify/icons-carbon/home';
import OreGettingIcon from '@iconify/icons-eos-icons/data-mining';
import LabIcon from '@iconify/icons-icomoon-free/lab';

const getIcon = (name) => <Icon icon={name} height={24} width={24} color="#3f48c0" />;

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
    path: 'mining-activity/all-activity',
    icon: getIcon(OreGettingIcon)
  },
  {
    title: 'Laporan Lab',
    path: 'laporan-lab',
    icon: getIcon(LabIcon)
  }
];

export default sidebarConfig;
