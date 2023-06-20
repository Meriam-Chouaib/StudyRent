import { Navigate, Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../main/footer/Footer';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import useGetIcons from './sidebar/useGetIcons';
import Grid from '@mui/material/Grid';
import { getPersistData } from '../../utils/localstorage/localStorage.utils';
import imgProfile from '../../assets/images/imgProfile.jpg';
import { Box, Stack } from '@mui/material';
import { BoxOut, ButtonWithIcon } from '../../components';
import PeopleIcon from '@material-ui/icons/People';
import Copyright from './footer/Copyright';
import theme from '../../theme';

export function DashboardLayout() {
  const location = useLocation();
  const activePath = location.pathname;
  const icons = useGetIcons(activePath);

  const user = getPersistData('user', true);

  return (
    <>
      <Grid container sx={{ position: 'relative', justifyContent: 'center' }}>
        <Grid item xs={0} md={2}>
          <SideBar items={icons} activePath={activePath} />
        </Grid>
        <Grid item xs={11} md={10} p={2} minHeight={'100vh'}>
          <Header isLogged={user?.isLogged} username={user?.username} status={user?.status} />
          <BoxOut>
            <Outlet />
          </BoxOut>
        </Grid>
        <Grid item xs={12} zIndex={11}>
          {user.role === 'ADMIN' ? <Copyright /> : <Footer />}
        </Grid>
      </Grid>
    </>
  );
}
