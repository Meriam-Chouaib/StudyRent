import { styled } from '@mui/material/styles';
import theme from '../../theme';

export const Img = styled('img')(({ width, height }) => ({
  height: height || '9rem',
  width: width || 'auto',
  borderRadius: 27,
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    // height: 25,
    width: 'auto !important',
  },
}));
