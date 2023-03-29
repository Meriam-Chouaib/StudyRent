import { Outlet } from 'react-router-dom';
import Footer from '../main/footer/Footer';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import { ItemsOwner } from './sidebar/itemsSidebar';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

export function DashboardLayout() {
  return (
    <>
      <Grid container sx={{ position: 'relative' }}>
        <Grid item xs={4}>
          <SideBar items={ItemsOwner} />
        </Grid>
        <Grid item xs={8}>
          <Header />
          <Outlet />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
