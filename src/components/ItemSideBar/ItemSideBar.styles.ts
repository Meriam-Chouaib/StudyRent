import { Box, styled } from '@mui/material';
import theme from '../../theme';

export const ItemStyled = styled(Box)((bgColor) => ({
  backgroundColor: `${bgColor}`,
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: `${theme.palette.warning.light}`,
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    padding: '0.5rem 0px',
  },
}));
