import { PATHS } from '../../../../config/paths';
interface Item {
  name: string;
  path: string | (typeof PATHS)[keyof typeof PATHS];
}

export interface ItemsType {
  [key: string]: Item;
}
export const ItemsMain = {
  home: { name: 'header.link_home', path: PATHS.MAIN.HOME },
  about: { name: 'header.link_about', path: PATHS.ABOUT },
  posts: { name: 'header.link_posts', path: PATHS.POSTS },
  contact: { name: 'header.link_contact', path: PATHS.CONTACT },
};

export const ItemsDashboard = {
  posts: {
    name: 'dashboardSidebar.posts',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST}`,
  },
  chat: {
    name: 'dashboardSidebar.chats',
    path: `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.CHAT}`,
  },
};
