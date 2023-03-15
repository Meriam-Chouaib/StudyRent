import { Typography } from '@mui/material';
import { StyledLink } from '../../layouts/main/header/header.styles';

type LinkItemProps = {
  path: string;
  name: string;
};

export const LinkItem = ({ path, name }: LinkItemProps) => {
  return (
    <StyledLink to={path}>
      <Typography variant="h3"> {name}</Typography>
    </StyledLink>
  );
};
