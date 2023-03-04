import { Navigate, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '../guards';

import MainLayout from '../layouts/main';

import { PATHS } from '../config/paths';
import { SignUp } from '../features';

import { DashboardLayout } from '../layouts';

import { NotFound, HomePage, Page500, Dashboard, SigninPage } from '../pages';
export default function Router() {
  return useRoutes([
    {
      path: PATHS.AUTH.ROOT,
      children: [
        {
          path: PATHS.AUTH.SINGNIN,
          element: (
            <GuestGuard>
              <SigninPage />
            </GuestGuard>
          ),
        },
        {
          path: PATHS.AUTH.SIGNUP,
          element: (
            <GuestGuard>
              <SignUp />
            </GuestGuard>
          ),
        },
      ],
    },

    // Dashboard Routes
    {
      path: PATHS.DASHBOARD.ROOT,
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [{ path: PATHS.ALL, element: <Dashboard /> }],
    },

    // Main Routes
    {
      path: PATHS.ALL,
      element: <MainLayout />,
      children: [
        { path: PATHS.MAIN.ERROR.P_500, element: <Page500 /> },
        { path: PATHS.MAIN.ERROR.P_404, element: <NotFound /> },
        { path: PATHS.ALL, element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: PATHS.ROOT,
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
    { path: PATHS.ALL, element: <Navigate to="/404" replace /> },
  ]);
}
