import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxCenterSpaceBetween = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
