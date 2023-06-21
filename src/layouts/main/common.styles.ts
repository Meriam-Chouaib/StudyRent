import { styled } from '@mui/material';
import theme from '../../theme';

export const BackImagePink = styled('img')({
  position: 'absolute',
  right: '0',
  width: '4rem',
  top: '8%',
  [theme.breakpoints.down('md')]: {
    width: '2rem',
  },
});
export const BackImagePinkLeft = styled('img')({
  position: 'absolute',
  left: '0',
  width: '4rem',

  top: '69%',
  zIndex: '-1',
  [theme.breakpoints.down('sm')]: {
    width: '2rem',
  },
});
