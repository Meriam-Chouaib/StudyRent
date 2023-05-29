import { PATHS } from '../../../config/paths';
// import { Icon } from '../../../components/Icon/Icon';
import IconHome from '../../../assets/icons/ic_home';
import IconChat from '../../../assets/icons/ic_chat';
import IconProfile from '../../../assets/icons/ic_profile';
import IconFavoris from '../../../assets/icons/ic_heart';
import { getPersistData } from '../../../utils';
import { ReactNode } from 'react';
export interface IconsProps {
  txt: string;
  icon: JSX.Element;
  path: string;
}
export default function useGetIcons(activePath: string) {
  const user = getPersistData('user', true);
  const icons: IconsProps[] = [
    {
      txt: 'dashboardSidebar.chats',
      icon: (
        <IconChat isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.CHAT}`} />
      ),
      path: PATHS.DASHBOARD.CHAT,
    },
    {
      txt: 'dashboardSidebar.favoris',
      icon: (
        <IconFavoris
          isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.FAVORIS}`}
        />
      ),
      path: PATHS.DASHBOARD.FAVORIS,
    },
    {
      txt: 'dashboardSidebar.profile',
      icon: (
        <IconProfile
          isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.PROFILE}`}
        />
      ),
      path: PATHS.DASHBOARD.PROFILE,
    },
  ];
  if (user && user.role === 'OWNER')
    icons.unshift({
      txt: 'dashboardSidebar.posts',
      icon: (
        <IconHome
          isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}`}
        />
      ),
      path: PATHS.DASHBOARD.POST.LIST,
    });
  return icons;
}
