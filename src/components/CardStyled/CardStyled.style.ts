import { Card, styled } from '@mui/material';
import theme from '../../theme';
export const CardStyled = styled(Card)(() => ({
  width: '50%',
  padding: '20px',
  boxShadow: '1px 1px 6px 1px #cfcece',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    boxShadow: '1px 1px 6px 1px transparent',
  },
}));
