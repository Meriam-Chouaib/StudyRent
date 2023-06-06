import { Box, styled, Stack } from '@mui/material';
import theme from '../../theme';
export const BoxImages = styled(Box)(() => ({
  boxShadow: `1px 1px 8px -2.5px ${theme.palette.grey[700]}`,
  '&:hover': {
    cursor: 'pointer',
  },
}));
export const StackPostInfo = styled(Stack)(() => ({
  width: '100%',
  padding: '2rem 0',
  alignItems: 'flex-start',
  [theme.breakpoints.down(800)]: {},
}));
export const ImgSlider = styled('img')(() => ({
  width: '100%',
  height: '20rem',
  objectFit: 'cover',
}));
