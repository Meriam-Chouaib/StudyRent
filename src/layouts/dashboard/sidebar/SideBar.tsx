// _____________________________________React _____________________________________
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// _____________________________________ mui ______________________________________
import { Box } from '@mui/material';

// _____________________________________components ________________________________
import { ItemSideBar } from '../../../components/ItemSideBar/ItemSideBar';
import { LogoHeader } from '../../../components';
import { ImageSideBack } from '../../../components/image/ImageSideBack.styles';

// _____________________________________styles ____________________________________
import { BoxItemsSidebar, BoxSidebar } from './SideBar.styles';
import { SideBarProps } from './SideBar.types';

// _____________________________________ assets ___________________________________
import logoDark from '../../../assets/images/logo-bleu-roi.svg';
import ImgBack from '../../../assets/images/ImgBackSideBar.svg';

// _____________________________________config ____________________________________
import { PATHS } from '../../../config/paths';

export default function SideBar({ items, activePath }: SideBarProps) {
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
              {items.map((item) => (
                <>
                  <ItemSideBar
                    icon={item.icon}
                    txt={t(item.txt)}
                    key={item.txt}
                    path={item.path}
                    isActive={
                      item.txt === 'dashboardSidebar.posts'
                        ? activePath.includes(
                            `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.POST.LIST}`,
                          ) ||
                          activePath.includes(
                            `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}`,
                          )
                        : activePath.includes(`/${PATHS.DASHBOARD.ROOT}/${item.path}`)
                    }
                  />
                </>
              ))}
            </Box>
            <ImageSideBack src={ImgBack} />
          </>
        </BoxItemsSidebar>
      </BoxSidebar>
    </>
  );
}
