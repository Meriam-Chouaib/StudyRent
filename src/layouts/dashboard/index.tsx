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
import useGetIconsStudent from './sidebar/useGetIconStudent';

const user = getPersistData('user', true);
export function DashboardLayout() {
  const location = useLocation();
  const activePath = location.pathname;
  const icons = useGetIcons(activePath);
  const iconsStudent = useGetIconsStudent(activePath);
  const Navigate = useNavigate();
  return (
    <>
      <Grid container sx={{ position: 'relative', justifyContent: 'center' }}>
        <Grid item xs={0} md={2}>
          <SideBar items={user.role == 'STUDENT' ? iconsStudent : icons} activePath={activePath} />
        </Grid>
        <Grid item xs={11} md={10} p={2}>
          <Header img={imgProfile} status={user?.status} username={user?.username} />

          <Outlet />
        </Grid>
        <Grid item xs={12} zIndex={11}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
