import { Stack, styled } from '@mui/material';
import theme from '../../theme';
export const CustomStackStyled = styled(Stack)(() => ({
  paddingInline: '20%',
}));
export const StackCenter = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down(978)]: {
    flexDirection: 'column',
  },
}));
export const StackItemDashboard = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  boxShadow: `1px 1px 7px 1px  ${theme.palette.grey[400]}`,
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '5px 5px',
  [theme.breakpoints.down(649)]: { flexDirection: 'column' },
}));
