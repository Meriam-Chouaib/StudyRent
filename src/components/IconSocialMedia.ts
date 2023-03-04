import styled from '@emotion/styled';

import theme from '../theme';
export const IconSocialMedia = styled('img')({
  height: 80,
  Width: 80,
  [theme.breakpoints.down('sm')]: {
    height: '10vh',
  },
});
