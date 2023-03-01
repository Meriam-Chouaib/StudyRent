import { Navigate, useRoutes } from 'react-router-dom'
import GuestGuard from '../guards/GuestGuard'
import AuthGuard from '../guards/AuthGuard'
import SignIn from '../features/auth/signIn/SignIn'
import DashboardLayout from '../layouts/dashboard'

import MainLayout from '../layouts/main'
import SignUp from '../features/auth/signUp/SignUp'
import { PATHS } from '../routes/paths'
import ListStudents from '../pages/listStudents/ListStudents'
import AddStudent from '../pages/addStudent/AddStudent'
import Page500 from '../pages/page500/Page500'
import NotFound from '../pages/notFoundPage/NotFound'
import HomePage from '../pages/homePage/HomePage'
import Dashboard from '../layouts/dashboard'
export default function Router() {
  return useRoutes([
    {
      path: PATHS.AUTH.root,
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
        { path: '/', element: <Dashboard /> },
        { path: '/student', element: <ListStudents /> }, //FeatureStudent
        { path: '/student/new', element: <AddStudent /> },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ])
}
