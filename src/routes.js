import { Navigate, useRoutes } from 'react-router-dom';
// Layout
import LayoutSidebar from 'components/Layout/LayoutSidebar';
import LayoutAuth from 'components/Layout/LayoutAuth';
// Protected Route
// import ProtectedRoute from 'components/ProtectedRoute';
// <ProtectedRoute permission={['Super Admin', 'Direksi']}> use this if u need protected route ( per role )

//Component
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import UserManagement from 'pages/UserManagement';
import NotFound from 'pages/NotFound';
import InputLaporanEksternal from 'pages/LaporanLab/InputLaporanEksternal';
import InputLaporanInternal from 'pages/LaporanLab/InputLaporanInternal';
import DetailInternal from 'pages/LaporanLab/DetailInternal';
import DetailLaporanEksternal from 'pages/LaporanLab/DetailLaporanEksternal';
import HistoryEdit from 'pages/LaporanLab/HistoryEdit';
import MiningActivity from 'pages/MiningActivity';
import LayoutNavbar from 'components/Layout/LayoutNavbar';
import DetailActivity from 'pages/MiningActivity/MiningSection/DetailActivity';
import FormMiningActivity from 'pages/MiningActivity/MiningSection/FormMiningActivity';
import HistoryActivity from 'pages/MiningActivity/MiningSection/HistoryActivity';
import AllInventory from 'pages/Inventory';
import LaporanLab from 'pages/LaporanLab';
import CompanyReport from 'pages/LaporanLab/CompanyReport';
import DetailDome from 'pages/Inventory/DetailDome';
import EditLaporanInternal from 'pages/LaporanLab/EditLaporanInternal';
import EditLaporanEksternal from 'pages/LaporanLab/EditLaporanEksternal';
import BankData from 'pages/BankData';
import Lossing from 'pages/Lossing';
import LossingSummary from 'pages/Lossing/Summary';
import InputBankData from 'pages/BankData/InputBankData';
import DataReport from './pages/BankData/DataReport';
import MiningTool from 'pages/MiningTool';
import FormMiningTool from 'pages/MiningTool/MiningToolSection/FormMiningTool';
import { MiningToolGrouped } from 'pages/MiningTool/MiningToolSection';
import MiningToolDetail from 'pages/MiningTool/MiningToolSection/MiningToolDetail';

export default function Routes() {
  return useRoutes([
    {
      element: <LayoutSidebar />,
      children: [
        { path: '/', element: <Navigate to="/auth/login" replace /> },
        {
          path: 'bank-data',
          element: <BankData />
        },
        {
          path: 'bank-data/list',
          element: <DataReport />
        },
        {
          path: 'modul-lossing',
          element: <Lossing />
        },
        {
          path: 'modul-lossing/summary',
          element: <LossingSummary />
        },
        {
          path: 'user-management',
          element: <Navigate to="/user-management/user" replace />
        },
        {
          path: 'user-management/:tabType',
          element: <UserManagement />
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'mining-activity',
          element: <Navigate to="/mining-activity/all-activity" replace />
        },
        {
          path: 'mining-activity/:activityType',
          element: <MiningActivity />
        },
        {
          path: 'mining-activity/hauling/:activityType',
          element: <MiningActivity />
        },
        {
          path: 'inventory',
          element: <Navigate to="/inventory/all-inventory" replace />
        },
        {
          path: 'inventory/:inventoryType',
          element: <AllInventory />
        },
        {
          path: 'inventory/:inventoryType/:dataType',
          element: <AllInventory />
        },
        {
          path: 'lab-report',
          element: <Navigate to="/lab-report/internal" replace />
        },
        {
          path: 'lab-report/:report_type',
          element: <LaporanLab />
        },
        {
          path: 'lab-report/laporan-perusahaan',
          element: <CompanyReport />
        },
        {
          path: 'mining-tool',
          element: <MiningTool />
        },
        {
          path: 'mining-tool/list/:companyName',
          element: <MiningToolGrouped />
        },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      // navbar only layout ( detail, history, input , etc )
      element: <LayoutNavbar />,
      children: [
        // mining tool
        {
          path: 'mining-tool',
          children: [
            {
              path: 'add',
              element: <FormMiningTool />
            },
            {
              path: 'edit/:id',
              element: <FormMiningTool />
            },
            {
              path: 'detail/:id',
              element: <MiningToolDetail />
            }
          ]
        },
        // mining activity
        {
          path: 'mining-activity',
          children: [
            {
              path: ':activityType/add',
              element: <FormMiningActivity />
            },
            {
              path: ':activityType/edit/:id',
              element: <FormMiningActivity />
            },
            {
              path: ':activityType/detail/:id',
              element: <DetailActivity />
            },
            {
              path: ':activityType/detail/history/:id',
              element: <HistoryActivity />
            }
          ]
        },
        // inventory
        {
          path: 'inventory',
          children: [
            {
              path: ':inventoryType/detail-dome/:idDome',
              element: <DetailDome />
            }
          ]
        }
      ]
    },
    // Bank Data
    {
      path: 'bank-data/input',
      element: <InputBankData />
    },
    {
      path: 'bank-data/edit/:id',
      element: <InputBankData />
    },
    // Laporan Lab
    {
      path: 'lab-report/input-laporan-eksternal',
      element: <InputLaporanEksternal />
    },
    {
      path: 'lab-report/input-laporan-internal',
      element: <InputLaporanInternal />
    },
    {
      path: 'lab-report/detail/internal/:id',
      element: <DetailInternal />
    },
    {
      path: 'lab-report/edit/internal/:id',
      element: <EditLaporanInternal />
    },
    {
      path: 'lab-report/edit/eksternal/:id',
      element: <EditLaporanEksternal />
    },
    {
      path: 'lab-report/detail/eksternal/:id',
      element: <DetailLaporanEksternal />
    },
    {
      path: 'lab-report/history-edit',
      element: <HistoryEdit />
    },
    {
      path: '/auth',
      element: <LayoutAuth />,
      children: [
        { path: '', element: <Navigate to="/auth/login" replace /> },
        { path: 'login', element: <Login /> }
      ]
    },
    { path: '*', element: <Navigate to="/auth/login" replace /> },
    { path: '/404', element: <NotFound /> }
  ]);
}

// mining activity
// {
//   path: 'mining-activity',
//   children: [
//     {
//       path: '*',
//       element: <Navigate to="/mining-activity/all-activity" replace />
//     },
//     {
//       path: ':activityType',
//       element: <MiningActivity />
//     },
//     {
//       path: ':activityType/add',
//       element: <FormMiningActivity />
//     },
//     {
//       path: ':activityType/edit/:id',
//       element: <FormMiningActivity />
//     },
//     {
//       path: ':activityType/detail/:id',
//       element: <DetailActivity />
//     },
//     {
//       path: ':activityType/detail/history/:id',
//       element: <HistoryActivity />
//     }
//   ]
// },
