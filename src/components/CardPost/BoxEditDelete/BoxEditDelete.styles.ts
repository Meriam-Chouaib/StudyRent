import { Box, Button, styled } from '@mui/material';
import theme from '../../../theme';
export const BoxEditDeleteStyled = styled(Box)(() => ({
  backgroundColor: theme.palette.warning.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 0px',
}));
export const BoxIconStyled = styled(Box)((color) => ({
  //  backgroundColor: theme.palette.primary.main,
  padding: '3px',

  marginRight: '1rem',
  borderRadius: '4rem',
  width: '2rem',
  display: 'flex',
  height: '2rem',

  justifyContent: 'center',
  alignItems: 'center',
}));
export const ButtonConfirm = styled(Button)(() => ({
  fontSize: '14px',
  fontWeight: 700,
}));
