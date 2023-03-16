import { Box, styled } from '@mui/material';
import { COLORS } from '../../../config/colors';

export const CustomBoxPosts = styled(Box)(() => ({
  backgroundColor: COLORS.PRIMARY.MAIN,
  borderRadius: '3rem',
  padding: '44px 58px',
  margin: '2rem 0px',
  '&hover': {
    backgroundColor: COLORS.PRIMARY.MAIN,
  },
}));
