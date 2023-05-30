import { Box, Stack } from '@mui/material';
import { TranslationStyled } from '../../../components';
import { headerProps } from '../../main/header/header.types';
import { UserLogged } from '../../main/header/UserLoggedIn/UserLogged';
import { BoxHeader, HeaderDashboard } from './Header.styles';
import { BoxDrawerDashboard } from '../../main/header/header.styles';
import { ItemsDashboard, ItemsDashboardStudent } from '../../main/header/DrawerMenu/ItemsDrawer';
import { DrawerPart } from '../../main/header/DrawerMenu/DrawerMenu';
import { getPersistData } from '../../../utils';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import { PATHS } from '../../../config/paths';
import { Link } from 'react-router-dom';

export default function Header({ username, status, img }: headerProps) {
  const user = getPersistData('user', true);

  return (
    <>
      <Stack
        display={'flex'}
        direction={'row'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        spacing={4}
      >
        <BoxDrawerDashboard>
          <DrawerPart
            Items={user && user.role === 'OWNER' ? ItemsDashboard : ItemsDashboardStudent}
            isMain={false}
          />
        </BoxDrawerDashboard>
        {user && user.role === 'ADMIN' && (
          <Link to={PATHS.DASHBOARD.ADMIN.ROOT}>
            <SettingsIcon color="primary" />
          </Link>
        )}

        <TranslationStyled />

        <UserLogged username={username} status={status} img={img} />
      </Stack>
    </>
  );
}
