import Footer from './footer/Footer';
import { Header } from './header/Header';
// mui
import { Box } from '@mui/material';
// components
import { CustomImageBackHeader } from '../../components';
// images
import decoTopLeft from '../../assets/images/deco_top_left_rose.svg';
import layoutMainRoseTruc from '../../assets/images/layoutMainRoseTruc.svg';
import ImagePink from '../../assets/images/BackImagePinkLeft.svg';

import { Outlet } from 'react-router-dom';
import { getPersistData } from '../../utils/localstorage/localStorage.utils';
import { BackImagePink, BackImagePinkLeft } from './common.styles';
export default function MainLayout() {
  const user = getPersistData('user', true);

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <BackImagePink src={layoutMainRoseTruc} />
        <BackImagePinkLeft src={ImagePink} />
        <CustomImageBackHeader src={decoTopLeft} alt="" />
        <Header isLogged={user?.isLogged} username={user?.username} status={user?.status} />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}
