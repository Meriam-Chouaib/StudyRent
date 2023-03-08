import { Input, styled, TextField } from '@mui/material';
import { FONT } from '../../../config/font';
export const BasicTextField = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontFamily: FONT,
  fontWeight: 'bold',
  padding: '30px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  borderBottom: 'solid 3px #221E58',
}));
