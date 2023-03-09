import { Button, styled } from '@mui/material';
import { FONT } from '../../../config/font';
export const CustomButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.warning.main,
  fontFamily: FONT,
  fontSize: '12px',
  width: '40%',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
