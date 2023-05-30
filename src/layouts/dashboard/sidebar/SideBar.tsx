import { Box } from '@mui/material';
import { ItemSideBar } from '../../../components/ItemSideBar/ItemSideBar';
import theme from '../../../theme';
import { BoxItemsSidebar, BoxSidebar } from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import logoDark from '../../../assets/images/logo-bleu-roi.svg';
import { LinkItem, LogoHeader } from '../../../components';
import { ImageSideBack } from '../../../components/image/ImageSideBack.styles';
import ImgBack from '../../../assets/images/ImgBackSideBar.svg';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../../config/paths';
import { BoxDrawer, BoxDrawerDashboard } from '../../main/header/header.styles';
import { DrawerPart } from '../../main/header/DrawerMenu/DrawerMenu';
import { ItemsDashboard } from '../../main/header/DrawerMenu/ItemsDrawer';
import { IUser } from '../../../redux/api/user/user.types';
export default function SideBar({ items, activePath }: SideBarProps) {
  // const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <BoxSidebar>
        <BoxItemsSidebar>
          <>
            <NavLink to={PATHS.ROOT}>
              <LogoHeader sx={{ height: '50px' }} src={logoDark} alt={'logo'} />
            </NavLink>
            <Box sx={{ marginTop: '5rem' }}>
              {items.map((item, index) => (
                <>
                  <ItemSideBar
                    icon={item.icon}
                    txt={t(item.txt)}
                    key={item.txt}
                    path={item.path}
                    isActive={activePath === `/${PATHS.DASHBOARD.ROOT}/${item.path}`}
                  />
                </>
              ))}
            </Box>
            <ImageSideBack src={ImgBack} />
          </>
        </BoxItemsSidebar>
      </BoxSidebar>
      {/* <BoxDrawerDashboard>
        <DrawerPart Items={ItemsDashboard} isMain={false} />
      </BoxDrawerDashboard> */}
    </>
  );
}
