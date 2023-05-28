import styled from '@emotion/styled';

import theme from '../../theme';
export const CustomImageFlesh = styled('img')({
  position: 'absolute',

  right: '6%',
  bottom: '-45%',
  height: '9rem',
  [theme.breakpoints.down(1002)]: {
    display: 'none',
  },
});
