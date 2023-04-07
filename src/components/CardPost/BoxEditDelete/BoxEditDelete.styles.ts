import { Box, styled } from '@mui/material';
import theme from '../../../theme';
export const BoxEditDeleteStyled = styled(Box)(() => ({
  backgroundColor: theme.palette.warning.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 0px',
}));
export const BoxIconStyled = styled(Box)(() => ({
  backgroundColor: theme.palette.primary.main,
  padding: '3px',
  borderRadius: '2rem',
  height: '27px',
  marginRight: '1rem',
}));
