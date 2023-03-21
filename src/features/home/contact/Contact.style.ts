import { styled, Box } from '@mui/material';
import theme from '../../../theme';

export default {};
export const CustomImageMap = styled('img')({
  height: '100%',
  boxShadow: `1px 1px 7px 1px  ${theme.palette.grey[200]}`,
  width: '80%',
  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
});
export const BoxImageMap = styled(Box)({
  height: '50%',
  textAlign: 'end',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
});
