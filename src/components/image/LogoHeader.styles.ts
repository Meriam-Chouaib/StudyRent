import { styled } from '@mui/material';
import theme from '../../theme';
export const CustomImageTop = styled('img')({
  height: 100,
  Width: 80,
  position: 'absolute',
  top: 0,
  left: 0,
  [theme.breakpoints.down('md')]: {
    height: '10vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '8vh',
  },
});
export const LogoHeader = styled('img')({
  height: 60,
  Width: 70,
  [theme.breakpoints.down('sm')]: {
    height: '2rem',
  },
  [theme.breakpoints.down(454)]: {
    display: 'none',
  },
});
