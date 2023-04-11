import { Button, styled } from '@mui/material';
import { FONT } from '../../../config/font';
export const CustomButtonStyle = styled(Button)(({ theme }) => ({
  fontFamily: FONT,
  fontSize: '13px',
  width: '100%',
  padding: '8px 23px',
  fontWeight: 'bold',
  boxShadow: `1px 1px 8px -2px ${theme.palette.grey[300]}`,

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
