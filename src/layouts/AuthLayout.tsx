import { CustomImageTop } from './CustomImageTop';
import { CustomImageBottom } from './CustomImageBottom.style';
import { StyledLogoDark } from './StyledLogoDark';
import imageTop from '../assets/images/Auth-motif-haut.svg';

import imageBottom from '../assets/images/Auth-motif-bas.svg';
import { switchLanguage } from '../utils/helpers/i18n.changeLanguage';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
export function AuthLayout() {
  return (
    <>
      <StyledLogoDark />
      <Button onClick={() => switchLanguage('en')}>English</Button>
      <Button onClick={() => switchLanguage('fr')}>Français</Button>
      <CustomImageTop src={imageTop} alt="" />
      <Outlet />
      <CustomImageBottom src={imageBottom} alt="" />
    </>
  );
}
