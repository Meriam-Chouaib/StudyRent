import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxCenter = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const BoxOut = styled(Box)(() => ({
  minHeight: '100%',

  [theme.breakpoints.down(985)]: {
    width: '80%',
    margin: '0 auto',
  },
  [theme.breakpoints.down(754)]: {
    width: '75%',
  },
  [theme.breakpoints.down(649)]: {
    width: '70%',
  },
}));
