import { Box, styled } from '@mui/material';
import { COLORS } from '../../../config/colors';
import theme from '../../../theme';

export const CustomBoxPosts = styled(Box)(({ theme, padding }) => ({
  borderRadius: '3rem',
  justifyContent: 'center',
  display: 'flex',
  padding: `${padding}`,
  flexDirection: 'column',
  alignItems: 'center',
  '&hover': {
    backgroundColor: COLORS.PRIMARY.MAIN,
  },
}));
