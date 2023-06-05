import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxImages = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  [theme.breakpoints.down(800)]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
