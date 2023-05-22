import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxPostsSyled = styled(Box)((isHomePage) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignItems: 'center',
  gap: '2rem',
  padding: '4rem 4rem',
  borderRadius: '3rem',
  [theme.breakpoints.down(997)]: {
    gridTemplateColumns: '1fr 1fr ',
    padding: '4rem 4rem',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr ',
  },

  [theme.breakpoints.down(696)]: {
    gridTemplateColumns: '1fr ',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));
