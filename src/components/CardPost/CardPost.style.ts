import { styled, Card, Box } from '@mui/material';
import { COLORS } from '../../config/colors';

export const CardPostStyled = styled(Card)(() => ({
  borderRadius: '0px 0px 5rem 0px',
  boxShadow: `1px 1px 3px 1px ${COLORS.GREY[600]}`,
  width: '18rem',
}));
export const BoxHoverEye = styled(Box)(() => ({
  backgroundColor: `${COLORS.GREY[100]}`,
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  textAlign: 'center',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
}));
export const BoxItemCard = styled(Box)(() => ({
  justifyContent: 'flex-start',
  display: 'flex',
  alignItems: 'center',
}));
