import { List } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  isMain?: boolean;
}
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, isMain }) => ({
  backgroundColor: 'transparent',
  top: isMain ? '2%' : '0%',
  width: 'auto',
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    top: isMain ? '1.5%' : '1.5%',
  },
  [theme.breakpoints.down(539)]: {
    top: isMain ? '4%' : '3%',
  },
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const ListStyled = styled(List)(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: 3,
  flexDirection: 'column',
}));
