import { styled, Box } from '@mui/material';
import theme from '../../../theme';

export default {};
export const CustomImageMap = styled(Box)({
  backgroundImage: `url(${require('../../../assets/images/plugin_easy_maps.png.webp')})`,
  backgroundPosition: 'center',
  borderRadius: '3rem',
  height: '14rem',
  boxShadow: `1px 1px 7px 1px  ${theme.palette.grey[200]}`,
  width: '100%',
});
export const BoxImageMap = styled(Box)({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
});
