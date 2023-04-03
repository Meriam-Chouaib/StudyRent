import { Box, Typography } from '@mui/material';
import theme from '../../theme';
import { LinkItem } from '../LinkItem/LinkItem';
import { ItemStyled } from './ItemSideBar.styles';
import { ItemSideBarProps } from './ItemSideBar.types';

export const ItemSideBar = ({ icon, txt, bgColor, isActive, path }: ItemSideBarProps) => {
  return (
    <>
      <ItemStyled
        //  bgcolor={isActive ? `${theme.palette.warning.main}` : `${theme.palette.warning.light}`}
        bgcolor={bgColor}
      >
        <>{icon}</>
        <LinkItem path={path} name={txt} />
      </ItemStyled>
    </>
  );
};
