// mui
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { LinkItem } from '../../../../components';
import { PATHS } from '../../../../config/paths';
import { useTranslation } from 'react-i18next';
import { AppBar, DrawerHeader, ListStyled } from './DrawerMenu.styles';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import { ItemsType } from './ItemsDrawer';
interface DrawerPartProps {
  Items: ItemsType;
  isMain: boolean;
}
export const DrawerPart = ({ Items, isMain }: DrawerPartProps) => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // trasnslation
  const { t } = useTranslation();
  console.log(Items);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ left: isMain ? 'auto' : 0, right: isMain ? 0 : 'auto', minHeight: 'auto' }}
        open={open}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', minHeight: 'auto' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, minHeight: 'auto', margin: 0, ...(open && { display: 'none' }) }}
          >
            <MenuIcon color="primary" sx={{ fontSize: '2rem', minHeight: 'auto' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor={isMain ? 'right' : 'left'} open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListStyled sx={{ gap: 3 }}>
          {Object.values(Items).map((item, index) => (
            <LinkItem name={t(item.name)} path={item.path as string} key={index} />
          ))}
        </ListStyled>
      </Drawer>
    </>
  );
};
