import { Box } from '@mui/material';
import { TranslationStyled } from '../../../components';
import { headerProps } from '../../main/header/header.types';
import { UserLogged } from '../../main/header/UserLoggedIn/UserLogged';
import { BoxHeader, HeaderDashboard } from './Header.styles';

export default function Header({ username, status, img }: headerProps) {
  return (
    <>
      <BoxHeader>
        <UserLogged username={username} status={status} img={img} />
        <TranslationStyled />
      </BoxHeader>
    </>
  );
}
