import styled from '@emotion/styled';

import theme from '../../theme';
import { Box } from '@mui/material';
export const ImgAbout = styled('img')({
  height: 'auto',
  Width: '100%',
  padding: '5px',
  [theme.breakpoints.down('sm')]: {},
});
export const BoxStyled = styled(Box)({
  [theme.breakpoints.down(1100)]: {},
});
