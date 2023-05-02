import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxPostsSyled = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignItems: 'center',
  gap: '2rem',
  padding: '2rem 0',
  [theme.breakpoints.down(997)]: {
    gridTemplateColumns: '1fr 1fr ',
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
