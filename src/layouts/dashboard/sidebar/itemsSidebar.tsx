import { Home, Chat, Favorite } from '@material-ui/icons';
import theme from '../../../theme';
import { ItemSideBarProps } from '../../../components/ItemSideBar/ItemSideBar.types';
const Items = () => {};

const ItemsOwner: ItemSideBarProps[] = [
  {
    txt: 'Apartements',
    path: '',
    icon: <Home style={{ color: `${theme.palette.primary.dark}` }} />,
  },
  { txt: 'CHATS', icon: <Chat style={{ color: `${theme.palette.primary.dark}` }} />, path: '' },
  {
    txt: 'POSTS',
    icon: <Home style={{ color: `${theme.palette.primary.dark}` }} />,
    path: '',
  },
];

export { ItemsOwner };
