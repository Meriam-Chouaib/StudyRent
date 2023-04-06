/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import theme from '../../theme';
import { LinkItem } from '../LinkItem/LinkItem';
import { ItemStyled } from './ItemSideBar.styles';
import { ItemSideBarProps } from './ItemSideBar.types';
import { useState } from 'react';

export const ItemSideBar = ({ icon, txt, bgColor, path, isActive }: ItemSideBarProps) => {
  //   const [isActive, setIsActive] = useState(false);
  //   const handleClick: any = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     e.preventDefault();
  //     console.log('The link was clicked.');
  //     setIsActive(!isActive);
  //     console.log(isActive);
  //   };
  return (
    <>
      <ItemStyled
        bgcolor={isActive ? `${theme.palette.primary.main}` : `${theme.palette.warning.main}`}
      >
        <>{icon}</>
        <LinkItem path={path} name={txt} />
      </ItemStyled>
    </>
  );
};
