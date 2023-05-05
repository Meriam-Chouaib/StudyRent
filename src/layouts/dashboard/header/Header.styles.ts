import { width } from '@mui/system';
import { Box, styled } from '@mui/material';
import theme from '../../../theme';

export const HeaderDashboard = styled(Box)(() => ({
  height: '2rem',
  display: 'flex',
}));
export const BoxHeader = styled(Box)(() => ({
  justifyContent: 'end',
  display: 'flex',
  width: '100%',
  //   [theme.breakpoints.down(935)]: {
  //     marginLeft: '2rem',
  //   },
}));
