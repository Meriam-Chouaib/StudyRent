// mui
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { LinkItem } from '../../../components';
import { PATHS } from '../../../config/paths';
import { useTranslation } from 'react-i18next';
import { AppBar, DrawerHeader, ListStyled } from './DrawerMenu.styles';
import { useState } from 'react';
import { Drawer } from '@mui/material';

export const DrawerPart = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // trasnslation
  const { t } = useTranslation();

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="right" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListStyled sx={{ gap: 3 }}>
          <LinkItem name={t('header.link_home')} path={PATHS.MAIN.HOME} />
          <LinkItem name={t('header.link_about')} path={PATHS.ABOUT} />
          <LinkItem name={t('header.link_posts')} path={PATHS.POSTS} />
          <LinkItem name={t('header.link_contact')} path={PATHS.CONTACT} />
        </ListStyled>
      </Drawer>
    </>
  );
};
