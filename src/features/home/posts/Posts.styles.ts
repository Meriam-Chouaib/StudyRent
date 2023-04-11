import { Box, styled } from '@mui/material';
import { COLORS } from '../../../config/colors';

export const CustomBoxPosts = styled(Box)(() => ({
  borderRadius: '3rem',

  '&hover': {
    backgroundColor: COLORS.PRIMARY.MAIN,
  },
}));
