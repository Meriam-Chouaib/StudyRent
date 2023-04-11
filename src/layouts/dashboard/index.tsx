import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../main/footer/Footer';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import useGetIcons from './sidebar/useGetIcons';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { getPersistData } from '../../utils/localstorage/localStorage.utils';
import imgProfile from '../../assets/images/imgProfile.jpg';
import { width } from '@mui/system';

const user = getPersistData('user', true);
export function DashboardLayout() {
  const location = useLocation();
  const activePath = location.pathname;
  const icons = useGetIcons(activePath);

  return (
    <>
      <Grid container sx={{ position: 'relative' }}>
        <Grid item xs={3}>
          <SideBar items={icons} activePath={activePath} />
        </Grid>
        <Grid item xs={9} p={2}>
          <Header img={imgProfile} status={user?.status} username={user?.username} />

          <Outlet />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
