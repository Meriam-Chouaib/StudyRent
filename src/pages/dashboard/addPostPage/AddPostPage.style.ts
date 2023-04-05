import { Box, styled } from '@mui/material';
import theme from '../../../theme';

export const BoxStyled = styled(Box)(() => ({
  boxShadow: '0px 0px 7px -1px gray',
  marginTop: '1rem',
  paddingY: '1rem',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '70%',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
