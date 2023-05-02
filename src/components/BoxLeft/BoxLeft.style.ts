import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxLeft = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [theme.breakpoints.down(997)]: {
    justifyContent: 'center',
  },
}));
