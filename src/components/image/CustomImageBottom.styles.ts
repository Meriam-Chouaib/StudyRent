import styled from '@emotion/styled';

import theme from '../../theme';
export const CustomImageBottom = styled('img')({
  height: 100,
  Width: 80,
  position: 'absolute',
  bottom: '0',
  right: '0',
  [theme.breakpoints.down('md')]: {
    height: '10vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '8vh',
  },
});
