import { styled } from '@mui/material';
import theme from '../../theme';
export const CustomImageTop = styled('img')({
  height: 100,
  Width: 80,
  [theme.breakpoints.down('sm')]: {
    height: '8vh',
  },
});
export const LogoHeader = styled('img')({
  height: 60,
  Width: 70,
  [theme.breakpoints.down('sm')]: {
    height: '4rem',
  },
});
