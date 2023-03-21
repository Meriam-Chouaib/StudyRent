import { styled } from '@mui/material';
import { COLORS } from '../../../config/colors';
import { Link as RouterLink } from 'react-router-dom';

export default {
  // styles go here
};
export const StyledLinkFooter = styled(RouterLink)`
  text-decoration: none;
  padding-inline: 9px;font-size:15px;
  width: max-content;
  letter-spacing: 3px ;
  font-weight: 600;
  color: ${COLORS.WARNING.MAIN};
  '&:hover': {
    color: ${COLORS.SECONDARY.LIGHT};
  },
`;
export const ImgMedia = styled('img')({
  height: '2rem',
  width: '2rem',
  margin: '0px 9px',
});
