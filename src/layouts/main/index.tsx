import Footer from './footer/Footer';
import { Header } from './header/Header';
// mui
import { Box } from '@mui/material';
// components
import { CustomImageBackHeader } from '../../components';
// images
import decoTopLeft from '../../assets/images/deco_top_left_rose.svg';
import { Outlet } from 'react-router-dom';
export default function MainLayout() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <CustomImageBackHeader src={decoTopLeft} alt="" />
        <Header isLogged={false} username="Leila" />
        here the rest of the content
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}
