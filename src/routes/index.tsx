import { Navigate, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '../guards';

import MainLayout from '../layouts/main';

import { PATHS } from '../config/paths';

import { AuthLayout, DashboardLayout } from '../layouts';

import {
  NotFound,
  HomePage,
  Page500,
  Dashboard,
  SigninPage,
  SignupPage,
  AddPostPage,
} from '../pages';
import { ListPostsPage } from '../pages/dashboard/listPostsPage/ListPostsPage';
export default function Router() {
  return useRoutes([
    {
      path: PATHS.AUTH.ROOT,
      element: <AuthLayout />,
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
              <SignupPage />
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
      children: [
        { path: PATHS.ALL, element: <Dashboard /> },
        { path: PATHS.DASHBOARD.POST.ADD, element: <AddPostPage /> },
        { path: PATHS.DASHBOARD.POST.LIST, element: <ListPostsPage /> },
      ],
    },

    // Main Routes
    {
      path: PATHS.ALL,
      element: <MainLayout />,
      children: [
        { path: PATHS.MAIN.HOME, element: <HomePage /> },
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
