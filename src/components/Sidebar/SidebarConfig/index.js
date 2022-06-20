import { Icon } from '@iconify/react';
import UserIcon from '@iconify/icons-carbon/user-avatar-filled';
import HomeIcon from '@iconify/icons-carbon/home';

const getIcon = (name) => <Icon icon={name} height={24} width={24} color="#3f48c0" />;

// Add list sidebar menu here, use icon from @iconify/{icon_pack} based from figma icon

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    icon: getIcon(HomeIcon),
    permissions: ['Super Admin']
  },
  {
    title: 'User Management',
    path: 'user-management',
    icon: getIcon(UserIcon),
    permissions: ['Super Admin']
  }
];

export default sidebarConfig;
