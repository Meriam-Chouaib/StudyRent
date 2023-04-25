import styled from '@emotion/styled';

import theme from '../../theme';
export const ImageStyled = styled('img')({
  borderRadius: '20rem',
  width: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
});
