import { AppBar, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { COLORS } from '../../../config/colors';

import theme from '../../../theme';
export const BackLeftBack = styled('img')({
  height: 100,
  Width: 80,
  [theme.breakpoints.down('sm')]: {
    height: '8vh',
  },
});

export const AppBarStyled = styled(AppBar)(() => ({
  backgroundColor: 'white',
  boxShadow: 'none',
}));
export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  padding-inline: 9px;
  font-weight: 500;
  color: ${COLORS.PRIMARY.DARK};
`;

export const CustomImageTop = styled('img')({
  height: 100,
  Width: 80,
  [theme.breakpoints.down('sm')]: {
    height: '8vh',
  },
});
