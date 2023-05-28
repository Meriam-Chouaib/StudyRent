import { Box, Button, styled, Typography } from '@mui/material';
import { FONT } from '../../config/font';
import theme from '../../theme';
export const BoxCenter = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
export const ButtonIconStyled = styled(Button)(() => ({
  backgroundColor: theme.palette.warning.dark,
  fontFamily: FONT,
  textAlign: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  fontWeight: '600',
  display: 'flex',
  width: 'fit-content',
  margin: '38px 0px 0px 0',
  boxShadow: `1px 1px 8px -2.5px ${theme.palette.grey[700]}`,
  '&:hover': {
    backgroundColor: theme.palette.warning.light,
  },
}));
export const TypographyStyled = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
