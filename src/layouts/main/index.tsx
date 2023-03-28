import Footer from './footer/Footer';
import { Header } from './header/Header';
// mui
import { Box } from '@mui/material';
// components
import { CustomImageBackHeader } from '../../components';
// images
import decoTopLeft from '../../assets/images/deco_top_left_rose.svg';
import { Outlet } from 'react-router-dom';
import { getPersistData } from '../../utils/localstorage/localStorage.utils';
export default function MainLayout() {
  const user = getPersistData('user', true);

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <CustomImageBackHeader src={decoTopLeft} alt="" />
        <Header isLogged={user?.isLogged} username={user?.username} status={user?.status} />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}
