import { useSelector } from 'react-redux';
import Footer from './footer/Footer';
import { Header } from './header/Header';
// mui
import { Box } from '@mui/material';
// components
import { CustomImageBackHeader } from '../../components';
// images
import decoTopLeft from '../../assets/images/deco_top_left_rose.svg';
import { Outlet } from 'react-router-dom';
import { RootState } from '../../redux/store';
export default function MainLayout() {
  const userState = useSelector((state: RootState) => state.userState);

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <CustomImageBackHeader src={decoTopLeft} alt="" />
        <Header isLogged={userState.isLoggedIn} username={userState.user?.username} />
        here the rest of the content
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}
