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
export const BoxSpaceBetween = styled(Box)(() => ({
  display: 'flex',
  width: '84%',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
export const BoxSpaceBetweenCenter = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
