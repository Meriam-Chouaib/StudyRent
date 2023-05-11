import { Stack, styled } from '@mui/material';
import theme from '../../theme';
export const CustomStackStyled = styled(Stack)(() => ({
  paddingInline: '20%',
}));
export const StackCenter = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down(978)]: {
    flexDirection: 'column',
  },
}));
