import { Box } from '@mui/material';
import { ItemSideBar } from '../../../components/ItemSideBar/ItemSideBar';
import theme from '../../../theme';
import { BoxItemsSidebar, BoxSidebar } from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import logoDark from '../../../assets/images/logo-bleu-roi.svg';
import { LogoHeader } from '../../../components';
import { ImageSideBack } from '../../../components/image/ImageSideBack.styles';
import ImgBack from '../../../assets/images/ImgBackSideBar.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../../config/paths';
export default function SideBar({ items, activePath }: SideBarProps) {
  // const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation();
  return (
    <BoxSidebar>
      <BoxItemsSidebar>
        <>
          <LogoHeader sx={{ height: '50px' }} src={logoDark} alt={'logo'} />
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
  );
}
