import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
// images
import imageBottom from '../assets/images/Auth-motif-bas.svg';
import imageTop from '../assets/images/Auth-motif-haut.svg';
import logoDark from '../assets/images/logo-bleu-roi.svg';
// components
import { LogoTopRight, TranslationStyled } from '../components';
import { CustomImageTop } from '../components';
import { CustomImageBottom } from '../components';
export function AuthLayout() {
  return (
    <>
      <Box position={'relative'} height={'100vh'}>
        <Box>
          <LogoTopRight src={logoDark} alt="logo studyrent" />

          <CustomImageTop src={imageTop} alt="" />
          <Box sx={{ textAlign: 'center', padding: '5px 0px' }}>
            <TranslationStyled />
          </Box>
        </Box>
        <Outlet />
        <CustomImageBottom src={imageBottom} alt="" />
      </Box>
    </>
  );
}
