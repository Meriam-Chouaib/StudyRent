import { Box, styled } from '@mui/material';
export const BoxCenterStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 0px',
}));

export const BoxEmptyList = styled(Box)(() => ({
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
}));
