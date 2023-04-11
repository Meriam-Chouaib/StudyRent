import { Box, styled } from '@mui/material';
export const ItemStyled = styled(Box)(({ isActive }: { isActive?: boolean }) => ({ theme }) => ({
  backgroundColor: isActive ? theme.palette.primary.main : theme.palette.warning.main,
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
