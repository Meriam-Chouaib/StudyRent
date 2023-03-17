import styled from '@emotion/styled';

import theme from '../../theme';
export const CustomImageFlesh = styled('img')({
  position: 'absolute',

  right: '42%',
  bottom: '0',
  height: '10rem',
  [theme.breakpoints.down('md')]: {
    height: '7rem',
    right: '40%',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});
