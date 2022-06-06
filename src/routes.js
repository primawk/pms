import { Navigate, useRoutes } from 'react-router-dom';
// Layout
import LayoutSidebar from 'components/Layout/LayoutSidebar';
import LayoutAuth from 'components/Layout/LayoutAuth';
// Protected Route
import ProtectedRoute from 'components/ProtectedRoute';
//Component
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import UserManagement from 'pages/UserManagement';
import NotFound from 'pages/NotFound';

export default function Routes() {
  return useRoutes([
    {
      element: <LayoutSidebar />,
      children: [
        { path: '/', element: <Navigate to="/auth/login" replace /> },
        {
          path: 'user-management',
          element: (
            <ProtectedRoute permission={['Super Admin', 'Direksi']}>
              <UserManagement />
            </ProtectedRoute>
          )
        },
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute permission={['Super Admin', 'Direksi']}>
              <Dashboard />
            </ProtectedRoute>
          )
        },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
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
