import { Box, styled } from '@mui/material';
import theme from '../../../theme';

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
export const BoxFooter = styled(Box)(() => ({
  backgroundColor: theme.palette.primary.main,
  position: 'sticky',
  width: '100%',
  bottom: 0,
}));
