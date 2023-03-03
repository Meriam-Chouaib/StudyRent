import { Button, styled } from '@mui/material';
import { FONT } from '../../../config/font';
export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontFamily: FONT,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));
