import { COLORS } from './../../../config/colors';
import { AppBar, Box, Stack, styled } from '@mui/material';
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
  [theme.breakpoints.down(895)]: {
    display: 'block',
    top: '2%',
    right: '0%',
  },
});
export const BoxDrawerDashboard = styled(Box)({
  position: 'fixed',

  display: 'none',
  [theme.breakpoints.down(900)]: {
    top: '0%',
    left: '0%',
    display: 'block',
  },
});
export const BoxDisplayWeb = styled(Box)({
  display: 'block',
  [theme.breakpoints.down(895)]: {
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
export const BoxStyled = styled(Stack)({
  [theme.breakpoints.down(715)]: {
    //    width: '35%',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
});
// export const StackHeader = styled(Stack)({
//   display: 'flex',
//   direction: 'row',
//   justifyContent: 'flex-end',
//   alignItems: 'center',
//   spacing: 4,
//   width: '100%',
//   paddingRight: '1rem',
// });
export const StackHeader = styled(Stack)({
  justifyContent: 'center',
  paddingRight: '1rem',
  [theme.breakpoints.down(817)]: {
    justifyContent: 'flex-end',
    // paddingRight: '5rem',
  },
  [theme.breakpoints.down(600)]: {
    paddingRight: '5rem',
  },
});
