import { Box, styled, Stack } from '@mui/material';
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
export const StackPostInfo = styled(Stack)(() => ({
  width: '100%',
  padding: '2rem 0',
  alignItems: 'flex-start',
  [theme.breakpoints.down(800)]: {},
}));
