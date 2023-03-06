import styled from '@emotion/styled';

import theme from '../../../theme';
export const StyledLogoTopRight = styled('img')({
  height: '67px',
  Width: '97px',

  [theme.breakpoints.down('sm')]: {
    height: '9vh',
  },
});
