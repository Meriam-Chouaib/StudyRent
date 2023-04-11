import { Box, styled } from '@mui/material';
import theme from '../../../theme';
import Typography from '@mui/material/Typography';

export const BoxStyled = styled(Box)(() => ({
  boxShadow: '0px 0px 7px -1px gray',
  marginTop: '1rem',
  paddingY: '1rem',
  width: '80%',
  [theme.breakpoints.down('md')]: {
    width: '75%',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    width: '75%',
  },
}));
export const CustomTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
}));
