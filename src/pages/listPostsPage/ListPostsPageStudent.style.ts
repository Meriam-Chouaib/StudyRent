import { width } from '@mui/system';
import { Box, styled, Grid, Input, Typography } from '@mui/material';
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
  padding: '0 0',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const InpuFilter = styled('input')(() => ({
  width: '3rem',
  boxShadow: `1px 1px 7px 1px  ${theme.palette.grey[200]}`,
  borderRadius: '2rem',
  textAlign: 'center',
}));
export const BoxFilter = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '3rem 0px',
    flexDirection: 'column',
  },
}));
export const NoFilter = styled(Box)(() => ({
  backgroundImage: `url(${require('../../assets/icons/filter.png')})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  padding: '0rem 1rem 0rem',
  height: '2rem',
  width: '2rem',
}));
export const LabelFilterValue = styled(Typography)`
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.palette.warning.main};
  width: auto;
  padding: 3px 10px;
`;
