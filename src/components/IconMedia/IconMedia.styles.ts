import styled from '@emotion/styled';

import theme from '../../theme';
export const ImgSocial = styled('img')({
  height: 30,
  Width: 30,
  padding: '5px',
  [theme.breakpoints.down('sm')]: {
    height: '5vh',
  },
});
