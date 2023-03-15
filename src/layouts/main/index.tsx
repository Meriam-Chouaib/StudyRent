import { Box, Container } from '@mui/material';
import { CustomImageTop } from '../../components/image/CustomImageTop.styles';
import decoTopLeft from '../../assets/images/deco_top_left_rose.svg';

import Footer from './footer/Footer';
import { Header } from './header/Header';
import { CustomImageBackHeader } from '../../components/image/CustomImageBackHeader.styles';

export default function MainLayout() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <CustomImageBackHeader src={decoTopLeft} alt="" />
        <Header isLogged={false} username="Leila" />
        here the rest of the content
        <Footer />
      </Box>
    </>
  );
}
