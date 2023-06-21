import { styled } from '@mui/material/styles';
import theme from '../../theme';

export const Img = styled('img')(({ width, height }) => ({
  height: height || '9rem',
  width: width || 'auto',
  borderRadius: 27,
  objectFit: 'contain',
  [theme.breakpoints.down(649)]: {
    height: height === '120px' && '14rem',
    width: height === '120px' && 'auto !important',
  },
  [theme.breakpoints.down(470)]: {
    height: height === '120px' && '12rem',
  },
  [theme.breakpoints.down(390)]: {
    height: height === '120px' && '10rem',
  },
  [theme.breakpoints.down(328)]: {
    height: height === '120px' && '10rem',
  },
}));
