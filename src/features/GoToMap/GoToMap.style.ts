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
  top: ' 0%',
  right: '23%',
  [theme.breakpoints.down('md')]: {
    right: '12%',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});
