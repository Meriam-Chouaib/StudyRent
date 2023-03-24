import { Button, styled } from '@mui/material';
import { FONT } from '../../../config/font';
export const CustomButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.warning.main,
  fontFamily: FONT,
  fontSize: '13px',
  width: '100%',
  padding: '8px 23px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
