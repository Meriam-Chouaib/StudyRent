import { Box, styled } from '@mui/material';
export const ItemStyled = styled(Box)(() => ({ theme }) => ({
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  paddingInline: '1rem',
  '&:hover': {},
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    padding: '0.5rem 0px',
  },
}));
