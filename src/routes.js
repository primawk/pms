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
import KegiatanTambang from 'pages/KegiatanTambang';
import LaporanLab from 'pages/LaporanLab';
import InputLaporanEksternal from 'pages/LaporanLab/InputLaporanEksternal';
import InputLaporanInternal from 'pages/LaporanLab/InputLaporanInternal';
import DetailInternal from 'pages/LaporanLab/DetailInternal';
import DetailEksternal from 'pages/LaporanLab/DetailEksternal';

export default function Routes() {
  return useRoutes([
    {
      element: <LayoutSidebar />,
      children: [
        { path: '/', element: <Navigate to="/auth/login" replace /> },
        {
          path: 'user-management',
          element: <UserManagement />,
          children: [
            {
              path: 'user',
              element: []
            },
            {
              path: 'role',
              element: []
            }
          ]
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'laporan-lab',
          element: <LaporanLab />
        },

        {
          path: 'kegiatan-tambang',
          element: <KegiatanTambang />
        },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/input-laporan-eksternal',
      element: <InputLaporanEksternal />
    },
    {
      path: '/input-laporan-internal',
      element: <InputLaporanInternal />
    },
    {
      path: '/detail-internal',
      element: <DetailInternal />
    },
    {
      path: '/detail-eksternal',
      element: <DetailEksternal />
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
