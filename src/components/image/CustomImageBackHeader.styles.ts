import { styled } from '@mui/material';
import theme from '../../theme';
export const CustomImageBackHeader = styled('img')({
  Width: 80,
  zIndex: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  height: '24rem',
  width: '15rem',
  [theme.breakpoints.down('sm')]: {},
});
