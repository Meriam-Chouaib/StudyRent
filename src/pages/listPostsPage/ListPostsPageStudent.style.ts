import { width } from '@mui/system';
import { Box, styled } from '@mui/material';
import theme from '../../theme';
export const BoxCenterFilter = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  padding: ' 3.3rem 0 0',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    width: '50%',
  },
}));
