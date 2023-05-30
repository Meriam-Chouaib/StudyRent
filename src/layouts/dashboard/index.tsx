import { Navigate, Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../main/footer/Footer';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import useGetIcons from './sidebar/useGetIcons';
import Grid from '@mui/material/Grid';
import { getPersistData } from '../../utils/localstorage/localStorage.utils';
import imgProfile from '../../assets/images/imgProfile.jpg';
import { Box, Stack } from '@mui/material';
import { ButtonWithIcon } from '../../components';
import PeopleIcon from '@material-ui/icons/People';

const user = getPersistData('user', true);
export function DashboardLayout() {
  const location = useLocation();
  const activePath = location.pathname;
  const icons = useGetIcons(activePath);

  return (
    <>
      <Grid container sx={{ position: 'relative', justifyContent: 'center' }}>
        <Grid item xs={0} md={2}>
          <SideBar items={icons} activePath={activePath} />
        </Grid>
        <Grid item xs={11} md={10} p={2} minHeight={'100vh'}>
          <Header img={imgProfile} status={user?.status} username={user?.username} />
          <Box sx={{ minHeight: '100%' }}>
            <Outlet />
          </Box>
        </Grid>
        <Grid item xs={12} zIndex={11}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
