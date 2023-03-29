import { styled } from '@mui/material';
import theme from '../../theme';
export const ImageSideBack = styled('img')({
  zIndex: '0',
  position: 'absolute',

  left: '0',
  height: '24rem',
  width: '4rem',
  [theme.breakpoints.down('sm')]: {},
});
