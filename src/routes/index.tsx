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
  ListPostsPageStudent,
  ListPostsPage,
  ChatPage,
  ProfilePage,
  FavoritePage,
  MapPostsPage,
  DashboardAdminPage,
  DashboardAdminStudents,
  DashboardAdminOwners,
  DashboardAdminPosts,
  AddUserPage,
  DetailPostPage,
  AboutUsPage,
} from '../pages';
import { useTranslation } from 'react-i18next';

export default function Router() {
  const { t } = useTranslation();

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
            { path: PATHS.DASHBOARD.ADMIN.POSTS, element: <DashboardAdminPosts /> },
            {
              path: PATHS.DASHBOARD.ADMIN.EDIT_STUDENT,

              element: <ProfilePage isAdmin={true} backStudentsList={true} />,
            },
            {
              path: PATHS.DASHBOARD.ADMIN.EDIT_OWNER,

              element: (
                <ProfilePage isAdmin={true} backOwnersList={true} backStudentsList={false} />
              ),
            },
            {
              path: PATHS.DASHBOARD.ADMIN.ADD_STUDENT,

              element: <AddUserPage backStudentList={true} />,
            },
            {
              path: PATHS.DASHBOARD.ADMIN.ADD_OWNER,

              element: <AddUserPage backOwnersList={true} />,
            },

            // ListPostsPage
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
        { path: PATHS.ABOUT, element: <AboutUsPage /> },
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
        { path: PATHS.MAIN.DETAIL, element: <DetailPostPage /> },

        { path: `${PATHS.POSTS}/${PATHS.MAIN.MAP}`, element: <MapPostsPage /> },
      ],
    },
    { path: PATHS.ALL, element: <Navigate to="/404" replace /> },
  ]);
}
