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
import LaporanLab from 'pages/LaporanLab';
import InputLaporanEksternal from 'pages/LaporanLab/InputLaporanEksternal';
import InputLaporanInternal from 'pages/LaporanLab/InputLaporanInternal';
import DetailInternal from 'pages/LaporanLab/DetailInternal';
import DetailEksternal from 'pages/LaporanLab/DetailEksternal';
import HistoryEdit from 'pages/LaporanLab/HistoryEdit';
import MiningActivity from 'pages/MiningActivity';
import HasilPencarian from 'pages/LaporanLab/HasilPencarian';
import HasilKosong from 'pages/LaporanLab/HasilKosong';
import LayoutNavbar from 'components/Layout/LayoutNavbar';
import DetailActivity from 'pages/MiningActivity/MiningSection/DetailActivity';
import FormMiningActivity from 'pages/MiningActivity/MiningSection/FormMiningActivity';
import HistoryActivity from 'pages/MiningActivity/MiningSection/HistoryActivity';

export default function Routes() {
  return useRoutes([
    {
      element: <LayoutSidebar />,
      children: [
        { path: '/', element: <Navigate to="/auth/login" replace /> },
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
          path: 'laporan-lab',
          element: <LaporanLab />
        },
        {
          path: 'hasil-pencarian',
          element: <HasilPencarian />
        },
        {
          path: 'hasil-kosong',
          element: <HasilKosong />
        },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      // navbar only layout ( detail, history, input , etc )
      element: <LayoutNavbar />,
      children: [
        {
          path: 'mining-activity/:activityType/add',
          element: <FormMiningActivity />
        },
        {
          path: 'mining-activity/:activityType/edit/:id',
          element: <FormMiningActivity />
        },
        {
          path: 'mining-activity/:activityType/detail/:id',
          element: <DetailActivity />
        },
        {
          path: 'mining-activity/:activityType/detail/history/:id',
          element: <HistoryActivity />
        }
      ]
    },
    // Laporan Lab
    {
      path: 'input-laporan-eksternal',
      element: <InputLaporanEksternal />
    },
    {
      path: 'input-laporan-internal',
      element: <InputLaporanInternal />
    },
    {
      path: 'detail-internal',
      element: <DetailInternal />
    },
    {
      path: 'detail-eksternal',
      element: <DetailEksternal />
    },
    {
      path: 'history-edit',
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
