import { Navigate, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard, RoleBasedGuard } from '../guards';

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
import { useTranslation } from 'react-i18next';
import { ListPostsPageStudent } from '../pages/listPostsPage/ListPostsPageStudent';
import { getPersistData } from '../utils';
import { IUser } from '../redux/api/user/user.types';
import { ChatPage } from '../pages/dashboard/chatPage/ChatPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { FavoritePage } from '../pages/dashboard/favoritePage/FavoritePage';
import { MapPostsPage } from '../pages/mapPostsPage/MapPostsPage';
import { DashboardAdminPage } from '../pages/dashboardAdmin/DashboardAdminPage';
import { DashboardAdminStudents } from '../pages/dashboardAdmin/DashboardAdminStudents/DashboardAdminStudents';
import DashboardAdminOwners from '../pages/dashboardAdmin/DashboardAdminOwners/DashboardAdminOwners';
export default function Router() {
  const { t } = useTranslation();
  const user: IUser = getPersistData('user', true);

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
          <RoleBasedGuard accessibleRoles={['ADMIN', 'OWNER']}>
            <DashboardLayout />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        { path: PATHS.ALL, element: <Dashboard /> },
        { path: PATHS.DASHBOARD.POST.ADD, element: <AddPostPage title={t('postForm.title')} /> },
        {
          path: PATHS.DASHBOARD.POST.EDIT,
          element: <AddPostPage title={t('postForm.edit_post_title')} isEdit={true} />,
        },
        { path: PATHS.DASHBOARD.POST.LIST, element: <ListPostsPage /> },
      ],
    },
    {
      path: PATHS.DASHBOARD.ROOT,
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: PATHS.DASHBOARD.PROFILE, element: <ProfilePage /> },
        { path: PATHS.DASHBOARD.FAVORIS, element: <FavoritePage /> },
        { path: PATHS.DASHBOARD.CHAT, element: <ChatPage /> },
        { path: PATHS.DASHBOARD.ADMIN.STUDENTS, element: <DashboardAdminStudents /> },

        {
          path: PATHS.DASHBOARD.ADMIN.ROOT,
          element: (
            <RoleBasedGuard accessibleRoles={['ADMIN']}>
              <DashboardAdminPage />
            </RoleBasedGuard>
          ),
          children: [
            { path: PATHS.DASHBOARD.ADMIN.STUDENTS, element: <DashboardAdminStudents /> },
            { path: PATHS.DASHBOARD.ADMIN.OWNERS, element: <DashboardAdminOwners /> },
          ],
        },
      ],
    },

    // Main Routes
    {
      path: PATHS.ALL,
      element: <MainLayout />,
      children: [
        { path: PATHS.MAIN.HOME, element: <HomePage /> },
        { path: PATHS.POSTS, element: <ListPostsPageStudent displayFilter={true} /> },
        { path: PATHS.MAIN.ERROR.P_500, element: <Page500 /> },
        { path: PATHS.MAIN.ERROR.P_404, element: <NotFound /> },
        { path: PATHS.ALL, element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: PATHS.ROOT,
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: `${PATHS.POSTS}/${PATHS.MAIN.MAP}`, element: <MapPostsPage /> },
      ],
    },
    { path: PATHS.ALL, element: <Navigate to="/404" replace /> },
  ]);
}
