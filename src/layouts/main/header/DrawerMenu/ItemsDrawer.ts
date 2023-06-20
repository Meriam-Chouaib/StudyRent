import { PATHS } from '../../../../config/paths';
import { getPersistData } from '../../../../utils';
interface Item {
  name: string;
  path: string | (typeof PATHS)[keyof typeof PATHS];
}
export const getItemsDrawer = () => {
  const user = getPersistData('user', true);

  if (user) {
    if (user.role === 'STUDENT') return ItemsDashboardStudent;
    if (user.role === 'OWNER') return ItemsDashboard;
    if (user.role === 'ADMIN') return ItemsDashboardAdmin;
  }
};
export interface ItemsType {
  [key: string]: Item;
}
export const ItemsMain = {
  home: { name: 'header.link_home', path: PATHS.MAIN.HOME },
  about: { name: 'header.link_about', path: PATHS.ABOUT },
  posts: { name: 'header.link_posts', path: PATHS.POSTS },
};

export const ItemsDashboard = {
  chat: {
    name: 'dashboardSidebar.chats',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.CHAT}`,
  },
  profile: {
    name: 'dashboardSidebar.profile',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.PROFILE}`,
  },
  favoris: {
    name: 'dashboardSidebar.favoris',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.FAVORIS}`,
  },
  posts: {
    name: 'dashboardSidebar.posts',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}`,
  },
};

export const ItemsDashboardStudent = {
  favoris: {
    name: 'dashboardSidebar.favoris',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.FAVORIS}`,
  },
  chat: {
    name: 'dashboardSidebar.chats',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.CHAT}`,
  },
  profile: {
    name: 'dashboardSidebar.profile',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.PROFILE}`,
  },
};
export const ItemsDashboardAdmin = {
  students: {
    name: 'dashboardSidebar.students',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.STUDENTS}`,
  },
  owners: {
    name: 'dashboardSidebar.owners',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.OWNERS}`,
  },
  posts: {
    name: 'dashboardSidebar.posts',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.POST.LIST}`,
  },
};
