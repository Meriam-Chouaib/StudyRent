import styled from '@emotion/styled';

import theme from '../../theme';
export const CustomImageFlesh = styled('img')({
  position: 'absolute',

  right: '6%',
  bottom: '-45%',
  height: '9rem',
  [theme.breakpoints.down(1002)]: {
    bottom: '-44%',
  },
  [theme.breakpoints.down('md')]: {
    height: '7rem',
  },

  [theme.breakpoints.down(771)]: {
    display: 'none',
  },
});
