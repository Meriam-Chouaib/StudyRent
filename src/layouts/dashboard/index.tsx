import { Outlet } from 'react-router-dom';
import Footer from '../main/footer/Footer';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import { ItemsOwner } from './sidebar/itemsSidebar';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { getPersistData } from '../../utils/localstorage/localStorage.utils';
import imgProfile from '../../assets/images/imgProfile.jpg';

const user = getPersistData('user', true);
export function DashboardLayout() {
  return (
    <>
      <Grid container sx={{ position: 'relative' }}>
        <Grid item xs={2}>
          <SideBar items={ItemsOwner} />
        </Grid>
        <Grid item xs={10} p={2}>
          <Box sx={{ justifyContent: 'end', display: 'flex' }}>
            <Header img={imgProfile} status={user?.status} username={user?.username} />
          </Box>

          <Outlet />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
