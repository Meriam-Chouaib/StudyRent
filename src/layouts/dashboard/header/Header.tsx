import { Stack } from '@mui/material';
import { TranslationStyled } from '../../../components';
import { headerProps } from '../../main/header/header.types';
import { UserLogged } from '../../main/header/UserLoggedIn/UserLogged';
import { BoxDrawerDashboard } from '../../main/header/header.styles';
import { ItemsType, getItemsDrawer } from '../../main/header/DrawerMenu/ItemsDrawer';
import { DrawerPart } from '../../main/header/DrawerMenu/DrawerMenu';

export default function Header({ username, status, img }: headerProps) {
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
          <DrawerPart Items={getItemsDrawer() as ItemsType} isMain={false} />
        </BoxDrawerDashboard>

        <TranslationStyled />

        <UserLogged username={username} status={status} img={img} />
      </Stack>
    </>
  );
}
