import styled from '@emotion/styled';

import theme from '../theme';
export const CustomImageTop = styled('img')({
  height: 100,
  Width: 80,
  [theme.breakpoints.down('sm')]: {
    height: '20vh',
  },
});
