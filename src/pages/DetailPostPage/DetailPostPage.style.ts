import { Box, styled, Stack } from '@mui/material';
import theme from '../../theme';
export const BoxImages = styled(Box)(() => ({
  boxShadow: `1px 1px 8px -2.5px ${theme.palette.grey[700]}`,

  height: '20rem',

  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down(850)]: {
    height: '15rem',
  },
  [theme.breakpoints.down(700)]: {
    height: '10rem',
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
  height: '100%',
  objectFit: 'cover',
}));

export const ArrowSlider = styled('img')(() => ({
  width: '2rem',
  height: '2rem',
  objectFit: 'cover',
  position: 'absolute',
}));
export const BoxArrowRight = styled(Box)(() => ({
  position: 'absolute',
  right: '11%',
  top: '17%',
  transform: 'translateY(50%)',
  zIndex: 22,

  [theme.breakpoints.down(850)]: {
    top: '18%',
  },
  [theme.breakpoints.down(700)]: {
    top: '15%',
  },
  [theme.breakpoints.down('sm')]: {
    top: '11%',
  },
}));
export const BoxArrowLeft = styled(Box)(() => ({
  position: 'absolute',
  left: '9%',
  top: '17%',
  transform: 'translateY(-50%)',
  zIndex: 22,

  [theme.breakpoints.down(850)]: {
    top: '18%',
  },
  [theme.breakpoints.down(700)]: {
    top: '15%',
  },
  [theme.breakpoints.down('sm')]: {
    top: '11%',
  },
}));
