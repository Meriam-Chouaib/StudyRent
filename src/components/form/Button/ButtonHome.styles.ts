import { Button, styled } from '@mui/material';
import { FONT } from '../../../config/font';
export const ButtonHome = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.warning.main,
  fontFamily: FONT,
  fontSize: '12px',
  letterSpacing: '3px',

  fontWeight: 'bold',

  marginTop: '1.1rem',
  padding: '11px 23px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
