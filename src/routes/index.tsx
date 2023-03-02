import { Navigate, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard, RoleBasedGuard } from '../guards';

import MainLayout from '../layouts/main';

import { PATHS } from '../config/paths';
import { SignIn, SignUp } from '../features';
import { AboutusLayout, AuthLayout, PostsLayout, DashboardLayout } from '../layouts';

import { NotFound, HomePage, ListStudents, Page500, AddStudent, Dashboard } from '../pages/index';
export default function Router() {
  return useRoutes([
    {
      path: PATHS.AUTH.ROOT,
      children: [
        {
          path: PATHS.AUTH.SINGNIN,
          element: (
            <GuestGuard>
              <SignIn />
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
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: PATHS.ROOT, element: <Dashboard /> },
        { path: PATHS.DASHBOARD.STUDENT.LIST, element: <ListStudents /> },
        { path: PATHS.DASHBOARD.STUDENT.LIST, element: <AddStudent /> },
      ],
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
