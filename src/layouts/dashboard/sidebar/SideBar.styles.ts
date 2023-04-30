import { Link as RouterLink } from 'react-router-dom';
import { COLORS } from '../../../config/colors';
import { Box, styled } from '@mui/material';
import theme from '../../../theme';
export const BoxItemsSidebar = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  left: '0',
  top: '0',
  textAlign: 'center',
  padding: '8px 0px',
}));
export const BoxSidebar = styled(Box)(() => ({
  position: 'relative',
  height: '100%',
  backgroundColor: `${theme.palette.warning.main}`,
  width: '11rem',
  [theme.breakpoints.down('sm')]: {
    width: '6rem',
  },
}));
export const Txt_link = styled('h3')({
  paddingRight: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
});
