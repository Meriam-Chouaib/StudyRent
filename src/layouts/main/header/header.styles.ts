import { AppBar, Box, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { COLORS } from '../../../config/colors';
import theme from '../../../theme';

export const AppBarStyled = styled(AppBar)(() => ({
  backgroundColor: 'white',
  boxShadow: 'none',
}));
export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  padding-inline: 9px;
  width: max-content;
  font-weight: 500;
  color: ${COLORS.PRIMARY.DARK};
`;

// Box
export const BoxDrawer = styled(Box)({
  position: 'fixed',

  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
    top: '3%',
    right: '0%',
  },
});
export const BoxDisplayWeb = styled(Box)({
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});
export const IconUserStatus = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  color: 'transparent',

  height: '10px',
  width: '9px',
  border: '2px solid white',
  borderRadius: '20px',
});
// imgs
export const BackLeftBack = styled('img')({
  height: 100,
  Width: 80,
  [theme.breakpoints.down('sm')]: {
    height: '8vh',
  },
});
export const CustomImageTop = styled('img')({
  height: 100,
  Width: 80,
  [theme.breakpoints.down('sm')]: {
    height: '8vh',
  },
});
export const ImgProfile = styled('img')({
  height: 33,
  Width: '33 px',
  borderRadius: 27,
  [theme.breakpoints.down('sm')]: {
    height: 25,
    Width: 'auto !important',
  },
});
