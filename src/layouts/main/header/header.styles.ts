import { COLORS } from './../../../config/colors';
import { AppBar, Box, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
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
  color: ${(props) => props.color};
`;

// Box
export const BoxDrawer = styled(Box)({
  position: 'fixed',

  display: 'none',
  [theme.breakpoints.down(715)]: {
    display: 'block',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    top: '3%',
    right: '0%',
  },
});
export const BoxDisplayWeb = styled(Box)({
  display: 'block',
  [theme.breakpoints.down(715)]: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});
export const IconUserStatus = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  color: 'transparent',
  objectFit: 'contain',

  height: '11px',
  width: '11px',
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
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    height: 25,
    Width: 'auto !important',
  },
});
export const BoxSelectItemStyled = styled(Box)({
  zIndex: 11,
  position: 'absolute',
  top: '100%',
  right: 0,
  mt: '0.5rem',
  p: '0.5rem',
  backgroundColor: 'white',
  borderRadius: 'default',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});
export const BoxStyled = styled(Box)({
  [theme.breakpoints.down(715)]: {
    width: '35%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export const BoxMenuSelect = styled(Box)({
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
  },
});
