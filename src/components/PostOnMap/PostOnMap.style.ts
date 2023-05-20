import { Stack, styled } from '@mui/material';
import { COLORS } from '../../config/colors';

export const ImgPost = styled('img')(() => ({
  width: '100%',
  boxShadow: `1px 1px 8px -2px ${COLORS.GREY[800]}`,
  borderRadius: '7px',
}));
export const StackInfoCard = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));
