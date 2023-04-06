import { Home, Chat, Favorite } from '@material-ui/icons';
import theme from '../../../theme';
import { ItemSideBarProps } from '../../../components/ItemSideBar/ItemSideBar.types';
import { PATHS } from '../../../config/paths';

const ItemsOwner: ItemSideBarProps[] = [
  {
    txt: 'Apartements',
    path: PATHS.DASHBOARD.POST.LIST,
    //    icon: <Home style={{ isActive? color: `${theme.palette.primary.dark}`: color: `${theme.palette.waring.main}` }} />,
    icon: <Home style={{ color: `${theme.palette.primary.dark}` }} />,
  },
  {
    txt: 'CHATS',
    icon: <Chat style={{ color: `${theme.palette.primary.dark}` }} />,
    path: PATHS.DASHBOARD.POST.LIST,
  },
  {
    txt: 'POSTS',
    icon: <Home style={{ color: `${theme.palette.primary.dark}` }} />,
    path: PATHS.DASHBOARD.POST.LIST,
  },
];

export { ItemsOwner };
