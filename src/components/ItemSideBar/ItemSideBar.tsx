import theme from '../../theme';
import { LinkItem } from '../LinkItem/LinkItem';
import { ItemStyled } from './ItemSideBar.styles';
import { ItemSideBarProps } from './ItemSideBar.types';

export const ItemSideBar = ({ icon, txt, path, isActive }: ItemSideBarProps) => {
  return (
    <>
      <ItemStyled bgcolor={isActive ? theme.palette.primary.main : theme.palette.warning.main}>
        <>{icon}</>
        <LinkItem path={path} name={txt} isActive={isActive} isDashboardPath={true} />
      </ItemStyled>
    </>
  );
};
