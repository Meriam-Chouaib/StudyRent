import styled from '@emotion/styled';

import theme from '../../theme';
import { Box } from '@mui/material';
export const CustumImage = styled('img')({
  height: '10rem',
  width: '10rem',
  objectFit: 'contain',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
});
export const BoxFlesh = styled(Box)({
  position: 'absolute',
  top: ' -22px',
  right: '28%',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
});
