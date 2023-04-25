import { Box, styled } from '@mui/material';
import { COLORS } from '../../../config/colors';
import theme from '../../../theme';

export const CustomBoxPosts = styled(Box)(() => ({
  borderRadius: '3rem',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '&hover': {
    backgroundColor: COLORS.PRIMARY.MAIN,
  },
  [theme.breakpoints.down('md')]: {
    margin: '3rem 0',
  },
}));
