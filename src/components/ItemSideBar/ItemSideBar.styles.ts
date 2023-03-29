import { Box, styled } from '@mui/material';
import theme from '../../theme';

export const ItemStyled = styled(Box)((bgColor) => ({
  backgroundColor: `${bgColor}`,
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 4px',
  '&:hover': {
    backgroundColor: `${theme.palette.warning.light}`,
  },
}));
