import { Typography } from '@material-ui/core';
import { Txt_link } from '../../layouts/dashboard/sidebar/SideBar.styles';
import { StyledLink } from '../../layouts/main/header/header.styles';
import theme from '../../theme';

type LinkItemProps = {
  path: string;
  name: string;
  isActive?: boolean;
};

export const LinkItem = ({ path, name, isActive }: LinkItemProps) => {
  console.log(isActive);

  return (
    <StyledLink
      to={path}
      color={`${isActive}? ${theme.palette.warning.main}:${theme.palette.primary.main}`}
    >
      {/* <StyledLink to={path} color={`${isActive}? ${theme.palette.warning.main}:${theme.palette.primary.main}`}> */}
      <Txt_link>{name}</Txt_link>
    </StyledLink>
  );
};
// color={`${isActive}? ${theme.palette.warning.main}:${theme.palette.primary.main}`}
