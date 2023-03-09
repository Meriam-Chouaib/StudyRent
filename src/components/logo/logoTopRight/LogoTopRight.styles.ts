import styled from '@emotion/styled';

import theme from '../../../theme';
export const StyledLogoTopRight = styled('img')({
  height: '67px',
  Width: '97px',

  [theme.breakpoints.down('md')]: {
    height: '7vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '7vh',
  },
});
