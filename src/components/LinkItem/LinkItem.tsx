import { Txt_link } from '../../layouts/dashboard/sidebar/SideBar.styles';
import { StyledLink } from '../../layouts/main/header/header.styles';

type LinkItemProps = {
  path: string;
  name: string;
};

export const LinkItem = ({ path, name }: LinkItemProps) => {
  return (
    <StyledLink to={path}>
      <Txt_link> {name}</Txt_link>
    </StyledLink>
  );
};
