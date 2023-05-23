import { width } from '@mui/system';
import { Box, styled, Grid } from '@mui/material';
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
export const GridCenter = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
export const WarningMsg = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  backgroundColor: 'orange',
  color: 'White',
  fontSize: '16px',
  display: 'flex',
  padding: '5px 0',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));
