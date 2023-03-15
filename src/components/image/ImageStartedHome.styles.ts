import { styled } from '@mui/material';
import theme from '../../theme';
export const ImageStartedHome = styled('img')({
  width: '28rem',
  [theme.breakpoints.down('md')]: {
    width: '18rem',
  },
});
