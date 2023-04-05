import { Card, styled } from '@mui/material';
import theme from '../../theme';
export const Image = styled('img')(() => ({
  height: 40,
  width: 40,
  [theme.breakpoints.down('sm')]: {},
}));
