import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxCenterGetStarted = styled(Box)(() => ({
  display: 'flex',

  alignItems: 'center',
  padding: '8px',
  flexDirection: 'row',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
