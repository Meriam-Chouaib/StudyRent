import { PATHS } from '../../../config/paths';
import IconHome from '../../../assets/icons/ic_home';
import IconChat from '../../../assets/icons/ic_chat';
import IconFavoris from '../../../assets/icons/ic_heart';
import IconProfile from '../../../assets/icons/ic_profile';

export default function useGetIconsStudent(activePath: string) {
  return [
    {
      txt: 'dashboardSidebar.chats',
      icon: (
        <IconChat isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.CHAT}`} />
      ),
      path: PATHS.DASHBOARD.CHAT,
    },
    {
      txt: 'Favoris',
      icon: (
        <IconFavoris
          isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.FAVORIS}`}
        />
      ),
      // icon: <Icon icon={Home} color="primary" isActive={false} />,
      path: PATHS.DASHBOARD.FAVORIS,
    },
    {
      txt: 'pofile',
      icon: (
        <IconProfile
          isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.PROFILE}`}
        />
      ),
      // icon: <Icon icon={Home} color="primary" isActive={false} />,
      path: PATHS.DASHBOARD.PROFILE,
    },
  ];
}
