import { Navigate, Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../main/footer/Footer';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import useGetIcons from './sidebar/useGetIcons';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { getPersistData } from '../../utils/localstorage/localStorage.utils';
import imgProfile from '../../assets/images/imgProfile.jpg';
import { width } from '@mui/system';
import { IUser } from '../../redux/api/user/user.types';
import { NotFound } from '../../pages';
import { PATHS } from '../../config/paths';

const user = getPersistData('user', true);
export function DashboardLayout() {
  const location = useLocation();
  const activePath = location.pathname;
  const icons = useGetIcons(activePath);
  const Navigate = useNavigate();
  //   if (user.role === 'STUDENT') {
  //     Navigate(`/${PATHS.MAIN.ERROR.P_404}`);
  //   }
  return (
    <>
      <Grid container sx={{ position: 'relative' }}>
        <Grid item xs={3} md={2}>
          <SideBar items={icons} activePath={activePath} />
        </Grid>
        <Grid item xs={9} md={10} p={2}>
          <Header img={imgProfile} status={user?.status} username={user?.username} />
          {/* {user.role == 'STUDENT' && <h1>unothorizeedd</h1>}
          {user.role != 'STUDENT' && <Outlet />} */}
          <Outlet />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
