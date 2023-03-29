export default {};
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
  height: '89vh',
  backgroundColor: `${theme.palette.warning.main}`,
  width: '11rem',
}));
