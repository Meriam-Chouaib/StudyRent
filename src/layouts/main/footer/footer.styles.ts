import { Box, styled } from '@mui/material';
import { COLORS } from '../../../config/colors';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../../../theme';

export default {
  // styles go here
};

export const ImgMedia = styled('img')({
  height: '2rem',
  width: '2rem',
  margin: '0px 9px',
});

export const BoxHistory = styled(Box)(() => ({
  width: '40%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
export const BoxMenu = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 0px',
  gap: '1rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));
