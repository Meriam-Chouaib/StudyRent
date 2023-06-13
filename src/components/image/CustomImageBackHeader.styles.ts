import { styled } from '@mui/material';
import theme from '../../theme';
export const CustomImageBackHeader = styled('img')({
  Width: 80,
  zIndex: '0',
  position: 'absolute',
  top: '-85px',
  left: '0',
  height: '30rem',
  width: '19rem',
  [theme.breakpoints.down(940)]: {
    height: '11rem',
    width: '7rem',
  },
});
