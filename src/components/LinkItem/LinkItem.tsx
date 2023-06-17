// _______________________________ styles ____________________________________
import { Txt_link } from '../../layouts/dashboard/sidebar/SideBar.styles';
import { StyledLink } from '../../layouts/main/header/header.styles';
import theme from '../../theme';

type LinkItemProps = {
  path: string;
  name: string;
  isActive?: boolean;
  isDashboardPath?: boolean;
};

export const LinkItem = ({ path, name, isActive, isDashboardPath }: LinkItemProps) => {
  return (
    <StyledLink
      to={path}
      isDashboardPath={isDashboardPath}
      color={isActive ? theme.palette.warning.main : theme.palette.primary.main}
    >
      <Txt_link>{name}</Txt_link>
    </StyledLink>
  );
};
