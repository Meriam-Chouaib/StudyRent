import styled from '@emotion/styled';
import theme from '../../../theme';
export const CustomImgLogo = styled('img')({
  height: '9vh',

  [theme.breakpoints.down('sm')]: {
    height: '6vh',
  },
});
