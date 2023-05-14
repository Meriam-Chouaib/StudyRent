import { Box, Stack, styled } from '@mui/material';
import theme from '../../theme';

export const StackStyled = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '90%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
export const ImgProfile = styled('img')({
  height: '9rem',
  Width: 'auto',
  borderRadius: 27,
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    // height: 25,
    Width: 'auto !important',
  },
});
export const BoxStyled = styled(Box)(() => ({
  marginTop: '1rem',
  paddingY: '1rem',
  width: '80%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marging: 0,
    padding: 0,
  },
}));
